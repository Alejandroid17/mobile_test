import React from 'react';
import UserCard from './UserCard';
import ItemList from './ItemList';
import UserInfo from './UserInfo';
import {Link} from 'react-router-dom'


export default class UserPanel extends React.Component {
    render() {
        const userData = this.props.userData;
        return (<div className="container-fluid">
            <div className="row">
                <div className="col-sm-5 col-lg-5">
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
    }
}
