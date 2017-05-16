import React, { PureComponent } from 'react';

import Style from './index.scss';
import boxImg from './box.jpg';
import quesImg from './question.png';

export default class Root extends PureComponent {
  componentWillMount() {
    console.log('---- will mount ----', boxImg);
  }

  render() {
    return (
      <div className={ Style.root }>
        <p className={ Style.text }>Root</p>
        <img src={ boxImg } className={ Style.img } />
        <img src={ quesImg } className={ Style.img } />
      </div>
    );
  }
}

// export default 2;
