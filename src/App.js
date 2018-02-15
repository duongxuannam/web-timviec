import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleForm, editItem } from './Action/index';
import TaskForm from './Component/TaskForm';
import Control from './Component/Control';
import TaskList from './Component/TaskList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDangChinhSua: null,
      loc: {
        locTheoTen: '',
        locTheoTrangThai: -1
      },
      tuKhoa: '',
      tenSapXep: '',
      giaTriSapXep: '',
    }
  }

  hienThiCuaSo = () => {
    if (this.state.hienThiCuaSo !== true) {
      this.setState({
        hienThiCuaSo: !this.state.hienThiCuaSo
      })
    }
  };

  dongCuaSo = () => {
    this.setState({
      hienThiCuaSo: false,
      itemDangChinhSua: null
    })
  };

  taoDuLieuMau = () => {
    const data = [
      {
        id: 1,
        name: 'Hoc react js',
        status: true
      },
      {
        id: 4,
        name: 'Hoc react native',
        status: false
      },
      {
        id: 3,
        name: 'Hoc node js',
        status: true
      },
    ];
    this.setState({
      data: data
    });

    localStorage.setItem('data', JSON.stringify(data));
  };
  findIndex = (id) => {
    const { data } = this.state;
    let result = -1
    data.forEach((item, index) => {
      if (item.id === id) {
        result = index
      }
    });
    return result;
  }
  capNhatItem = (id) => {
    const { data } = this.state;
    const index = this.findIndex(id);
    const itemDangChinhSua = data[index];
    console.log(itemDangChinhSua);
    this.setState({
      itemDangChinhSua: itemDangChinhSua
    });
    this.hienThiCuaSo();
  };
  buttonThem = () => {
    this.props.onToggleForm();
    this.props.onEditItem({
      id: '',
      name: '',
      status: false
    })
  };
  locData = (locTheoTen, locTheoTrangThai) => {
    locTheoTrangThai = parseInt(locTheoTrangThai, 10);
    this.setState({
      loc: {
        locTheoTen: locTheoTen.toLowerCase(),
        locTheoTrangThai: locTheoTrangThai
      }
    })
  };
  timKiem = (tuKhoa) => {
    this.setState({
      tuKhoa: tuKhoa
    });
  };
  sapXep = (ten, trangthai) => {
    this.setState({
      tenSapXep: ten,
      giaTriSapXep: trangthai
    })
  };

  render() {
    let { 
      loc, tuKhoa,
      tenSapXep,
      giaTriSapXep
      } = this.state;
      const { hienThiCuaSo } = this.props;
    return (
      <div class="container">
        <div class='text-center' >
          <h1>Quan ly cong viec </h1>
        </div>
        <div class="row">
        <TaskForm />
          <div class={hienThiCuaSo ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" class="btn btn-primary" onClick={this.buttonThem}>
              <span class='fa fa-plus mr-5'></span>
              Them cong viec
            </button>&nbsp;
            <button type="button" class="btn btn-danger" onClick={this.taoDuLieuMau}>
              <span class='fa fa-plus mr-5'></span>
              Tao du lieu mau
            </button>
            <br /><br />
            <Control timKiem={this.timKiem} sapXep={this.sapXep} />
            <br /><br /><br />
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList capNhatItem={this.capNhatItem} locData={this.locData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};


const mapStateToProps = state => {
  return {
    hienThiCuaSo : state.hienThiCuaSo
   };
};
const mapDispatchToProps = (dispatch, props) => {
  return { 
    onToggleForm : () => {
      dispatch(toggleForm())
    },
    onEditItem : (data) => {
      dispatch(editItem(data))
    }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
