import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import userPic from '../../assets/user.png';
import data from '../../FakeData/Data.json';
import OrderDetails from './OrderDetails';
import TotalOrder from './TotalOrder';
const Orders = () => {
  const [orderInfo, setOrderInfo] = useState({});
  const { order_id, user, dislikes, createdAt, items, restaurant } = orderInfo;
  useEffect(() => {
    setOrderInfo(data);
    console.log(orderInfo);
  });
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3 border">
          <h6>Restaurent details</h6>
          <div>
            <h6>Name:</h6>
            <p>{restaurant?.name}</p>
            <h6>Address:</h6>

              <p><span> <b>Street:</b> {restaurant?.street}</span></p>
              <p><span> <b>City:</b> {restaurant?.city}</span><br /></p>
              <p><span> <b>State:</b> {restaurant?.state}</span></p>
              <p><span> <b>Zipcode:</b> {restaurant?.zipcode}</span></p>

          </div>
        </div>
        <div class="col-md-9 border">
          <div class="fluid border">
            <div class="border d-flex align-items-center">
              <img src={userPic} class="img-fluid p-3" width="85" height="85" alt="" />
              <h6 class="p-3">Name: {user?.name}</h6>
              <h6 class="p-3">Order Id: {user?.id}</h6>
            </div>
          </div>
          <div>
            <OrderDetails orderInfo={orderInfo} />
          </div>
        </div>
      </div>
      <div class="row border mt-5">
        <div class="col-md-12">
          <TotalOrder totalOrder={orderInfo}/>
        </div>
      </div>
    </div>
  );
};

export default Orders;