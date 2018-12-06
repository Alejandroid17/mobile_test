import React from 'react';
import {Row} from 'reactstrap';


export default class ItemRow extends React.Component {

    render() {
        return (
            <Row className="mb-2 shadow-sm bg-light rounded">
                <button type="button" onClick={() => {
                    console.log(this.props.item)
                }} className="btn btn-light w-100">
                    <h3 className="m-2 font-weight-bold">
                        {this.props.item.name}
                    </h3>
                </button>
            </Row>
        );
    }
};
