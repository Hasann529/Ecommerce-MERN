import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import { Typography } from "@mui/material";
import {Doughnut,Line} from 'react-chartjs-2'
import { getAdminProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { allOrders } from "../../actions/orderAction";
import { getAllUsers } from "../../actions/userAction";


const Dashboard = () => {

const dispatch = useDispatch()
const {adminProducts} = useSelector(state => state.adminProducts)
const {orders} = useSelector(state => state.allOrders)
const {users} = useSelector(state => state.allUsers)

  let outOfStock = 0;

  adminProducts &&
    adminProducts.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(allOrders())
    dispatch(getAllUsers())

  }, [dispatch]);
   
  let totalAmount = 0;
    orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });


    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
          {
            backgroundColor: ["#00A6B4", "#6800B4"],
            hoverBackgroundColor: ["#4B5000", "#35014F"],
            data: [outOfStock, adminProducts.length - outOfStock],
          },
        ],
      };

      const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
          {
            label: "TOTAL AMOUNT",
            backgroundColor: ["tomato"],
            hoverBackgroundColor: ["rgb(197, 72, 49)"],
            data: [0, totalAmount],
          },
        ],
      };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{adminProducts?.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders?.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users?.length}</p>
            </Link>
          </div>
        </div>

          <div className="lineChart">
          <Line data={lineState} />
        </div> 

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> 
      </div>
    </div>
  );
};

export default Dashboard;
