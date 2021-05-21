import React from 'react';

const OrderDetails = (props) => {
    const { order_id, items } = props.orderInfo;
    let serialNo = 1;
    const totalPrice = items?.reduce( (total, prd) => total + prd.price , 0 );
    const totalTaxPct = items?.reduce( (total, prd) => total + prd.tax_pct , 0 );
    const gTotal = totalPrice + totalTaxPct;
      console.log(totalPrice)
    return (
        <div>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Tax Pct</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr>
                            <td>{serialNo++}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.currency}</td>
                            <td>{item.tax_pct}</td>
                            <td>{item.tax_pct + (item.quantity * item.price)}</td>
                        </tr>
                    ))}
                    <tr>

                        <th colspan="7">Total Price</th>
                        <th>{gTotal}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetails;