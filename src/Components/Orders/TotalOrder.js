import React from 'react';

const TotalOrder = (props) => {
    const { order_id, user, items, restaurant } = props.totalOrder;
    const totalPrice = items?.reduce((total, prd) => total + prd.price, 0);
    const totalTaxPct = items?.reduce((total, prd) => total + prd.tax_pct, 0);
    const gTotal = totalPrice + totalTaxPct;
    return (
        <table class="table table-success caption-top table-striped table-hover text-center">
            <caption>List of orders</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Order Id</th>
                    <th scope="col">Restaurent</th>
                    <th scope="col">Total Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{user?.name}</td>
                    <td>{order_id}</td>
                    <td>{restaurant?.name}</td>
                    <td>{gTotal}/=</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TotalOrder;