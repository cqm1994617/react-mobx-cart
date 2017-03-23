import React from 'react';

function hoc(ComponentClass) {
  return class HOC extends React.Component {

    render() {
      return (
        <div className="example1">
          <p>我是hoc</p>
          <ComponentClass />
        </div>
      );
    }
  }
}

function hoc2(ComponentClass) {
  return class HOC2 extends React.Component {

    render() {
      return (
        <div>
          <p>我是hoc2</p>
          <ComponentClass/>
        </div>
      );
    }
  }
}

function hoc3(value) {
  return function(ComponentClass) {
    return class HOC3 extends React.Component {

      render() {
        return (
          <div>
            <p>{value}</p>
            <ComponentClass/>
          </div>
        );
      }
    }
  }
}

@hoc
@hoc2
@hoc3('我是hoc3333333333')
export default class Test extends React.Component {

  render() {
    return (
      <div>Test</div>
    )
  }
}
