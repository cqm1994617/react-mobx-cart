import React, {PropTypes} from 'react';

const Footer = (props, {store}) => (
  <div className="footer">
    <p>fads {store.a}</p>
  </div>
);

Footer.contextTypes = {
  store: PropTypes.object
};

export default Footer;