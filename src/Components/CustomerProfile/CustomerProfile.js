import React, { useEffect, useState } from 'react';
import CustomerContent from './CustomerContent';
import CustomerSideBar from './CustomerSideBar';
import data from '../../FakeData/Data.json';
const CustomerProfile = () => {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        setUserInfo(data);
        console.log(userInfo);
    });
    return (
        <div class="container w-100">
            <div class="row border ">
                <div class="col-4"><CustomerSideBar info={userInfo}/></div>
                <div class="col-8 ms-auto">
                  
                    <CustomerContent info={userInfo} />
                    {/* {
                        userInfo.map(info=><CustomerContent info={info} />)
                    } */}
                </div> 
                 
            </div>
        </div>
    );
};

export default CustomerProfile;