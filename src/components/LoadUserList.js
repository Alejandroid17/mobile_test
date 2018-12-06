import React from 'react';
import List from './List'

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
            );
    };

    render() {
        let component;
        if (this.state.loaded) {
            component = <List data={this.state.elements}
                              title={'Users in Brastlewark'}
                              rowsPerPage={10}
                              minLengthSearch={1}/>
        } else {
            component = <div>Loading data</div>
        }

        return (
            <div className="App">
                <div>
                    {component}
                </div>
            </div>
        );
    }
}
