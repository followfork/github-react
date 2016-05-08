import React, { Component } from 'react';

export default class UserRepos extends Component {
  // static propTypes = {
  //   username: PropTypes.string.isRequired,
  //   repos: PropTypes.array.isRequired
  // }
  render(){
  	console.log('repos:', this.props.repos);

  	let repos = this.props.repos.map( (repo, index ) => {
      return (
        <li className="list-group-item" key={index}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
          {repo.description && <p>{repo.description}</p>}
        </li>
      )
    });
    return (
      <div>
        <p> GIT仓库 </p>
        {/*<p> REPOS: {this.props.repos}</p>  */}
        <ul className="list-group">
          { repos }
        </ul>
      </div>
    )
  }
}
