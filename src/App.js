import React, { Component } from 'react';
import Table from "./components/Table";
import Add from "./components/Add"
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

  addRepo = (newState) => {
    this.state.repos.push(newState)
    this.setState({ repos: this.state.repos })

  }

  deleteRepo = ID => {
    let newState = this.state.repos.filter(elem => {
      return elem.id !== ID
    })
    this.setState({ repos: newState })
  }

  toggleStatus = id => {
    let repos = this.state.repos.map(elem => {
      if (elem.id === id) {
        if (elem.status === 'Private') {
          elem.status = 'Public';
        }
        else {
          elem.status = 'Private';
        }
      }
      return elem
    })
    this.setState({ repos })
  }



  render() {
    const { repos } = this.state
    const { deleteRepo } = this
    return (
      <div className="container" >
        {/* <h6>App</h6> */}
        <Add addRepo={this.addRepo} repos={repos} />
        <Table repos={repos} deleteRepo={deleteRepo} toggleStatus={this.toggleStatus} />
        {/* <button onClick={this.deleteRepo} >Delete Test</button> */}
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

