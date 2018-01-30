import React, { Component } from 'react';

class TaskForm extends Component {
  render() {
    return (

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
    );
  }
}

export default TaskForm;
