import React from 'react';
import userPic from '../../assets/user.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomerSideBar = () => {
    return (
        <div className="mt-5 text-center">
            <div className="border">
                <h5>Profile picture</h5>
                <img src={userPic} alt="" className="w-50" />
            </div>
            <div className="border">
                <h5>More Customers</h5>
                <p>Customer 1</p>
                <p>Customer 2</p>
                <p>Customer 3</p>
                <p>Customer 3</p>
            </div>
        </div>
    );
};

export default CustomerSideBar;