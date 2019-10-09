import React, { Component } from 'react';

export default class Repo extends Component {

  render() {
    const { deleteRepo, repo } = this.props
    return (
      <tr>
        <td>
          {repo.id}
        </td>
        <td>
          {repo.title}
        </td>
        <td>
          {repo.status}
        </td>
        <td>
          {repo.language}
        </td>
        <td>
          <button onClick={()=>deleteRepo(repo.id)} className="btn btn-danger" >Delete</button>
        </td>
      </tr>
    );
  }
}



// <button onClick={()=>deleteRepo(repo.id)} ID={repo.id}
// ID={repo.id} className="btn btn-danger" >Delete</button>
