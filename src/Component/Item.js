import React, { Component } from 'react';

class Item extends Component {

  capNhatStatus = () => {
    this.props.capNhatStatus(this.props.data.id);
  }
  xoaItem = () => {
    this.props.xoaItem(this.props.data.id);
  }
  capNhatItem = () => {
    this.props.capNhatItem(this.props.data.id);
  }
  render() {
    const { data, index } = this.props;
    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>{data.name}</td>
            <td class='text-center'>
              <span class= {data.status === true ? 'label label-success' : 'label label-danger'} onClick = {this.capNhatStatus}>
              {data.status === true ? 'Kich hoat' : 'chua kich hoat'}</span>

            </td>
            <td class='text-center'>
              <button type='button' class='btn btn-warning' onClick = {this.capNhatItem}>
                <span class='fa fa-pencil mr-5'></span>Sua
              </button>&nbsp;
              <button type='button' class='btn btn-danger' onClick = {this.xoaItem}>
                <span class='fa fa-trash mr-5'></span>Xoa
              </button>

            </td>
          </tr>
    );
  }
}

export default Item;
