import React from 'react';
import{Button,Menu,Typography,Avatar} from 'antd';
import {Link} from "react-router-dom";
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,UserOutlined} from '@ant-design/icons'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar>
                </Avatar>
                <Typography.Title level={2} className='logo'>
                   <Link to="/">Cryptouniverse</Link>

                </Typography.Title>
            </div>
            {/* <Button className='menu-control-contianer'></Button> */}
        </div>
    );
};

export default Navbar;