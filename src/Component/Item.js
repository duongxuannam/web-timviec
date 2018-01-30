import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
        <tr>
            <td>1</td>
            <td>Hoc java</td>
            <td class='text-center'>
              <span class='label label-danger'>Kich hoat</span>

            </td>
            <td class='text-center'>
              <button type='button' class='btn btn-warning'>
                <span class='fa fa-pencil mr-5'></span>Sua
              </button>&nbsp;
              <button type='button' class='btn btn-danger'>
                <span class='fa fa-trash mr-5'></span>Xoa
              </button>

            </td>
          </tr>
    );
  }
}

export default Item;
