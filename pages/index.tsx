import React from 'react';
import HomePageComponent from '../components/pages/home';
import getAllGifs, { GifPageData } from '../utilities/get-all-gifs';
import { attributes, react as PageContent } from '../content/home.md';
import BasePage from './base';

export interface HomeProps {
  mainHeadline: string;
  gifIndex: GifPageData[];
}
export default class HomePage extends BasePage<HomeProps> {
  render(): JSX.Element {

    return (
      <HomePageComponent
        mainHeadline={this.props.mainHeadline}
        gifs={this.props.gifIndex}
      />
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
