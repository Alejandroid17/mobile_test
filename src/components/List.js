import React from 'react';
import {Container, Row, Col, Button, Input} from 'reactstrap';
import ItemRow from './ItemRow'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: props.data,
            rowsFiltered: props.data,
            numFilteredRows: 0,
            currentPage: 0,
            hasPreviousPage: false,
            hasNextPage: this.hasNextPage(0, props.data),
        };
    }

    /**
     * On `change` event, the rows are filtered and the status is updated.
     * @param inputType: type of input.
     * @param event: event launched.
     */
    handleSearch = inputType => event => {
        let input = event.target.value;
        if (input.length >= this.props.minLengthSearch) {
            let rowsFiltered = this.filterData(input);
            let hasNextPage = this.hasNextPage(0, rowsFiltered);
            this.setState({
                numFilteredRows: rowsFiltered.length,
                rowsFiltered: rowsFiltered,
                currentPage: 0,
                hasPreviousPage: false,
                hasNextPage: hasNextPage,
            })
        } else {
            this.setState({
                numFilteredRows: this.state.elements.length,
                rowsFiltered: this.state.elements,
                hasPreviousPage: false,
                hasNextPage: this.hasNextPage(0, this.state.elements),
            });
        }
    };

    /**
     * Filters the rows by item value.
     * @param input: string by which to filter the search.
     * @returns {*[]}: list of rows filtered.
     */
    filterData = (input) => {
        let rowsFiltered = this.state.elements.filter((row) => {
            let inputLower = input.toLowerCase();
            if (row.name.toLowerCase().includes(inputLower)) {
                return true;
            }
            return null;
        });
        return rowsFiltered;
    };

    /**
     * Determines if the pagination has next page.
     * @param currentPage: number of the current page.
     * @param elements: list of total elements.
     * @returns {boolean}: true if has next page, in another case false.
     */
    hasNextPage = (currentPage, elements) => {
        if (elements.length > this.props.rowsPerPage) {
            return currentPage * this.props.rowsPerPage + this.props.rowsPerPage < elements.length;
        }
        return false;
    };

    /**
     * Determines if the pagination has previous page.
     * @param currentPage: number of the current page.
     * @returns {boolean}: true if has next page, in another case false.
     */
    hasPreviousPage = (currentPage) => {
        return currentPage > 0;
    };

    /**
     * Change the current page.
     * @param event: event type (next or previus) to indicate if the page is changed to the next
     *               or previous one .
     */
    handleChangePage = (event) => {
        let currentPage = this.state.currentPage;
        let elements = this.state.rowsFiltered;
        if (event === "next" && this.hasNextPage(currentPage, elements)) currentPage++;
        if (event === "previous" && this.hasPreviousPage(currentPage)) currentPage--;
        this.setState({
            currentPage: currentPage,
            hasPreviousPage: this.hasPreviousPage(currentPage),
            hasNextPage: this.hasNextPage(currentPage, elements),
        });
    };

    /**
     * Render the list of items.
     * @param items: List of items.
     * @returns {*}: List of `ItemRow`components.
     */
    renderList = (items) => {
        let initValue = this.state.currentPage * this.props.rowsPerPage;
        let finishValue = initValue + this.props.rowsPerPage;
        items = items.slice(initValue, finishValue);
        const itemList = items.map((item) => {
            return <ItemRow key={item.id} item={item}/>;
        });
        return (<Container>{itemList}</Container>);
    };

    render() {
        return (
            <div className="list-container">
                <Container>
                    <Row className="mt-5 mb-3">
                        <Col xs={12} sm={12}>
                            <h1 className="display-4 font-weight-bold">{this.props.title}</h1>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={12} sm={12}>
                            <Input className="searcher"
                                   placeholder="Write to filter"
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
                            <Button color="primary"
                                    onClick={() => this.handleChangePage("previous")}
                                    disabled={!this.state.hasPreviousPage}
                                    block>Previous</Button>
                        </Col>
                        <Col xs={6} sm={6}>
                            <Button color="primary"
                                    onClick={() => this.handleChangePage("next")}
                                    disabled={!this.state.hasNextPage}
                                    block>Next</Button>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={12} sm={12}>
                            {this.state.rowsFiltered.length} elements (Page {this.state.currentPage})
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
