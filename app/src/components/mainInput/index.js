import React from 'react';
import './index.styl';

class MainInput extends React.Component {
  state = {
    value: '',
    list:[],
  }
  constructor(props) {
    super(props);
  }
  handleForm(ev) {
    const value = this.state.value;
    const list = this.state.list;
    list.push(value);
    ev.preventDefault();
    ev.stopPropagation();
    console.log(list);
  }

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className = "mainInput">
        <div className="input-group input-group-lg">
          <input type="text"
            className="inputMsg"
            placeholder="请输入消息"
            onChange={(event) => this.setState({value: event.target.value})}
            onKeyDown={(ev) => {
              if (ev.keyCode === 13) { this.handleForm(ev); ev.target.value = '';}

            } }
          />
        </div>
      </div>
    );
  }
}

export default MainInput;
