import React, { Component } from 'react';
import './App.css';
import  Product from './Component/Product/Product';

class App extends Component {
  render() {
    return (
      <div>
      
      <nav class="navbar navbar-inverse">
        <a class="navbar-brand" >Title</a>
        <ul class="nav navbar-nav">
          <li class="active">
            <a >Home</a>
          </li>
          <li>
            <a >Link</a>
          </li>
        </ul>
      </nav>
      
      <div class="container">
        
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Product/>
            <Product/> <Product/> <Product/> <Product/> <Product/> <Product/> <Product/> <Product/>
          </div>
        </div>
        
      </div>
      
       </div>
    );
  }
}

export default App;
