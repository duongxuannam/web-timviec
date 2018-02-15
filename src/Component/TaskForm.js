import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData, closeForm } from '../Action/index';

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
    console.log('willmount ne : ',this.props.itemEditing)
    if(this.props.itemEditing){
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status
      })
    }
  };
  componentWillReceiveProps(nextProps){
    console.log('willReceiveProps ne : ',nextProps.itemEditing)
    if(nextProps.itemEditing){
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      })
    }else if ( nextProps.itemEditing === null){
      this.setState({
        id: '',
        name: '',
        status: ''
      })
    }
  }
  dongCuaSo = () => {
    this.props.onCloseForm();
  }
  luuData = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  onClear  = ()=>{
    this.setState({
      id: '',
      name: '',
      status: false
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddData(this.state);
    this.onClear();
    this.dongCuaSo();
  };
  render() {
    const { id } = this.state;
    console.log('id sau khi render xong: ', id);
    if(!this.props.hienThiCuaSo) return '';
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

const mapStateToProps = (state) =>{
  return {
    hienThiCuaSo : state.hienThiCuaSo,
    itemEditing: state.itemEditing
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return{
    onAddData : (data) =>{
      dispatch(addData(data));
    },
    onCloseForm : () => {
      dispatch(closeForm())
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
