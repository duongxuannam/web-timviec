import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (


      <div class="container">
        <div class='text-center' >
          <h1>Quan ly cong viec </h1>
        </div>

        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">

            <div class="panel panel-warning">
              <div class="panel-heading">
                <h3 class="panel-title">Them cong vievc
                      <span class='fa fa-times-circle text-right'></span>
                </h3>
              </div>
              <div class="panel-body">

                <form>


                  <div class="form-group">
                    <label>Ten:</label>
                    <input type="text" class="form-control" name='name' placeholder="Input field" />
                    <label>Trang thai:</label>
                    <select name="status" class="form-control" >
                      <option value={true}>Kich hoat</option>
                      <option value={false}>An</option>
                    </select>
                    <br />
                    <div class='text-center' >
                      <button type="submit" class="btn btn-primary">
                        <span class='fa fa-plus mr-5'></span>
                        Submit
                      </button>&nbsp;
                      <button type="button" class="btn btn-danger">
                        <span class='fa fa-close mr-5'></span>
                        Huy bo
                      </button>
                    </div>
                  </div>




                </form>

              </div>
            </div>

          </div>

          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" class="btn btn-primary">
              <span class='fa fa-plus mr-5'></span>
              Them cong viec
                      </button>
            <div class='mt-30'>
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
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class='dropdown' >
                  <button class='btn btn-primary dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true' >
                    Sap xep <span class='fa fa-caret-square-o-down ml-5'> </span>

                  </button>
                  <ul class='dropdown-menu' aria-labelledby='dropdownMenu1'   >
                    <li>
                      <a role='button' class='sort_selected'>
                        <span class='fa fa-sort-alpha-asc pr-5'>Ten A-Z</span></a>
                    </li>
                    <li>
                      <a role='button'>
                        <span class='fa fa-sort-alpha-desc pr-5'>Ten Z-A</span></a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            
            <div class="row mt-15">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  
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
                          <input type="text" name="filtername" class='form-control'/>
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
                    </tbody>
                  </table>
                  
              </div>
            </div>
            
          </div>

        </div>


      </div>


    );
  }
}

export default App;
