import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import userPic from '../../assets/user.png';
import OrderDetails from './OrderDetails';
import TotalOrder from './TotalOrder';

const Orders = () => {
  const [orderInfo, setOrderInfo] = useState({});
  const { order_id, user, dislikes, createdAt, items, restaurant } = orderInfo;

  useEffect(() => {
    fetch('https://food-bots-p.herokuapp.com/orders')
      .then((res) => res.json())
      .then((data) => {
        setOrderInfo(data);
        console.log(data);
      });
  }, []);

  return (
    <div class="container mt-3 shadow">
      <div class="row">
        <div class="col-md-3 border">
          <h5 className="border w-100 bg-secondary text-light text-center p-3 shadow">Restaurent details</h5>
          <div>
            <h6>Name:</h6>
            <p>{restaurant?.name}</p>
            <h6>Address:</h6>

            <p><span> Street: {restaurant?.street}</span></p>
            <p><span> City: {restaurant?.city}</span><br /></p>
            <p><span> State: {restaurant?.state}</span></p>
            <p><span> Zipcode: {restaurant?.zipcode}</span></p>

          </div>
        </div>
        <div class="col-md-9 border">
          <div class="fluid shadow">
            <div class="d-flex align-items-center">
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
      <div class="row border mt-2">
        <div class="col-md-12">
          <TotalOrder totalOrder={orderInfo} />
        </div>
      </div>
    </div>
  );
};

export default Orders;