import React from 'react';
import { Table } from 'reactstrap';
import PurchasedItem from './PurchasedItem';

const Receipt = (props) => {
    const productObj = [
        {0:'banana',    1:5,    2:15000},
        {0:'apple',     1:3,    2:8000},
        {0:'water',     1:7,   2:2500},
        {0:'cocoa',     1:1,   2:7000},
        {0:'banana',    1:5,    2:15000},
        {0:'apple',     1:3,    2:8000},
        {0:'water',     1:7,   2:2500},
        {0:'cocoa',     1:1,   2:7000}
    ] 
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
        {
          productObj.map((item, i) => {
            return (
                  <PurchasedItem
                      key = {i}
                      item = {item}
                  />
              );
            },0)
        }
        
        
      </tbody>
    </Table>
    </div>
  );
}

export default Receipt;