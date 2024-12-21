import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import AlbumsPage from './pages/albums'
import UsersPage from './pages/users'
import NotFoundpage from './pages/404'
import OneUserPage from './pages/user'
import OneAlbumPage from './pages/album'
import Layout from './pages/wrapper/Layout'

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<UsersPage />} />
				<Route path='/albums' element={<AlbumsPage />} />
				<Route path='/users/:id' element={<OneUserPage />} />
				<Route path='/albums/:id' element={<OneAlbumPage />} />
				<Route path='*' element={<NotFoundpage />} />
			</Routes>
		</Layout>
	)
}

export default App
