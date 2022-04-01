import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostWritePage from '../pages/Post/PostWritePage';

const Routing = () => {
    return (
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/postwrite' element={<PostWritePage />}></Route>
    </Routes>
    )
}

export default Routing;