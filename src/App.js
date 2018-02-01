import React, { Component } from 'react';
import _ from 'lodash';
import TaskForm from './Component/TaskForm';
import Control from './Component/Control';
import TaskList from './Component/TaskList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hienThiCuaSo: false,
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
  componentWillMount() {
    if (localStorage && localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'));
      this.setState({
        data: data
      })
    }
  };

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

  onSubmit = (data) => {
    const dataHandle = this.state.data;
    if (data.id === '') {
      const today = new Date();
      const dulieu = {
        id: today.getTime(),
        name: data.name,
        status: data.status
      };
      dataHandle.push(dulieu);
    } else {
      const index = this.findIndex(data.id);
      dataHandle[index] = data
    }
    this.setState({
      data: dataHandle,
      hienThiCuaSo: false,
      itemDangChinhSua: null
    });
    localStorage.setItem('data', JSON.stringify(dataHandle))
  };
  capNhatStatus = (id) => {
    const { data } = this.state;
    //const index = this.findIndex(id);
    const index = _.findIndex(data, (item) =>{
      return item.id === id
    })
    if (index !== -1) {
      data[index].status = !data[index].status;
      this.setState({
        data: data
      });
      localStorage.setItem('data', JSON.stringify(data))
    }
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
  xoaItem = (id) => {
    const { data } = this.state;
    const index = this.findIndex(id);
    if (index !== -1) {
      data.splice(index, 1);
      this.setState({
        data: data
      });
      localStorage.setItem('data', JSON.stringify(data))
    }
    this.dongCuaSo()
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
  }
  buttonThem = () => {
    this.setState({
      itemDangChinhSua: null
    });
    this.hienThiCuaSo()
  }
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
    let { data, hienThiCuaSo, itemDangChinhSua, loc, tuKhoa, tenSapXep, giaTriSapXep } = this.state;
    if (loc) {
      if (loc.locTheoTen) {
        data = data.filter((item) => {
          return item.name.toLowerCase().indexOf(loc.locTheoTen) !== -1;
        });
      }
      data = data.filter((item) => {
        if (loc.locTheoTrangThai === -1) {
          return item;
        } else {
          return item.status === (loc.locTheoTrangThai === 1 ? true : false)
        }
      })
    }
    if (tuKhoa){
      // data = data.filter((item) => {
      //   return item.name.toLowerCase().indexOf(tuKhoa) !== -1;
      // })
      data = _.filter(data,(item)=> {
        return item.name.toLowerCase().indexOf(tuKhoa) !== -1;
      })
    }
    if(tenSapXep === 'ten'){
      data.sort((a, b)=>{
        if(a.name < b.name) return giaTriSapXep;
        else if(a.name > b.name) return - giaTriSapXep;
        else return 0
      })
    }else{
      data.sort((a, b)=>{
        if(a.status < b.status) return - giaTriSapXep;
        else if(a.status > b.status) return  giaTriSapXep;
        else return 0
      })
    }
    const hienthi = hienThiCuaSo ? <TaskForm dongCuaSo={this.dongCuaSo} onSubmit={this.onSubmit} itemDangChinhSua={itemDangChinhSua} /> : '';
    return (
      <div class="container">
        <div class='text-center' >
          <h1>Quan ly cong viec </h1>
        </div>
        <div class="row">
          {hienthi}
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
            <Control timKiem = { this.timKiem } sapXep = { this.sapXep } />
            <br /><br /><br />
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList data={data} capNhatStatus={this.capNhatStatus} xoaItem={this.xoaItem} capNhatItem={this.capNhatItem} locData={this.locData} />
              </div>
            </div>

          </div>

        </div>


      </div>


    );
  }
}

export default App;
