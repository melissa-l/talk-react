import React from 'react';
import MainInput from '.././mainInput'
import './index.styl';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "home">
        <MainInput />
      </div>
    );
  }
}

export default Home;
