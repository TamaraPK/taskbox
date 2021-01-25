// src/components/DataTablePF.js

//import React from 'react';
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { clickRow } from "../lib/reduxDataTable";

//import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export function DataTablePF({ data, onClickRow }) {
  const events = {
    onClickRow,
  };

  const rowClass = (data) => {
    return {
      "row-accessories": data.category === "Accessories",
    };
  };

  const stockBodyTemplate = (rowData) => {
    const stockClassName = classNames({
      outofstock: rowData.quantity === 0,
      lowstock: rowData.quantity > 0 && rowData.quantity < 10,
      instock: rowData.quantity > 10,
    });

    return <div className={stockClassName}>{rowData.quantity}</div>;
  };

  //console.log(data);

  return (
    <div className="datatable-style-demo">
      <div className="card">
        <DataTable value={data} rowClassName={rowClass}>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column
            field="quantity"
            header="Quantity"
            body={stockBodyTemplate}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}

DataTablePF.propTypes = {
  /** Composition of the task */
  DataTablePF: PropTypes.shape({
    data: PropTypes.arrayOf(DataTable.propTypes.data).isRequired,
    onClickRow: PropTypes.func,
  }),
  /** Events */
};

//import ProductService from '../service/ProductService';
//import './DataTableDemo.css';

export default connect(
  ({ data }) => ({
    data: data,
  }),
  (dispatch) => ({
    onArchiveTask: (id) => dispatch(clickRow(id)),
  })
)(DataTablePF);
