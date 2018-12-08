import React from 'react';
import PropTypes from 'prop-types';

/**
 * ItemList component.
 * Render a list of the values with a main title.
 */
export default class ItemList extends React.Component {

    render() {
        /** List of values. If the list is empty, the empty message is shown. */
        const itemList = this.props.list <= 0 ?
            <div>{this.props.emptyMessage}</div> : this.props.list.map((item, index) =>
                <li key={index} className="list-group-item text-truncate">{item}</li>);

        return (
            <div className="friend-list-container m-3 shadow p-3 bg-white rounded">
                <h4 className="font-weight-bold text-truncate">
                    {this.props.title}
                </h4>
                <ul className="list-group mt-3">
                    {itemList}
                </ul>
            </div>
        );
    };
};

ItemList.propTypes = {
    emptyMessage: PropTypes.string,     // emptyMessage => String
    list: PropTypes.array,              // list => Array
    title: PropTypes.string,            // title => Number (required)
};
