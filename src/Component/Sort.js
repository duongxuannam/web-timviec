import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sapXep: {
        theo: 'ten',
        value: -1
      }
    }
  }
  onClick = (ten, trangthai) => {
    this.setState({
      sapXep: {
        theo: ten,
        value: trangthai
      }
    });
    this.props.sapXep(ten, trangthai);
  }
  render() {
    const { sapXep } = this.state;
    return (
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class='dropdown' >
          <button class='btn btn-primary dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true' >
            Sap xep <span class='fa fa-caret-square-o-down ml-5'> </span>

          </button>
          <ul class='dropdown-menu' aria-labelledby='dropdownMenu1'   >
            <li onClick={() => this.onClick('ten', -1)} >
              <a role='button' class={(sapXep.theo === 'ten' && sapXep.value === -1 ? 'sort_selected' : '')}>
                <span class='fa fa-sort-alpha-asc pr-5'>Ten A-Z</span></a>
            </li>
            <li onClick={() => this.onClick('ten', 1)} >
              <a role='button' class={(sapXep.theo === 'ten' && sapXep.value === 1 ? 'sort_selected' : '')}>
                <span class='fa fa-sort-alpha-desc pr-5'>Ten Z-A</span></a>
            </li>
            <li role='separator' class='divider' />
            <li onClick={() => this.onClick('trangThai', -1)} >
              <a role='button' class={(sapXep.theo === 'trangThai' && sapXep.value === -1 ? 'sort_selected' : '')}>
                <span class=''>Kich hoat</span></a>
            </li>  <li onClick={() => this.onClick('trangThai', 1)} >
              <a role='button' class={(sapXep.theo === 'trangThai' && sapXep.value === 1 ? 'sort_selected' : '')}>
                <span class=''>Chua kich hoat</span></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
