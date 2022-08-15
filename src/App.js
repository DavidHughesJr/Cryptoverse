import React from 'react'
import { Layout, Typography, Space } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components'
import './App.css'


const App = () => {
    return (
        <div>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/" element={<Homepage />} />
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className='footer'> </div>

        </div>
    )
}

export default App