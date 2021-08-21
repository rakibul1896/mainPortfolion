import React, { Component } from 'react';
import Overlay from './Overlay';
import CardImage from './CardImage';
import CardButton from './CardButton';
import CardHeader from './CardHeader';

class DynamicPortfolio extends Component {
  constructor() {
    super();
    this.state = {
      display: 'none',
      opacity: 0,
    };

    this.showOverlay = this.showOverlay.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
  }

  showOverlay = () => {
    if (this.state.display === 'none') {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      this.setState({ display: 'block' });
      setTimeout(() => this.setState({ opacity: 1 }), 10);
    }
  };
  hideOverlay = () => {
    if (this.state.display === 'block') {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
      this.setState({ opacity: 0 });
      setTimeout(() => this.setState({ display: 'none' }), 500);
    }
  };

  render() {
    const { header, code, para, thumbnail, images, link } = this.props;
    return (
      <div className="bg-gray-100 overflow-hidden font-raleway-new mb-8 rounded-xl mx-6 shadow-md">
        <div className=" group relative bg-white">
          <CardImage thumbnail={thumbnail} />
          <CardButton showOverlay={this.showOverlay} />
        </div>
        <CardHeader
          header={header}
          code={code}
          showOverlay={this.showOverlay}
        />

        <Overlay
          hideOverlay={this.hideOverlay}
          none={this.state.display}
          opacity={this.state.opacity}
          header={header}
          para={para}
          images={images}
          link={link}
        />
      </div>
    );
  }
}

export default DynamicPortfolio;
