import React, { Component } from 'react';
import Repo from "./Repo"

export default class Table extends Component {
  render() {
    const {repos, deleteRepo} = this.props
    
    return (
      <div
        style={{ border: '3px green dotted' }}>
        <h6>Table</h6>

        <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Repo Status</th>
      <th scope="col">Language</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      repos.map((repo,i)=>{
        return < Repo key = {repo.id} repo = {repo} deleteRepo = {deleteRepo}/>
      })
    }
  </tbody>
</table>
      </div>
    );
  }
}
