import React, {PropTypes} from 'react';

const Header = (props, {store}) => (
  <div className="head">
    {store.a}
  </div>
);

Header.contextTypes = {
  store: PropTypes.object
};

export default Header;