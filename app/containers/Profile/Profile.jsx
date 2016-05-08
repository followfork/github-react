import React, { Component } from 'react'
import { UserProfile, UserRepos, Notes } from '../../components'

class Profile extends Component {
  state = {
    notes: ['a','aa'],
    bio: {
      name: 'followfork',
    },
    repos: ['r1', 'r2'],
  }
  render(){
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          UserProfile 路由的参数是：{this.props.params.username}
          <UserProfile username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          UserRepos
          <UserRepos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          Notes
          <Notes notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

export default Profile
