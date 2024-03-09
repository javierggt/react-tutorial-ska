import React from "react";

import BootstrapTable from "react-bootstrap/Table";

function Table(props) {
  const column_specs = normalize_column_specs(props.column_specs);

  return (
    <div>
      <BootstrapTable bordered hover className="text-start">
        <thead>
          <tr>
            {props.show_columns.map((col, j) => (
              <th key={j}>{column_specs[col].title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Rows
            data={props.data}
            column_specs={column_specs}
            show_columns={props.show_columns}
          />
        </tbody>
      </BootstrapTable>
    </div>
  );
}

export default Table;

function Rows(props) {
  var raw_data = props.data;

  return (
    <>
      {raw_data.map((pkg, i) => (
        <Row
          key={i}
          column_specs={props.column_specs}
          data={pkg}
          show_columns={props.show_columns}
        />
      ))}
    </>
  );
}

function Row(props) {
  const cells = props.show_columns.map((col) => (
    <td key={col} className={props.column_specs[col].class(props.data)}>
      {props.column_specs[col].transform(props.data)}
    </td>
  ));
  return <tr>{cells}</tr>;
}

function normalize_column_specs(column_specs) {
  // this function adds missing optional fields to column_specs
  // optional fields are title, transform, and class
  const norm_column_specs = column_specs;
  for (const value of Object.values(norm_column_specs)) {
    if (value.title == null) {
      // title is just a value
      value.title = value.name;
    }
    if (value.transform == null) {
      // transform is a function that takes dictionary and returns a string
      // it is used to format the value for display
      value.transform = (pkg) => pkg[value.name];
    }
    if (value.class == null) {
      // class is a function that takes dictionary and returns a string
      // it is used to set the CSS class of the cell
      value.class = (pkg) => "table-default";
    }
  }
  return norm_column_specs;
}
