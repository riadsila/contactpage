import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const fontAwesomeStyles = {
  color: '#24ce99',
  fontSize: '5em',
  fontWeight: 'bold'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-5" style={{fontSize: '1.3em'}}>
          <div className="container mb-4">
            <div className="row justify-content-sm-center">
              <div className="col-xs-12">
                <h1 className="text-center" style={{fontWeight: 'bold'}}>Contact Us</h1>
                <p>If you have a question or need more information, feel free to get in touch with us.</p>
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-sm-4 mt-5">
                <i className="far fa-envelope-open" style={fontAwesomeStyles}></i>
                <div className="mt-5">
                  <h2>Email us</h2>
                  <p><a href="mailto:info@tryzipper.com" style={{color:'#24ce99'}}>info@tryzipper.com</a></p>
                </div>
              </div>
             
              <div className="col-sm-4 mt-5">
                <i className="far fa-comments" style={fontAwesomeStyles}></i>
                <div className="mt-5">
                  <h2>Chat with us</h2>
                  <p><a href="https://drift.me/zipper" style={{color:'#24ce99'}}>Live chat</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
