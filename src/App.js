import React from 'react';
import './App.css';
import UserList from './components/UserList'

class App extends React.Component {
    constructor(props) {
        super(props);
        const dataURL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
        this.state = {
            loaded: false,
            elements: [],
        };
        this.readData(dataURL);
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
            component = <UserList data={this.state.elements}
                                  rowsPerPage={10}
                                  minLengthSearch={1}/>
        } else {
            component = <div>Loading data</div>
        }

        return (
            <div className="App">
                <div className="mt-5 mb-5">
                    <h1>Users in Brastlewark</h1>
                </div>
                <div>
                    {component}
                </div>
            </div>
        );
    }
}

export default App;
