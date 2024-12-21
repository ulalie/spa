export const apiRequest = async (url, options = {}) => {
	try {
		const response = await fetch(url, options)
		if (!response.ok) {
			throw new Error(`API error: ${response.statusText}`)
		}
		return await response.json()
	} catch (error) {
		console.error(error)
		throw error
	}
}

export const getUsers = () =>
	apiRequest('https://jsonplaceholder.typicode.com/users')

export const getUserById = id =>
	apiRequest(`https://jsonplaceholder.typicode.com/users/${id}`)

export const getAlbums = () =>
	apiRequest('https://jsonplaceholder.typicode.com/albums')

export const getAlbumsByUserId = userId =>
	apiRequest(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)

export const getAlbumById = id =>
	apiRequest(`https://jsonplaceholder.typicode.com/albums/${id}`)

export const getPhotosByAlbumId = albumId =>
	apiRequest(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
