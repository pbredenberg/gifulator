import React  from 'react';
import HomePageComponent from '../../components/pages/home';
import BasePreview from './base';

/**
 * This is an example preview component. Essentially, we are importing
 * the main page component, and wiring up the props from the CMS
 * to send render the data live.
 */
export default class HomePreview extends BasePreview {
  render(): JSX.Element {
    return (
      <HomePageComponent
        mainHeadline={this.getData('mainHeadline')}
        gifs={[]}
      />
    );
  }
}
