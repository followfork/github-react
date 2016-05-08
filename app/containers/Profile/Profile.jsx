import React, { Component } from 'react'
import { UserProfile, UserRepos, Notes } from '../../components'

class Profile extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          UserProfile 路由的参数是：{this.props.params.username}
          <UserProfile />
        </div>
        <div className="col-md-4">
          UserRepos
          <UserRepos />
        </div>
        <div className="col-md-4">
          Notes
          <Notes />
        </div>
      </div>
    )
  }
}

export default Profile
