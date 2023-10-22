import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleBook from "../pages/SingleBook";
import PrivateRoute from "./PrivateRoute";
import MyBooks from "../pages/MyBooks";
import MyVideo from "../pages/MyVideo";
import AddBook from "../pages/AddBook";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addBooks" element={<AddBook />} />
                <Route path="/mybooks" element={<PrivateRoute><MyBooks /></PrivateRoute>} />
                <Route path="/books" element={<PrivateRoute><MyBooks /></PrivateRoute>} />
                <Route path="/book/:id" element={<PrivateRoute><SingleBook /></PrivateRoute>} />
                <Route path="/video" element={<MyVideo />} />
            </Routes>
        </div>
    );
};

export default AllRoutes;