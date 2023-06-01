import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../../components/Header/Header';
import MainPage from '../../Pages/MainPage/MainPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';
import UserPage from '../../Pages/UserPage/UserPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={'/posts-web/'} element={<MainPage />} />
				<Route path={'/posts-web/about/'} element={<AboutPage/>} />
				<Route path={'/posts-web/user/:id'} element={<UserPage/>} />
				<Route path={'*'} element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;