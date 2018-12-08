import React from 'react'
import {render} from 'react-testing-library'
import ItemList from './components/ItemList'
import UserInfo from './components/UserInfo'
import UserCard from './components/UserCard'


describe("ItemList component", () => {
    test("Item list without values", () => {
        let props = {
            title: "Test title",
            emptyMessage: "Test empty message",
            list: [],
        };

        const {getByText, container} = render(<ItemList {...props}/>);
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


describe("UserInfo component", () => {
    test("Render the information", () => {
        let props = {
            age: 1012,
            hairColor: "testColor",
            height: 1013,
            weight: 1014,
        };

        const {getByText} = render(<UserInfo {...props}/>);
        const ageNode = getByText((props.age).toString());
        const hairColorNode = getByText(props.hairColor);
        const heightNode = getByText((props.height).toString());
        const weightNode = getByText((props.weight).toString());

        expect(ageNode).toBeDefined();
        expect(hairColorNode).toBeDefined();
        expect(heightNode).toBeDefined();
        expect(weightNode).toBeDefined();
    });
});

describe("UserCard component", () => {
    test("Render title and url image", () => {
        let props = {
            userData: {
                thumbnail: "urlImage",
                name: "TestName",
            }
        };

        const {container, getByText} = render(<UserCard {...props}/>);
        const thumbnailNode = container.querySelector("img.card-img-top");
        const nameNode = getByText(props.userData.name);

        expect(thumbnailNode).toBeDefined();
        expect(nameNode).toBeDefined();
    });
});
