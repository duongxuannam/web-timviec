import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tuKhoa: ''
    }
  };
  onChange = (event) => { 
    const { name, value } = event.target;
    this.setState({
      [name] : value
    }); 
  };
  timKiem  = () => {
    this.props.timKiem(this.state.tuKhoa);
  }
  render() {
    const { tuKhoa } = this.state;
    return (
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="input-group">
                  <input type="text" name='tuKhoa' class="form-control" placeholder='Nhap tu khoa...' value = { tuKhoa } onChange = { this.onChange }/>
                  <span class='input-group-btn'>
                    <button type="button" class="btn btn-primary" onClick = { this.timKiem }>
                      <span class='fa fa-search mr-5'></span>
                      Tim
                    </button>
                  </span>
                </div>
              </div>
           
    );
  }
}

export default Search;
