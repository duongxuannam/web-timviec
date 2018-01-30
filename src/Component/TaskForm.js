import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    }
  };
  componentWillMount(){
    console.log('willmount ne : ',this.props.itemDangChinhSua)
    if(this.props.itemDangChinhSua){
      this.setState({
        id: this.props.itemDangChinhSua.id,
        name: this.props.itemDangChinhSua.name,
        status: this.props.itemDangChinhSua.status
      })
    }
  };
  dongCuaSo = () => {
    const stateHandle = {
      id: '',
      name: '',
      status: true
    }
    this.setState(stateHandle)
    console.log('cai id sau khi dong: ',this.state.id)
    this.props.dongCuaSo();
  }
  luuData = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    const stateHandle = {
      id: '',
      name: '',
      status: true
    }
    this.setState(stateHandle)

  };
  render() {
    const { id } = this.state;
    console.log('id sau khi render xong: ', id)
    return (
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="panel panel-warning">
              <div class="panel-heading">
                <h3 class="panel-title">{id === '' ? 'Them cong viec' : 'Chinh Sua Cong Viec'}
                      <span class='fa fa-times-circle text-right'  onClick = { this.dongCuaSo }></span>
                </h3>
              </div>
              <div class="panel-body">
                <form onSubmit = { this.onSubmit }>
                  <div class="form-group">
                    <label>Ten:</label>
                    <input type="text" class="form-control" name='name' placeholder="Input field" 
                    onChange = { this.luuData } value = { this.state.name }
                    />
                    <label>Trang thai:</label>
                    <select name="status" class="form-control" onChange = { this.luuData } value = { this.state.status }> 
                      <option value={true}>Kich hoat</option>
                      <option value={false}>An</option>
                    </select>
                    <br />
                    <div class='text-center' >
                      <button type="submit" class="btn btn-primary">
                        <span class='fa fa-plus mr-5'></span>
                        Submit
                      </button>&nbsp;
                      <button type="button" class="btn btn-danger" onClick = { this.dongCuaSo }>
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
