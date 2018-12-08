import React from 'react';
import UserPanel from './UserPanel';
import LoadingPanel from './LoadingPanel';
import Error500 from './Error500';

export default class LoadUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            userData: null,
            hasError: false,
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
            )
            .catch((error) => {
                this.setState({
                    hasError: true,
                });
                // Register error in some log...
            });
    };

    render() {
        let component = <LoadingPanel/>;
        if (this.state.hasError) {
            component = <Error500/>;
        } else if (this.state.loaded) {
            component = <UserPanel userData={this.state.userData}/>;
        }

        return (
            <div>
                <div>
                    {component}
                </div>
            </div>
        );
    }
}
