import React, { Component } from 'react';
import GifImage from '../gif';
import { react as PageContent } from '../../content/home.md';
import { copyToClipBoard } from '../../utilities/copy-text';
import { GifPageData } from '../../utilities/get-all-gifs';

export interface HomePageComponentProps {
  mainHeadline: string;
  gifs: GifPageData[];
}

export default class HomePageComponent extends Component<HomePageComponentProps> {
  render(): JSX.Element {
    const copyGifUrl = () => copyToClipBoard('.gif__copy-link', 'data-url');

    return (
      <div className={'page'}>
        <h1>{this.props.mainHeadline}</h1>
        <div>
          <PageContent />
          <div className="gifs grid">
            {
              this.props.gifs.map((gif, i) => {
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
