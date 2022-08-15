import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FoundOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../img/cryptocurrency.png'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className="logo">
                    <Link to="/"> Cryptoverse </Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'>

        </Button> */}
            </div>\
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />} />
                <Link to='/'> Home </Link>
                <Menu.Item icon={<FundOutlined />} />
                <Link to='/crptocurrencies'> Cryptocurrencies </Link>
                <Menu.Item icon={<MoneyCollectOutlined />} />
                <Link to='/exchanges'> Exchanges </Link>
                <Menu.Item icon={<BulbOutlined />} />
                <Link to='/'> News </Link>
            </Menu>
        </div>
    )
}

export default Navbar