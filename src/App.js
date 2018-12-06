import React, {Component} from 'react';
import './App.css';
import LoadUserList from './components/LoadUserList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataURL: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json',
        };
    }

    render() {
        return (
            <div className="App">
                <div>
                    <LoadUserList dataURL={this.state.dataURL}/>
                </div>
            </div>
        );
    }
}

export default App;
