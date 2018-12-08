import React from 'react';
import PropTypes from "prop-types";

/**
 * UserInfo component.
 * Render the information of the user.
 */
export default class UserInfo extends React.Component {

    render() {
        return (
            <div className="user-info-container m-3 shadow p-3 bg-white rounded">
                <h4 className="font-weight-bold">User information</h4>
                <div className="row mt-3">
                    <div className="col-6 text-sm-center">
                        <span className="font-weight-bold">Age:</span> {this.props.age}
                    </div>
                    <div className="col-6 text-sm-center">
                        <span className="font-weight-bold">Hair color:</span> {this.props.hairColor}
                    </div>
                </div>
                <div className="row mt-2 md">
                    <div className="col-6 text-sm-center">
                        <span className="font-weight-bold">Height:</span> {this.props.height}
                    </div>
                    <div className="col-6 text-sm-center">
                        <span className="font-weight-bold">Weight:</span> {this.props.weight}
                    </div>
                </div>
            </div>
        );
    }
}

UserInfo.propTypes = {
    age: PropTypes.number,          // age => String
    hairColor: PropTypes.string,    // hairColor => String
    height: PropTypes.number,       // height => Number
    weight: PropTypes.number,       // wight => Number
};

