import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getUserById, getAlbumsByUserId } from '../../utils/apiRequest'
import {
	CircularProgress,
	Container,
	Typography,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemButton,
} from '@mui/material'

export default function OneUserPage() {
	const { id } = useParams()
	const [user, setUser] = useState(null)
	const [albums, setAlbums] = useState([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userData = await getUserById(id)
				setUser(userData)
				const userAlbums = await getAlbumsByUserId(id)
				setAlbums(userAlbums)
			} catch (err) {
				navigate('/404')
			} finally { 
				setLoading(false)
			}
		}

		fetchUserData()
	}, [id, navigate])

	if (loading)
		return (
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
			<Typography ml={2} variant='h4'>
				{user?.name}
			</Typography>
			<Typography ml={2}>Email: {user?.email}</Typography>
			<Typography ml={2}>Username: {user?.username}</Typography>
			<Typography ml={2}>Site: {user?.website}</Typography>
			<Typography ml={2}>Phone: {user?.phone}</Typography>

			<Typography variant='h5' sx={{ marginTop: 2, marginLeft: 2 }}>
				Albums:
			</Typography>
			{albums.length > 0 ? (
				<List>
					{albums.map(album => (
						<ListItem key={album.id}>
							<ListItemButton component={Link} to={`/albums/${album.id}`}>
								{album.title}
							</ListItemButton>
						</ListItem>
					))}
				</List>
			) : (
				<Typography>No albums found.</Typography>
			)}
		</Container>
	)
}
