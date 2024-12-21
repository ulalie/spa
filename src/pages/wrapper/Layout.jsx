import React from 'react'
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				minWidth: '100vw',
				overflowX: 'hidden',
			}}
		>
			<AppBar position='static' sx={{ backgroundColor: '#dcdcdc' }}>
				<Toolbar sx={{ justifyContent: 'flex-end' }}>
					<NavLink
						to='/'
						style={({ isActive }) => ({
							textDecoration: 'none',
							color: 'black',
							marginRight: '20px',
							fontWeight: isActive ? 'bold' : 'normal',
							fontSize: 18,
						})}
						isActive={(match, location) => {
							return match && location.pathname === '/'
						}}
					>
						{' '}
						Users
					</NavLink>
					<NavLink
						to='/albums'
						style={({ isActive }) => ({
							textDecoration: 'none',
							color: 'black',
							marginRight: '20px',
							fontWeight: isActive ? 'bold' : 'normal',
							fontSize: 18,
						})}
						isActive={(match, location) => {
							return match && location.pathname === '/albums'
						}}
					>
						{' '}
						Albums
					</NavLink>
				</Toolbar>
			</AppBar>

			<Box sx={{ flex: 1, py: 3 }}>
				<Container>{children}</Container>
			</Box>

			<Box
				component='footer'
				sx={{
					py: 2,
					textAlign: 'left',
				}}
			>
				<Typography variant='body2' ml={25}>
					&copy; {new Date().getFullYear()} My App
				</Typography>
			</Box>
		</Box>
	)
}
