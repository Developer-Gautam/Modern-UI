import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import MainLayout from './layout/MainLayout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Blank />} />
                    <Route path="transiction" element={<Blank />} />
                    <Route path="settings" element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
