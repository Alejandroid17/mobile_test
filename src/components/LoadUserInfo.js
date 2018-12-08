import React from 'react';
import UserPanel from './UserPanel';
import LoadingPanel from './LoadingPanel';

export default class LoadUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            userData: null,
        };
        this.readData(this.props.dataURL);
    }

    /**
     * Read the data of a file.json file and prepare the elements to show in the list.
     */
    readData = (dataURL) => {
        fetch(dataURL)
            .then(res => res.json())
            .then((result) => {
                    let userData = result.Brastlewark[this.props.id];
                    console.log(userData);
                    this.setState({
                        loaded: true,
                        userData: userData,
                    });
                }
            );
    };

    render() {
        let component = this.state.loaded ? <UserPanel userData={this.state.userData}/> : <LoadingPanel/>;

        return (
            <div className="App">
                <div>
                    {component}
                </div>
            </div>
        );
    }
}
