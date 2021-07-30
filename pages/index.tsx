import { attributes, react as PageContent } from '../content/home.md';
import BasePage from './base';

export interface HomeProps {
  mainHeadline: string;
}

export default class HomePage extends BasePage<HomeProps> {
  render(): JSX.Element {
    const pageData = this.pageData(attributes as HomeProps, this.props);
    return (
      <div className={'page'}>
        <h1>{pageData.mainHeadline}</h1>
        <div>
          <PageContent />
        </div>
      </div>
    );
  }
}
