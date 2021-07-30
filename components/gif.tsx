import { Component } from 'react';

export interface GifImageProps {
  gifUrl: string;
  title: string;
  tags?: string[]
}

export default class GifImage extends Component<GifImageProps> {
  render(): JSX.Element {
    return (
      <div className='gif'>
        <img className='gif__image' src={this.props.gifUrl} alt={this.props.title} />
        <div className="gif__tags">
          {
            (this.props.tags || []).map((tag, i) => {
              return <span key={i} className="gif__tag">tag</span>
            })
          }
        </div>
      </div>
    )
  }
}
