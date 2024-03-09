import React from "react";

import Table, { version_sort } from "./table";

import "./App.css";

function test_status(pkg) {
  if (pkg.test_status === "PASS") {
    return "table-success";
  } else if (pkg.test_status === "FAIL") {
    return "table-danger";
  }
  return "table-default";
}

function App() {
  const url =
    "https://cxc.cfa.harvard.edu/mta/ASPECT/skare3/dashboard/packages.json";

  const [package_info, setPackageInfo] = React.useState({
    packages: [],
    "ska3-flight": "",
    "ska3-matlab": "",
    time: "",
  });

  // this function fetches the file,
  // and then updates the package_info state value
  React.useEffect(function effectFunction() {
    fetch(url)
      .then((response) => response.json())
      .then((package_info) => {
        setPackageInfo(package_info);
      });
  }, []);

  const [filter, setFilter] = React.useState("");

  const packages = package_info.packages.filter((pkg) =>
    pkg.name.includes(filter)
  );

  return (
    <>
      <h1> Ska Dashboard </h1>

      <input
        defaultValue={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Table
        column_specs={{
          name: { name: "name", title: "Name" },
          owner: { name: "owner", title: "Organization" },
          flight: { name: "flight", title: "Flight", sort: version_sort },
          matlab: { name: "matlab", title: "Matlab", sort: version_sort },
          test: { name: "test_version", title: "Test", sort: version_sort },
          test_status: {
            name: "test_status",
            title: "Test Status",
            class: test_status,
          },
        }}
        show_columns={[
          "name",
          "owner",
          "flight",
          "matlab",
          "test",
          "test_status",
        ]}
        data={packages}
      />
    </>
  );
}

export default App;
