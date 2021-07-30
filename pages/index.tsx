import Link from 'next/link';
import React from 'react';
import GifImage from '../components/gif';
import { attributes, react as PageContent } from '../content/home.md';
import getAllGifs, { GifPageData } from '../utilities/get-all-gifs';
import BasePage from './base';

export interface HomeProps {
  mainHeadline: string;
  gifIndex: GifPageData[];
}

export default class HomePage extends BasePage<HomeProps> {
  render(): JSX.Element {
    return (
      <div className={'page'}>
        <h1>{this.props.mainHeadline}</h1>
        <div>
          <PageContent />
          <div>
            {
              this.props.gifIndex.map((gif, i) => {
                return (
                  <div key={i}>
                    <GifImage gifUrl={gif.data.gif} title={gif.data.title} />
                    <a href={`/gif/${encodeURIComponent(gif.id)}`}>View</a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export async function getStaticProps() {
  const markdownAttributes = attributes as HomeProps;

  return {
    props: {
      mainHeadline: markdownAttributes.mainHeadline,
      gifIndex: await getAllGifs(),
    }
  }
}
