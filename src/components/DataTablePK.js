// src/components/DataTablePK.js

//import React from 'react';
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { clickRow } from "../lib/reduxDataTable";

//import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";

export function DataTablePK({ data, onClickRow, reorderableColumns }) {
  const events = {
    onClickRow,
  };

  const rowClass = (data) => {
    return {
      "row-danger": data.quantity === 0,
    };
  };

  const stockBodyTemplate = (rowData) => {
    const stockClassName = classNames({
      outofstock: rowData.quantity === 0,
      lowstock: rowData.quantity > 0 && rowData.quantity < 10,
      instock: rowData.quantity > 10,
    });
    return (
      <div className={stockClassName}>
        {rowData.quantity === 0 ? <i className='pi pi-exclamation-circle'></i> : rowData.quantity}
      </div>
    );
  };

  return (
    <div className="datatable-style-demo">
      <div className="card">
        <DataTable value={data} rowClassName={rowClass} reorderableColumns={reorderableColumns} >
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

DataTablePK.propTypes = {
  /** Composition of the task */
  DataTablePK: PropTypes.shape({
    data: PropTypes.arrayOf(DataTable.propTypes.data).isRequired,
    onClickRow: PropTypes.func,
    reorderable: PropTypes.bool,
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
)(DataTablePK);
