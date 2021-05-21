import React from 'react';
import './CustomerContent.css';
import UserOrders from './UserOrders';
const CustomerContent = (props) => {
    const { order_id, user, dislikes, createdAt, items, restaurant } = props.info;
    // const formatYmd = date => date.toISOString().slice(0, 10);
    // const resDate = JSON.parse(createdAt);
    // console.log(resDate);
    // const str = JSON.stringify(createdAt)
    // const str = createdAt.slice(1, 11);
    // console.log(str)
    // const res = str.slice(0, 10);
    // console.log(res)
    // console.log('string is' + str)
    // const d = str.slice(1, 11);
    // console.log(createdAt);
    // console.log(d);
    // const currentDayOfMonth = nD.getDate();
    // const currentMonth = nD.getMonth(); // Be careful! January is 0, not 1
    // const currentYear = nD.getFullYear();

    // const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
    return (
        <div class="container mt-5">
            <div className="row border mt-5">
                <div className="col-md-12 d-flex">
                    <span className="p-2">Name: {user?.phone}</span>
                    <span className="p-2">Id: {user?.id}</span>
                    <span className="p-2">Created At: </span>
                </div>
            </div>
            <div className="row contact mt-3 bg-light">
                <div className="col-md-6">
                    <h6>Contact Information</h6>
                    <span>Phone: {user?.phone}</span>
                </div>
                <div className="col-md-6">
                    <h6>Address</h6>
                    <span>{user?.address}</span>
                </div>
            </div>
            <div class="row gx-5 mt-3 text-light">
                <div class="col">
                    <div class="p-3 border bg-success about rounded">
                        <h6>Likes</h6>
                        {
                            user?.likes.map(like=><span>{like} &nbsp;</span>)
                        }
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 border bg-success about rounded">
                        <h6>dislikes</h6>
                        {
                            user?.dislikes.map(dislike=><span>{dislike} &nbsp;</span>)
                        }
                    </div>
                </div>
            </div>
            <div class="row gx-5 mt-3 text-dark border">
                <h6>Orders</h6>
                <UserOrders order={props.info}/>
            </div>
        </div>
    );
};

export default CustomerContent;