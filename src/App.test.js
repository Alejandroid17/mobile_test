import React from 'react'
import {render} from 'react-testing-library'
import ItemList from './components/ItemList'


describe("ItemList component", () => {
    test("Item list without values", () => {
        let props = {
            title: "Test title",
            emptyMessage: "Test empty message",
            list: [],
        };

        const {getByText} = render(<ItemList {...props}/>);
        const titleNode = getByText(props.title);
        const emptyMessageNode = getByText(props.emptyMessage);

        expect(titleNode).toBeDefined();
        expect(emptyMessageNode).toBeDefined();
    });

    test("Item list with values", () => {
        let props = {
            title: "Test title",
            emptyMessage: "Test empty message",
            list: ["Val1", "Val2", "Val3"],
        };

        const {getByText} = render(<ItemList {...props}/>);
        const firstValue = getByText(props.list[1]);
        const secondValue = getByText(props.list[2]);
        const thirdValue = getByText(props.list[2]);

        expect(firstValue).toBeDefined();
        expect(secondValue).toBeDefined();
        expect(thirdValue).toBeDefined();
    })
});