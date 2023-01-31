import React from "react";
import renderer from "react-test-renderer";
import { Page, UserCard, LoadingView } from "../src/components/atoms";

describe("Components render correctly", () => {
  it("renders loading view component correctly", () => {
    const tree = renderer.create(<LoadingView/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders page component correctly", () => {
    const tree = renderer.create(<Page/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders usercard component correctly", () => {
    const tree = renderer.create(<UserCard/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
