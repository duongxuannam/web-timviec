import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="input-group">
                  <input type="text" name='keyword' class="form-control" placeholder='Nhap tu khoa...' />
                  <span class='input-group-btn'>
                    <button type="button" class="btn btn-primary">
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
