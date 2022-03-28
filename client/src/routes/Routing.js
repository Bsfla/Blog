import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const Routing = () => {
    return (
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
    </Routes>
    )
}

export default Routing;