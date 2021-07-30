import { Component } from 'react';

/**
 * Base class to share functionality between pages.
 */
export default abstract class BasePage<T> extends Component<T> {
  render(): JSX.Element {
    return null;
  }
}
