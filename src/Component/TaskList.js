import React, { Component } from 'react';
import Item from './Item'

class TaskList extends Component {
  constructor(props){
    super(props);
    this.state = {
      locTheoTen: '',
      locTheoTrangThai: -1,
    }
  };
  onChange = (event) => {
    const { name, value } = event.target;
    this.props.locData( name === 'locTheoTen' ? value : this.state.locTheoTen, name === 'locTheoTrangThai' ? value : this.state.locTheoTrangThai  )
    this.setState({
      [name] : value
    });
  }
  render() {
    const { data, capNhatStatus, xoaItem, capNhatItem } = this.props;
    const { locTheoTen, locTheoTrangThai } = this.state;
    const hienthi = data.map((data, index)=>{
      return <Item key={index} data = { data } index = {index} capNhatStatus = {capNhatStatus} xoaItem ={xoaItem} capNhatItem={capNhatItem} />
    });
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
              <input type="text" name="locTheoTen" class='form-control' value = { locTheoTen } onChange = { this.onChange }/>
            </td>
            <td>
              <select type="text" name="locTheoTrangThai" class='form-control' value = { locTheoTrangThai } onChange = { this.onChange }>
                <option value={-1}>Tat ca</option>
                <option value={0}>An</option>
                <option value={1}>Kich hoat</option>
              </select>
            </td>
            <td></td>
          </tr>
      { hienthi }
        </tbody>
      </table>
    );
  }
}

export default TaskList;
