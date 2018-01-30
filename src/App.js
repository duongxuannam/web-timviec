import React, { Component } from 'react';
import TaskForm from './Component/TaskForm';
import Control from './Component/Control';
import TaskList from './Component/TaskList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div class="container">
        <div class='text-center' >
          <h1>Quan ly cong viec </h1>
        </div>
        <div class="row">
          <TaskForm />
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" class="btn btn-primary">
              <span class='fa fa-plus mr-5'></span>
              Them cong viec
            </button>
           <br/><br/>
            <Control/>
            <br/><br/><br/>
            <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

         <TaskList/>

        </div>
      </div>

          </div>

        </div>


      </div>


    );
  }
}

export default App;
