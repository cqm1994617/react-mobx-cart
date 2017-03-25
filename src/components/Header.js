import React, {PropTypes} from 'react';

const Header = (props, {store}) => (
  <div className="head">
    <div className="head-item">
      <input type="checkbox" /> 全选
    </div>
    <div className="head-item c-name">商品</div>
    <div className="head-item">单价</div>
    <div className="head-item c-buyNum">数量</div>
    <div className="head-item">小计</div>
    <div className="head-item">操作</div>
  </div>
);

Header.contextTypes = {
  store: PropTypes.object
};

export default Header;