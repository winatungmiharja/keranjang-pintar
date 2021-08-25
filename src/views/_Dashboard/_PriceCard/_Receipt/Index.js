import React from "react";
import { Table } from "reactstrap";
import ReceiptItem from "./_ReceiptItem";

const Receipt = (props) => {
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th># Product</th>
            <th>Qty.</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {
          props.items.map((item, i) => {
            return (
                  <ReceiptItem
                      key = {i}
                      item = {item}
                  />
              );
            },0)
        } */}
        </tbody>
      </Table>
    </div>
  );
};

export default Receipt;
