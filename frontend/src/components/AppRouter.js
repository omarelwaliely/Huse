import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
