import React from 'react';
import {GridLoader} from 'react-spinners';
import {css} from 'react-emotion';

/**
 * LoadingPanel component.
 * Render a spinner and "Loading" message.
 */
export default class LoadingPanel extends React.Component {

    render() {
        const override = css`display: inline-block;`;

        return (
            <div className="container-fluid" style={{height: "100vh", marginTop: "20%"}}>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12">
                        <GridLoader sizeUnit={"px"}
                                    size={50}
                                    color={'#888C46'}
                                    className={override}/>
                    </div>
                </div>
                <div className="row align-items-center mt-5">
                    <div className="col-sm-12 col-md-12">
                        <h2 className="font-weight-bold">Loading</h2>
                    </div>
                </div>
            </div>
        );
    }
}
