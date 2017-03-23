import React from 'react';

function hoc(ComponentClass) {
  return class HOC extends ComponentClass {

    render() {
      if (this.state.success) {
        return super.render();
      }
      return <p style={{fontSize: '50px'}}>加载中</p>
    }
  }
}

@hoc
export default class Test3 extends React.Component {

  state = {
    success: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        success: true
      });
    }, 1000)
  }

  render() {
    return (
      <div>Test33</div>
    )
  }
}
