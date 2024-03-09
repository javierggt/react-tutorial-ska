import React from "react";

import Table from "react-bootstrap/Table";

import "./App.css";

function App() {
  return (
    <>
      <h1> A Table </h1>
      <Table bordered hover striped variant="light">
        <thead>
          <tr>
            <th> Col 1 </th>
            <th> Col 2 </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Content 1</td>
            <td> Content 2</td>
          </tr>
          <tr>
            <td> Content 3</td>
            <td> Content 4</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default App;
