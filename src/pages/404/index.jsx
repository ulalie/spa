import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Button } from '@mui/material'

export default function NotFoundpage() {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center', 
				alignItems: 'center', 
				height: '100vh', 
				textAlign: 'center',
				marginTop: 0, 
			}}
		>
			<Typography variant='h1'>404</Typography>
			<Typography variant='h4'>Page Not Found</Typography>
			<Typography sx={{ marginBottom: 2 }}>
				Sorry, the page you're looking for doesn't exist.
			</Typography>
			<Button
				variant='contained'
				sx={{
					backgroundColor: '#003366',
					color: 'white',
					'&:hover': {
						backgroundColor: '#003399',
					},
				}}
				component={Link}
				to='/'
			>
				Back to Users
			</Button>
		</Container>
	)
}
