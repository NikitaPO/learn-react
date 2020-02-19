import React from "react";
import "./App.css";
import JSX from "./Main concepts/JSX";
import Forms from "./Main concepts/Forms";
import "semantic-ui-css/semantic.min.css";
import FilterableProductTable from "./Main concepts/FilterableProductTable";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <JSX />
        <Forms />
        <FilterableProductTable />
      </React.Fragment>
    );
  }
}

export default App;
