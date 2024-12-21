import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
	getAlbumById,
	getPhotosByAlbumId,
	getUserById,
} from '../../utils/apiRequest'
import {
	CircularProgress,
	Container,
	Typography,
	Grid,
	Card,
	CardMedia,
	CardContent,
} from '@mui/material'

export default function OneAlbumPage() {
	const { id } = useParams()
	const [photos, setPhotos] = useState([])
	const [user, setUser] = useState(null)
	const [albumTitle, setAlbumTitle] = useState('')
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		const fetchAlbumData = async () => {
			try {
				const album = await getAlbumById(id)
				setAlbumTitle(album.title)
				const albumPhotos = await getPhotosByAlbumId(id)
				setPhotos(albumPhotos)
				const albumUser = await getUserById(album.userId)
				setUser(albumUser)
			} catch {
				navigate('/404')
			} finally {
				setLoading(false)
			}
		}

		fetchAlbumData()
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
		<Container>
			<Typography variant='h3' my={3}>{albumTitle}</Typography>
			<Typography>
				Creator: <Link to={`/users/${user?.id}`}>{user?.name}</Link>
			</Typography>

			<Grid container spacing={2} sx={{ marginTop: 2 }}>
				{photos.map(photo => (
					<Grid item xs={12} sm={6} md={4} key={photo.id}>
						<Card>
							<CardMedia
								component='img'
								image={photo.thumbnailUrl}
								alt={photo.title}
							/>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
