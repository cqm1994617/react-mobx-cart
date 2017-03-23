import React from 'react';

function hoc(ComponentClass) {
  return class HOC extends React.Component {

    componentDidMount() {
      console.log('0000000000000000000000000000000');
    }

    render() {
      return (
        <div className="example1">
          <div>我是高阶组件</div>
          <ComponentClass />
        </div>
      );
    }
  }
}

class Test extends React.Component {

  render() {
    return (
      <div>Test</div>
    )
  }
}

export default hoc(Test);