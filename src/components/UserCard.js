import React from 'react';
import PropTypes from "prop-types";


/**
 * UserCard component.
 * Render the thumbnail and username.
 */
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

UserCard.propTypes = {
    userData: PropTypes.shape({         // userData => Dictionary of...
        thumbnail: PropTypes.string,    // thumbnail => String
        name: PropTypes.string,         // name => String
    })
};
