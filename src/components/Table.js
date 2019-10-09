import React, { Component } from 'react';
import Repo from "./Repo"

export default class Table extends Component {
  render() {
    const {repos} = this.props
    // console.log(this.props.repos)
    return (
      <div
        style={{ border: '3px green dotted' }}>
        <h6>Table</h6>

        <table repos = {repos} class="table table-striped table-dark">
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
    
      <tr> <Repo repos = {repos} /></tr>

  {/* <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
  </tbody>
</table>
      </div>
    );
  }
}
