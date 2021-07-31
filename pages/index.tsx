import React from 'react';
import GifImage from '../components/gif';
import { attributes, react as PageContent } from '../content/home.md';
import { copyToClipBoard } from '../utilities/copy-text';
import getAllGifs, { GifPageData } from '../utilities/get-all-gifs';
import BasePage from './base';

export interface HomeProps {
  mainHeadline: string;
  gifIndex: GifPageData[];
}

export default class HomePage extends BasePage<HomeProps> {
  render(): JSX.Element {
    const copyGifUrl = () => copyToClipBoard('.gif__copy-link', 'data-url');

    return (
      <div className={'page'}>
        <h1>{this.props.mainHeadline}</h1>
        <div>
          <PageContent />
          <div className="gifs grid">
            {
              this.props.gifIndex.map((gif, i) => {
                return (
                  <div key={i}>
                    <GifImage gifUrl={gif.data.gif} title={gif.data.title} />
                    <a href={`/gif/${encodeURIComponent(gif.id)}`}>View</a>
                    <span
                      className="gif__copy-link"
                      data-url={gif.data.gif}
                      onClick={copyGifUrl}>Copy</span>
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
