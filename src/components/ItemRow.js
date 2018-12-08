import React from 'react';
import {Row} from 'reactstrap';
import {Link} from 'react-router-dom'

export default class ItemRow extends React.Component {

    render() {
        return (
            <Row className="mb-2 shadow rounded">
                <Link to={'/user/' + this.props.item.id} style={{width: '100%'}}>
                    <button type="button" className="btn btn-light w-100">
                        <h3 className="m-2 font-weight-bold">
                            {this.props.item.name}
                        </h3>
                    </button>
                </Link>
            </Row>
        );
    }
};
