import React, {Component} from 'react';
import './App.css';
import UserList from './components/UserList'

class App extends Component {
    render() {
        const dataURL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
        return (
            <div className="App">
                <div className="mt-5 mb-5">
                    <h1>User in Brastlewark</h1>
                </div>
                <div>
                    <UserList dataURL={dataURL} rowsPerPage={10}/>
                </div>
            </div>
        );
    }
}

export default App;
