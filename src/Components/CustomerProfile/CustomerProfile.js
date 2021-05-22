import React, { useEffect, useState } from 'react';
import CustomerContent from './CustomerContent';
import CustomerSideBar from './CustomerSideBar';

const CustomerProfile = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch('https://food-bots-p.herokuapp.com/user')
            .then((res) => res.json())
            .then((data) => {
                setUserInfo(data);
                console.log(data);
            });
    }, []);
    return (
        <div class="container w-100 shadow mt-5">
            <div class="row border ">
                <div class="col-4"><CustomerSideBar info={userInfo} /></div>
                <div class="col-8 ms-auto">

                    <CustomerContent info={userInfo} />

                </div>

            </div>
        </div>
    );
};

export default CustomerProfile;