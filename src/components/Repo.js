import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const {repos} = this.props
    return (
      <div style={{ border: '3px red solid' }}>
        {/* <h6>Repo</h6> */}
        {/* <tr> */}
        <td>
            {repos[1].id}  
          </td>  
          <td>
            {repos[1].title}  
          </td>  
          <td>
            {repos[1].status}  
          </td>  
          <td>
            {repos[1].id}  
          </td>  
        {/* </tr> */}
      </div>
    );
  }
}