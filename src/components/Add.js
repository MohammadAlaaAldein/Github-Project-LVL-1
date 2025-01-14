import React, { Component } from 'react';

export default class Add extends Component {

  state = {

    id: this.props.repos[this.props.repos.length - 1].id + 1,
    title: '',
    status: '',
    language: ''

  }

  changeTitle = (e) => {
    this.setState({ title: e.target.value })
    // console.log(e.target.value)
  }

  changeStatus = (e) => {
    this.setState({ status: e.target.value })
    // console.log(e.target.value)
  }

  changeLanguage = (e) => {
    this.setState({ language: e.target.value })
    // console.log(e.target.value)
  }


  sendState = () => {
    this.props.addRepo(this.state)
    this.setState({ id: this.state.id + 1, title: "", status: "", language: "" })

  }



  render() {
    return (
      <div>
        <form action="#" >
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="repo-tilte"
                name="repoTilte"
                placeholder="Repo Title"
                onChange={this.changeTitle}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="repo-language"
                name="repoLanguage"
                className="form-control"
                placeholder="Repo language"
                onChange={this.changeLanguage}
                required
              />
            </div>
            <div className="col">
              <div className="form-group col-md-8">
                <select
                  className="form-control"
                  id="repoStatus"
                  name="Repo Status"
                  onChange={this.changeStatus}
                  required

                >
                  <option>Repo Status (Private/Public)</option>
                  <option>Private</option>
                  <option>Public</option>
                </select>
              </div>

              <div className="form-group col-md-2">
                <input onClick={this.sendState} type="submit" value="Submit" className="btn btn-info" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
{/* <button onClick={()=>deleteRepo(repo.id)} ID={repo.id}
ID={repo.id} className="btn btn-danger" >Delete</button> */}


// <div class="form-group">
// <input type="text" class="form-control" id="add" placeholder="Add Repo"
//   onChange={/*event =>*/ addRepo/*(event = event.target.value)*/}
// />

// </div>
// <button onClick={addRepo} type="submit" class="btn btn-primary">Submit</button>


 // addRepo = () => {
  //   // console.log(event)
  //   // let newAdded = this.state.added.push("event")
  //   // console.log(newAdded)
  //   // let inputText = event;
  //   // return inputText = event ;
  //   // let m = [1,2,3];
  //   // let newm = m.push(10,4,5)
  //   // console.log(newm)
  // }

   // let newState = this.state;
    // console.log(newState)
    // return newState; 