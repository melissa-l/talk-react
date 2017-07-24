import React from 'react'
import Footer from './header'
import Home from './home'
import './App.styl'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "Main">
        <Home/>
      </div>
    );
  }
}
