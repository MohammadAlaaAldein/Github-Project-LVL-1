import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const {repo} = this.props
    return (
      <tr style={{ border: '3px red solid' }}>
        {/* <h6>Repo</h6> */}
        
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
        </tr>
      
    );
  }
}