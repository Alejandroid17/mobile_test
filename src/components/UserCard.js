import React from 'react';

export default class UserCard extends React.Component {
    render() {
        let user = this.props.userData;
        console.log(user);
        return (
            <div className="card m-3 shadow p-3 bg-white rounded">
                <img className="card-img-top" src={user.thumbnail} alt="User image"></img>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                </div>
            </div>
        );
    }
}
