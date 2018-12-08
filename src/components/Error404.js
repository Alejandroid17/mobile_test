import React, {Component} from 'react';

/**
 * Error 404 component.
 */
export default class Error404 extends Component {
    render() {
        return (
            <div className="container-fluid" style={{height: "100vh", marginTop: "25%"}}>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12">
                        <h1 className="display-2 text-danger font-weight-bold">Error 404</h1>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12">
                        <h3 className="font-weight-bold">This url does not exist. :(</h3>
                    </div>
                </div>
            </div>
        );
    }
}
