import React from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
  } from "reactstrap";

import PurchasedItem from './PurchasedItem.js';

const TableItem = ({items}) => {
return (
        <Card>
            <CardHeader>
            <CardTitle tag="h4">Rincian</CardTitle>
            <hr/>
            </CardHeader>
            <CardBody>
            <Table hover>
                <thead className="text-primary">
                <tr>
                    <th>produk</th>
                    <th>nama</th>
                    <th>harga</th>
                    <th>Qty.</th>
                    <th className="text-right">SubTotal</th>
                </tr>
                </thead>
                <tbody>
                {
                items.map((item, i) => {
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
            </CardBody>
        </Card>
        );
}

export default TableItem;