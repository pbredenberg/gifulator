import React  from 'react';
import Index from '../../pages/index';
import BasePreview from './base';

/**
 * This is an example preview component. Essentially, we are importing
 * the main page component, and wiring up the props from the CMS
 * to send render the data live.
 */
export default class HomePreview extends BasePreview {
  render(): JSX.Element {
    return (
      <Index
        mainHeadline={this.getData('mainHeadline')}
      />
    );
  }
}
