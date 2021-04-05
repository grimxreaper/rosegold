import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { render } from "@testing-library/react";
// import "jest-dom/extend-expect";
import renderer from 'react-test-renderer';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="click me"></Button>)
    expect(getByTestId('button')).toHaveTextContent("click me")
})

it('matches snapshot 1', () => {
   const tree = renderer.create(<Button label="save"></Button>).toJSON();
   expect(tree).toMatchSnapshot();
})

it('matches snapshot 2', () => {
    const tree = renderer.create(<Button label="click me please"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
 })