import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../../utils/apiRequest'
import {
	CircularProgress,
	Container,
	Typography,
	Card,
	CardActionArea,
	CardContent,
} from '@mui/material'

export default function UsersPage() {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		getUsers()
			.then(setUsers)
			.catch(() => navigate('/404'))
			.finally(() => setLoading(false))
	}, [navigate])

	const goToUser = useCallback(
		id => {
			return () => navigate(`/users/${id}`)
		},
		[navigate]
	)

	if (loading) return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh', 
			}}
		>
			<CircularProgress />
		</Container>
	)

	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				marginTop: 4,
			}}
		>
			{users.map(user => (
				<Card
					key={user.id}
					sx={{
						marginBottom: 2,
						width: '100%',
						backgroundColor: '#f5f5f5', 
						boxShadow: 2, 
					}}
				>
					<CardActionArea onClick={goToUser(user.id)}>
						<CardContent>
							<Typography variant='h6'>{user.name}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			))}
		</Container>
	)
}
