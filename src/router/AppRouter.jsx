import { Router } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import About from "../page/About";
import Register from "../page/Register";
import Login from "../page/Login";
import PrivateRouter from "./PrivateRouter";
import Detail from "../page/Detail";
import MyBlogs from "../page/MyBlogs";
import Navbar from "../components/Navbar";
import NewBlogs from "../page/NewBlogs";
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/abouth" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/newblog" element={<NewBlogs />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
