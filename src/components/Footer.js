import React, {PropTypes} from 'react';
import {observer} from 'mobx-react';

const Footer = observer((props, {store}) => (
  <div className="footer">
    <p>合计: {store.totalPrice}元</p>
  </div>
));

Footer.contextTypes = {
  store: PropTypes.object
};

export default Footer;
