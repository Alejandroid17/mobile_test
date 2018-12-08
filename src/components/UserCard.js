import React from 'react';

export default class UserCard extends React.Component {
    render() {
        let user = this.props.userData;
        return (
            <div className="card m-3 shadow p-3 bg-white rounded">
                <img className="card-img-top" src={user.thumbnail} alt="User"/>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                </div>
            </div>
        );
    }
}
