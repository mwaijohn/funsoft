import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CashCollection from './CashCollection'
import ComponentsWithSidebar from './ComponentsWithSidebar'
import Login from './Login'

function PageRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/cash-collection' element={<ComponentsWithSidebar>
                <CashCollection />
            </ComponentsWithSidebar>} />
        </Routes>
    )
}

export default PageRoutes