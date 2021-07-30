import { GetStaticPropsContext } from 'next';
import { Component } from 'react';
import GifImage from '../../components/gif';
import getAllGifs, { GifPageData } from '../../utilities/get-all-gifs';

export interface GifPageProps {
  id: string;
  gifData: GifPageData;
}

export default class Gif extends Component<GifPageProps> {
  render(): JSX.Element {
    const { gifData } = this.props;

    return (
      <div>
        <GifImage
          gifUrl={gifData.data.gif}
          title={gifData.data.title}
          tags={gifData.data.tags}
        />
      </div>
    );
  }
}


export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<Record<string, unknown>> {
  const { id } = context.params;

  const gifIndex = await getAllGifs();

  return {
    props: {
      id: id,
      gifData: gifIndex.find(gif => gif.id === id),
    },
  };
}

export async function getStaticPaths() {
  const gifIndex = await getAllGifs();

  const pathParamsObject = gifIndex.map(param => {
      return {
        params: {
          id: param.id,
          data: param.data,
        }
      }
    });

  return {
    paths: pathParamsObject,
    fallback: true,
  }
}
