import React from "react";

import Table from "./table";

import "./App.css";

const package_list = {
  packages: [
    {
      owner: "sot",
      name: "Quaternion",
      last_tag: "4.3.1",
      last_tag_date: "2024-02-27T01:55:52Z",
      test_version: "4.3.1",
      flight: "4.3.0",
      matlab: "4.3.0",
      test_status: "PASS",
      issues: 8,
      n_pull_requests: 0,
      branches: 5,
    },
    {
      owner: "acisops",
      name: "acis_thermal_check",
      last_tag: "4.8.1",
      last_tag_date: "2024-02-29T22:56:40Z",
      test_version: "4.8.1",
      flight: "4.8.0",
      matlab: "4.8.0",
      test_status: "FAIL",
      issues: 5,
      n_pull_requests: 1,
      branches: 10,
    },
    {
      owner: "sot",
      name: "chandra_aca",
      last_tag: "4.45.1",
      last_tag_date: "2024-02-13T20:21:55Z",
      test_version: "4.45.1",
      flight: "4.45.0",
      matlab: "4.45.0",
      test_status: "PASS",
      issues: 13,
      n_pull_requests: 0,
      branches: 6,
    },
    {
      owner: "sot",
      name: "fot-matlab",
      last_tag: "2.4.0",
      last_tag_date: "2024-01-22T17:18:06Z",
      test_version: "",
      flight: "2.3.0",
      matlab: "2.4.0",
      test_status: "",
      issues: 0,
      n_pull_requests: 0,
      branches: 8,
    },
    {
      owner: "sot",
      name: "proseco",
      last_tag: "5.12.0",
      last_tag_date: "2024-01-09T22:24:45Z",
      test_version: "5.12.0",
      flight: "5.12.0",
      matlab: "5.12.0",
      test_status: "PASS",
      issues: 42,
      n_pull_requests: 1,
      branches: 4,
    },
    {
      owner: "sot",
      name: "starcheck",
      last_tag: "14.8.0",
      last_tag_date: "2024-02-27T01:49:58Z",
      test_version: "14.8.0",
      flight: "14.7.0",
      matlab: "14.7.0",
      test_status: "PASS",
      issues: 43,
      n_pull_requests: 5,
      branches: 9,
    },
    {
      owner: "sot",
      name: "taco",
      last_tag: "4.2.3",
      last_tag_date: "2023-01-23T20:51:27Z",
      test_version: "4.2.4.dev2+g12dab81",
      flight: "4.2.3",
      matlab: "4.2.3",
      test_status: "PASS",
      issues: 3,
      n_pull_requests: 0,
      branches: 1,
    },
  ],
  "ska3-flight": "2023.10",
  "ska3-matlab": "2023.11",
  time: "2024-03-08T15:01:34.321073",
};

function App() {
  return (
    <>
      <h1> Ska Dashboard </h1>

      <Table
        column_specs={{
          name: { name: "name", title: "Name" },
          owner: { name: "owner", title: "Organization" },
          flight: { name: "flight", title: "Flight" },
          matlab: { name: "matlab", title: "Matlab" },
          test: { name: "test_version", title: "Test" },
          test_status: { name: "test_status", title: "Test Status" },
        }}
        show_columns={[
          "name",
          "owner",
          "flight",
          "matlab",
          "test",
          "test_status",
        ]}
        data={package_list.packages}
        sort={{ column: "name", reverse: false }}
      />
    </>
  );
}

export default App;
