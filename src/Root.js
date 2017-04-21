import React, { PureComponent } from 'react';

import Style from './index.scss';

export default class Root extends PureComponent {
  componentWillMount() {
    console.log('---- will mount ----');
  }

  render() {
    return (
      <div className={ Style.root }>
        <p className={ Style.text }>Root</p>
      </div>
    );
  }
}

// export default 2;
