import React from 'react';

function hoc(ComponentClass) {
  return class HOC extends ComponentClass {

    render() {
      const elementTree = super.render();
      elementTree.props.children = elementTree.props.children.filter(z => z.type == 'ul' ? null : z);
      const newTree = React.cloneElement(elementTree);
      return newTree;
    }
  }
}

@hoc
export default class Test4 extends React.Component {

  render() {
    return (
      <div>
        <p style={{color: 'brown'}}>啦啦啦</p>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <h1>哈哈哈</h1>
      </div>
    )
  }
}
