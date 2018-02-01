import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  render() {
    return (
        <div class=''>
             <Search  timKiem = { this.props.timKiem }/>
             <Sort sapXep = { this.props.sapXep } />
            </div>
    );
  }
}

export default Control;
