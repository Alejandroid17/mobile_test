import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';
import {Link} from 'react-router-dom'


export default class ItemRow extends React.Component {

    render() {
        return (
            <Row className="mb-2 shadow rounded">
                <Link to={'/user/' + this.props.item.id} style={{width: '100%'}}>
                    <button type="button" className="btn btn-light w-100">
                        <h3 className="m-2 font-weight-bold text-truncate">
                            {this.props.item.name}
                        </h3>
                    </button>
                </Link>
            </Row>
        );
    }
};

ItemRow.propTypes = {
    item: PropTypes.shape({                 // item => Dictionary of ...
        id: PropTypes.number.isRequired,    // id => Number (required)
        name: PropTypes.string,             // name => String
    })
};
