import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStatus, deleteItem, closeForm, openForm, editItem } from '../Action/index';

class Item extends Component {

  capNhatStatus = () => {
    this.props.onUpdateStatus(this.props.data.id);
  }
  xoaItem = () => {
    this.props.onDeleteItem(this.props.data.id);
    this.props.onCloseForm();
  }
  capNhatItem = () => {
    this.props.onOpenForm(); 
    this.props.onEditItem(this.props.data);
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

const mapStateToProps = (state) =>{
  return {

  }
};
const mapDispatchToProps = (dispatch, props) => {
  return{
    onUpdateStatus : (id) => {
      dispatch(updateStatus(id));
    },
    onDeleteItem: (id) => {
      dispatch(deleteItem(id))
    },
    onCloseForm : () => {
      dispatch(closeForm())
    },
    onOpenForm : () => {
      dispatch(openForm())
    },
    onEditItem : (data) => {
      dispatch(editItem(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
