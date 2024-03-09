import React from "react";

import BootstrapTable from "react-bootstrap/Table";

import { TbSortAscending2, TbSortDescending2 } from "react-icons/tb";

import semver from "semver";

function Table(props) {
  const [sort, setSort] = React.useState({ column: null, reverse: false });

  const column_specs = normalize_column_specs(props.column_specs);

  function setSortColumn(col, event) {
    if (col === sort.column) {
      setSort({ column: col, reverse: !sort.reverse });
    } else {
      setSort({ column: col, reverse: false });
    }
  }

  return (
    <div>
      <BootstrapTable bordered hover className="text-start">
        <thead>
          <tr>
            {props.show_columns.map((col, j) => (
              <th key={j} onClick={(event) => setSortColumn(col, event)}>
                {column_specs[col].title}
                {col === sort.column ? (
                  sort.reverse ? (
                    <TbSortAscending2 />
                  ) : (
                    <TbSortDescending2 />
                  )
                ) : (
                  ""
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Rows
            data={props.data}
            column_specs={column_specs}
            show_columns={props.show_columns}
            sort={sort}
          />
        </tbody>
      </BootstrapTable>
    </div>
  );
}

export default Table;

function Rows(props) {
  var raw_data = props.data;
  if (props.sort.column != null) {
    raw_data = raw_data.sort(
      compare(
        props.sort.column,
        props.sort.reverse,
        props.column_specs[props.sort.column].sort
      )
    );
  }

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
  // optional fields are title, sort, transform, and class
  const norm_column_specs = column_specs;
  for (const value of Object.values(norm_column_specs)) {
    if (value.title == null) {
      // title is just a value
      value.title = value.name;
    }
    if (value.sort == null) {
      // sort is a function that takes two values and returns their difference
      // what matters is just the sign of the result
      value.sort = lexicographic;
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

function compare(col, reverse, fcn) {
  // comparison function for sorting while accounting for null values
  function res(a, b) {
    if (a == null || b == null) {
      return undefined;
    }
    if (a[col] == null || b[col] == null) {
      return undefined;
    }
    const diff = fcn(a[col], b[col]);
    if (reverse) {
      return -diff;
    }
    return diff;
  }
  return res;
}

function lexicographic(a, b) {
  // comparison function for sorting strings
  return a.toString().localeCompare(b.toString());
}

export function version_sort(a, b) {
  var v1 = semver.clean(a);
  var v2 = semver.clean(b);
  if (v1 == null && v2 == null) {
    return 0;
  }
  if (v2 == null) {
    return 1;
  }
  if (v1 == null) {
    return -1;
  }
  if (semver.gt(v1, v2)) {
    return 1;
  }
  if (semver.lt(v1, v2)) {
    return -1;
  }
  return 0;
}
