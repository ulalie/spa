import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAlbums } from '../../utils/apiRequest'
import {
	CircularProgress,
	Container,
	Card,
	CardActionArea,
	CardContent,
	Typography,
} from '@mui/material'

export default function AlbumsPage() {
	const [albums, setAlbums] = useState([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		getAlbums()
			.then(setAlbums)
			.catch(() => navigate('/404'))
			.finally(() => setLoading(false))
	}, [navigate])

	const goToAlbum = useCallback(
		id => {
			return () => navigate(`/albums/${id}`)
		},
		[navigate]
	)

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
		<Container>
			{albums.map(album => (
				<Card
					key={album.id}
					sx={{
						marginBottom: 2,
						backgroundColor: '#f5f5f5', 
						boxShadow: 2,
					}}
				>
					<CardActionArea onClick={goToAlbum(album.id)}>
						<CardContent>
							<Typography variant='h6'>{album.title}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			))}
		</Container>
	)
}
