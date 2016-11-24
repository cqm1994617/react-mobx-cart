import React from 'react';


export default class Header extends React.Component {

  static propTypes = {
    appStore: React.PropTypes.object,
  };

  static contextTypes = {
    appStore: React.PropTypes.object,
  };

  state = {
    value: '',
  };

  changeValue(z) {
    this.setState({
      value: z,
    });
  };

  add = () => {
    this.props.appStore.addTodo(this.state.value);
  };

  render() {
    return (
      <div className="header">
        <input type="text" onChange={(z) => this.changeValue(z.target.value)} />
        <button onClick={this.add}>添加</button>
      </div>
    );
  }
}
