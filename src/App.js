import React, { Component } from 'react';
import Table from "./components/Table";
import "bootstrap/dist/css/bootstrap.css"

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
    ]
  };

  deleteRepo = ID => {
    let newState = this.state.repos.filter(elem => {
      return ID !== elem.id
    })
    this.setState({repos: newState})
  }
  

  render() {
    const { repos } = this.state
    const { deleteRepo } = this.deleteRepo
    return (
      <div style={{ border: 'black 1px solid' }}>
        <h6>App</h6>
        <Table repos={repos} deleteRepo={this.deleteRepo} />
        <button onClick={this.deleteRepo} >Delete Test</button>
      </div>
    );
  }
}






// deleteRepo =ID=>{
//   // console.log("Deleted", ID);
//   let newState = this.state.repos.filter((elem,i)=>{
//     return ID!== elem.id
//   })
//   this.setState({repos: newS})
// }

