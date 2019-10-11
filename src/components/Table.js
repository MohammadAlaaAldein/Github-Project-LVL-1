import React, { Component } from 'react';
import Repo from "./Repo"

export default class Table extends Component {
  render() {
    const { repos, deleteRepo } = this.props

    return (
      <div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              <th scope="col">Checked</th>
              <th scope="col">Is Private</th>
              <th scope="col">Language</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              repos.map((repo, i) => {
                return < Repo key={repo.id} repo={repo} deleteRepo={deleteRepo} toggleStatus={this.props.toggleStatus} />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
