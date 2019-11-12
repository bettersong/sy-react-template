import React from 'react';
import logo from './my.jpg';
import './App.css';


class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
          toolName: 'songyao-cli(React 模板)'
      }
    }
    componentDidMount() {
      console.log(`%c ${this.username} `, 'color: #fff; background-image: repeating-radial-gradient(circle at 30% 60%,#99CCCC 20px, #7171B7 20px, #7171B7 20px, #CCCC99 40px, #CCCC99 60px, #4F9C9C 30px, #4F9C9C 40px, #99CCCC 80px, #99CCCC 50px); font-size: 16px;border-radius:15px 0;padding:5px;');
      console.log('脚手架使用教程请看个人博客：47.100.126.169/zmengBlog')
    }
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{this.state.toolName}</h1>
            <p>
              了解脚手架及脚手架指令请移步个人博客
              <br/>
              check out the
              <a href="http://47.100.126.169/zmengBlog" className="App-link">逐梦博客</a>.
            </p>
          </header>
        </div>
      );
    }
}

export default App;
