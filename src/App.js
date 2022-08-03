// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Agenda from './agenda';
import React, { Component } from 'react';
// todo-app\node_modules\bootstrap\dist\css\
class App extends Component {
  state = {
    items: [],
    text: ""
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  handleDelete = id =>{
    // console.log('deleted',id)
    const oldItems = [...this.state.items];
    console.log(oldItems);
    const items =oldItems.filter((element, i)=>{
      return i !== id

    })
    this.setState({items:items})

  }
  render(){
  
  return (
    <div className="container-fluid my-5">
    <div className="row">
      <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
        <h2 className="text-center">
        Hashedin Agenda For The Day !
        </h2>
        <div className="row">
          <div className="col-9">
            <input type="text" className="form-control" placeholder="Write Agenda here !" value={this.state.text}
            onChange={this.handleChange}>

            </input>

          </div>
          <div className='col-2'>
            <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}>
            Add
            </button>
            
          </div>
          <div className='container-fluid'>
            <ul className="list-unstyled row m-5">
              {
                this.state.items.map((value,i)=>{
                  return <Agenda key={i} id={i} value ={value} sendData ={this.handleDelete}/>
                })
              }

            </ul>

          </div>

        </div>

      </div>
    </div>
    </div>
  );
  }
}
export default App;
