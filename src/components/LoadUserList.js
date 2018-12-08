import React from 'react';
import List from './List';
import LoadingPanel from './LoadingPanel';
import Error500 from "./Error500";


export default class LoadUserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            elements: [],
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
                    let elements = result.Brastlewark;
                    this.setState({
                        loaded: true,
                        elements: elements,
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
            component = <List data={this.state.elements}
                              title={'Users in Brastlewark'}
                              rowsPerPage={10}
                              minLengthSearch={1}/>;
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
