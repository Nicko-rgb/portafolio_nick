import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Page from './Page/Page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
