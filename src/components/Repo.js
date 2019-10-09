import React, { Component } from 'react';

export default class Repo extends Component {
  
  delRepo =()=>{
    console.log('mohammad');
  }

  
  render() {
    const {repo} = this.props
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
            <button onClick={this.delRepo} className="btn btn-danger" >Delete</button>
          </td>
        </tr>
    );
  }
}