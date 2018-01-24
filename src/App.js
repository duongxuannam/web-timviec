import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: '',
      txtPassword: '',
      txtDescripton: '',
      selectSex: '',
      radioFavorite: 'game',
      checkboxActivity: true

    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);

  }
  onHandleChange(event) {
    const { target } = event;
    const { name } = target;
    const  value  = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });

  }
  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <div class="container mt-30">
          <div class="row">
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div class="panel panel-primary">
                <div class="panel-heading">
                  <h3 class="panel-title">Form react</h3>
                </div>
                <div class="panel-body">
                  <form onSubmit={this.onHandleSubmit}>
                    <div class="form-group">
                      <label >tai khoan</label>
                      <input type="text" class="form-control" name='txtName' placeholder="Input field" onChange={this.onHandleChange} />
                    </div>
                    <div class="form-group">
                      <label >mat khau</label>
                      <input type="text" class="form-control" name='txtPassword' placeholder="Input field" onChange={this.onHandleChange} />
                    </div>
                    <div class="form-group">
                      <label >gioi thiet</label>
                      <textarea type="text" class="form-control" name='txtDescripton' placeholder="Input field" onChange={this.onHandleChange} />
                    </div>
                    <div class="form-group">
                      <label >gioi tinh</label>

                      <select name="selectSex" class="form-control" value= {this.state.selectSex} onChange={this.onHandleChange}>
                        <option value='Nam'>Nam</option>
                        <option value='Nu'>Nu</option>
                      </select>

                    </div>
                    <div class="form-group">
                      <label >so thich</label>

                      
                      <div class="radio">
                        <label>
                          <input type="radio" name="radioFavorite" value="game" checked={this.state.radioFavorite === 'game'} onChange={this.onHandleChange}/>
                          Game
                        </label>
                        <br/>
                        <label>
                          <input type="radio" name="radioFavorite"  value="gai" checked={this.state.radioFavorite === 'gai'}  onChange={this.onHandleChange}/>
                          Gasi
                        </label>
                      </div>
                      

                    </div>
                    <div class="form-group">
                      <label >Kisch hoat</label>

                    
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" value={true} name='checkboxActivity' onChange={this.onHandleChange} checked={this.state.checkboxActivity === true} />
                        Activity
                      </label>
                    

                    </div>
                    
                      

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
                  <button type="reset" class="btn btn-default">Xoa trang </button>

                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
