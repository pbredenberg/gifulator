import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { Component } from 'react';

/**
 * The base component is here to provided reusable functionality
 * to all the preview components that extend it.
 */
export default class BasePreview extends Component<PreviewTemplateComponentProps> {

  /**
   * Executes Netlify CMS' `widgetFor` to extract data from the CMS
   * inputs.
   *
   * @param widgetName
   */
  protected getData(widgetName: string) {
    const data = this.props.widgetFor(widgetName);

    if (!data || !data.props.value) {
      console.error('Could not resolve widget: ', widgetName);
      return;
    }

    return data.props.value;
  }
}
