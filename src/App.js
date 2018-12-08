import React, {Component} from 'react';
import './App.css';
import LoadUserList from './components/LoadUserList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error404 from './components/Error404';
import LoadUserInfo from "./components/LoadUserInfo";

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
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/(mobile_test|)" render={() => <LoadUserList dataURL={this.state.dataURL}/>}/>
                            <Route exact path="/(mobile_test/user|user)/:id" render={({match}) => <LoadUserInfo id={match.params.id}
                                                                                             dataURL={this.state.dataURL}/>}/>
                            <Route component={Error404}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
