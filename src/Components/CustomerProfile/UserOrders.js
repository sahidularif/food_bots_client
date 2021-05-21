import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserOrders = (props) => {
  const {order_id, restaurant, items} = props.order;
  console.log(order_id)
    return (
        <div>
           <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Order id</th>
      <th scope="col">Restaurant</th>
      <th scope="col">Category</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{order_id}</td>
      <td>{restaurant?.name}</td>
      <td>{restaurant?.name}</td>
      <td>{restaurant?.name}</td>
    </tr>
  </tbody>
</table> 
        </div>
    );
};

export default UserOrders;