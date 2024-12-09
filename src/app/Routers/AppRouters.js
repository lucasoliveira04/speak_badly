"use client"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserPage } from "../pages/UserPage"

export const AppRouters = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    )
}