import React, {Component} from 'react';

/**
 * Error 500 component.
 */
export default class Error500 extends Component {
    render() {
        return (
            <div className="container-fluid" style={{height: "100vh", marginTop: "25%"}}>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12">
                        <h1 className="display-4 text-danger font-weight-bold">Ups, something is not working.</h1>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12">
                        <h3 className="font-weight-bold">The error was reported to the team.</h3>
                    </div>
                </div>
            </div>
        );
    }
}
