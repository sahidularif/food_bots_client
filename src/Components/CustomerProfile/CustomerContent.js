import React from 'react';
import './CustomerContent.css';
import UserOrders from './UserOrders';
const CustomerContent = (props) => {
    const { order_id, user, dislikes, items, restaurant } = props.info;

    return (
        <div class="container-fluid justify-content-between shadow">
            <div className="row border">
                <div className="col-md-12 d-flex bg-secondary text-light">
                    <span className="p-2">Name: {user?.name}</span>
                    <span className="p-2">Id: {user?.id}</span>
                </div>
            </div>
            <div className="row border contact mt-3 bg-light">
                <div className="col-md-6">
                    <h6>Contact Information</h6>
                    <span>Phone: {user?.phone}</span>
                </div>
                <div className="col w-50">
                    <h6>Address</h6>
                    <span>{user?.address}</span>
                </div>
            </div>
            <div class="row gx-5 mt-3 text-light d-flex tex-center justify-content-between">
                <div class="col-md-6">
                    <div class="p-3 border text-dark about rounded shadow">
                        <h6>Likes</h6>
                        <p className="d-flex">
                            {
                                user?.likes.map(like => <li>{like} &nbsp;</li>)
                            }
                        </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3 border text-dark about rounded shadow">
                        <h6>Likes</h6>
                        <p className="d-flex">
                            {
                                user?.dislikes.map(dislike => <li>{dislike} &nbsp;</li>)
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div class="row gx-5 mt-3 text-dark border">
                <h6>Order by {user?.name}</h6>
                <UserOrders order={props.info} />
            </div>
        </div>
    );
};

export default CustomerContent;