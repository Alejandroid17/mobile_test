import React from 'react';
import {Container, Row, Col, Button, Input} from 'reactstrap';
import UserRow from './UserRow'

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            elements: [],
            rowsFiltered: [],
            numFilteredRows: 0,
            currentPage: 0,
        };
        this.readData();
    }

    /**
     * Read the data of a file.json file and prepare the elements to show in the list.
     */
    readData = () => {
        fetch(this.props.dataURL)
            .then(res => res.json())
            .then((result) => {
                    console.log(result);
                    let elements = result.Brastlewark.map((data, index) => {
                        return createData(data.id, data.name);
                    });
                    console.log(elements);
                    this.setState({
                        loaded: true,
                        elements: elements,
                        rowsFiltered: elements,
                        numFilteredRows: elements.length,
                    });
                }
            );
    };

    /**
     * On `change` event, the rows are filtered and the status is updated.
     * @param inputType: type of input.
     * @param event: event launched.
     */
    handleSearch = inputType => event => {
        let input = event.target.value;
        if (input.length >= 3) {
            let rowsFiltered = this.filterData(input);
            this.setState({
                numFilteredRows: rowsFiltered.length,
                rowsFiltered: rowsFiltered,
                currentPage: 0,
            })
        } else {
            this.setState({
                numFilteredRows: this.state.elements.length,
                rowsFiltered: this.state.elements,
            });
        }
    };

    /**
     * Filters the rows by username.
     * @param input: string by which to filter the search.
     * @returns {*[]}: list of rows filtered.
     */
    filterData = (input) => {
        let rowsFiltered = this.state.elements.filter((row) => {
            let inputLower = input.toLowerCase();
            if (row.name.toLowerCase().includes(inputLower)) {
                return true;
            }
            return;
        });
        return rowsFiltered;
    };

    /**
     * Change the current page.
     * @param event: event type (next or previus) to indicate if the page is changed to the next
     *               or previus one .
     */
    handleChangePage = (event) => {
        let currentPage = this.state.currentPage;
        if (event === "next" && currentPage * this.props.rowsPerPage + this.props.rowsPerPage < this.state.rowsFiltered.length) currentPage++;
        if (event === "previous" && currentPage > 0) currentPage--;
        this.setState({currentPage: currentPage});
    };

    /**
     * Render the list of users.
     * @param items: List of users.
     * @returns {*}: List of `UserRow`components.
     */
    renderList = (items) => {
        let initValue = this.state.currentPage * this.props.rowsPerPage;
        let finishValue = initValue + this.props.rowsPerPage;
        items = items.slice(initValue, finishValue);
        const itemList = items.map((item) => {
            return <UserRow key={item.id} user={item}/>;
        });
        return (<Container>{itemList}</Container>);
    };

    render() {
        return (
            <div className="user-list-container">
                <Container>
                    <Row className="mb-2">
                        <Col xs={12} sm={12}>
                            <Input placeholder="Search"
                                   onChange={this.handleSearch("search")}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={12} sm={12}>
                            {this.renderList(this.state.rowsFiltered)}
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={6} sm={6}>
                            <Button color="primary" onClick={() => this.handleChangePage("previous")}
                                    block>Previous</Button>
                        </Col>
                        <Col xs={6} sm={6}>
                            <Button color="primary" onClick={() => this.handleChangePage("next")}
                                    block>Next</Button>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={12} sm={12}>
                            {this.state.rowsFiltered.length} elements
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const createData = (id, name) => {
    return {id, name};
};
