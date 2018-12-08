import React from 'react';
import UserCard from './UserCard';
import ItemList from './ItemList';
import UserInfo from './UserInfo';
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

/**
 * UserPanel component.
 * Render a panel that contains the different components to display the
 * user's information.
 */
export default class UserPanel extends React.Component {
    render() {
        const userData = this.props.userData;
        return (<div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 col-lg-4">
                    <UserCard userData={userData}/>
                    <Link to="/">
                        <button type="button" className="btn btn-primary w-75">Go to the list!</button>
                    </Link>
                </div>
                <div className="col-sm-7 mt-4">
                    <div className="col-sm-12">
                        <UserInfo hairColor={userData.hair_color}
                                  height={userData.height}
                                  weight={userData.weight}
                                  age={userData.age}/>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-6">
                                <ItemList list={userData.friends}
                                          title={"Friends"}
                                          emptyMessage={"This user not have friends yet."}/></div>
                            <div className="col-sm-6">
                                <ItemList list={userData.professions}
                                          title={"Professions"}
                                          emptyMessage={"This user not have professions yet."}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    };
};

UserPanel.propTypes = {
    userData: PropTypes.shape({         // userData => Dictionary of ...
        hair_color: PropTypes.string,   // hair_color => String
        friends: PropTypes.array,       // friends => Array
        professions: PropTypes.array,   // professions => Array
    })
};
