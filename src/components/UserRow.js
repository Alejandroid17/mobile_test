import React from 'react';
import {Row, Col, Button} from 'reactstrap';


export default class UserRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="mb-2 shadow-sm bg-light rounded">
                <Col xs={12} sm={12}>
                    <a>
                        <h3 className="m-2 font-weight-bold">{this.props.user.name}</h3>
                    </a>
                </Col>
            </Row>
        );
    }
};
