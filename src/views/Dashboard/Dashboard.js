import React from "react";
// import { Line, Pie } from "react-chartjs-2";
import './Dashboard.css'

import {
  Row,
  Col,
} from "reactstrap";
// core components
// import {
//   dashboard24HoursPerformanceChart,
//   dashboardEmailStatisticsChart,
//   dashboardNASDAQChart,
// } from "variables/charts.js";

import PriceCard from "./PriceCard/PriceCard";
import Purchased from "./Purchased/Purchased.js";

const Dashboard = (props) => {
  return (
    <>
      <div className="content">
        <Row>
          <Col sm='12' md='8' lg='8'>
            <Purchased/>
          </Col>
          <Col>
            <PriceCard/>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
