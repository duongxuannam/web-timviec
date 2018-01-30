import React, { Component } from 'react';
import Item from './Item'

class TaskList extends Component {

  render() {
    return (
        <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th class='text-center'>STT</th>
            <th class='text-center'>Ten</th>
            <th class='text-center'>Trang thai</th>
            <th class='text-center'>Hanh dong</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text" name="filtername" class='form-control' />
            </td>
            <td>
              <select type="text" name="filtername" class='form-control'>
                <option value={-1}>Tat ca</option>
                <option value={0}>An</option>
                <option value={1}>Kich hoat</option>
              </select>
            </td>
            <td></td>
          </tr>
       <Item/>
       <Item/>
       <Item/>
       <Item/>
        </tbody>
      </table>
    );
  }
}

export default TaskList;
