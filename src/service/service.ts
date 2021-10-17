import Axios from 'axios'

export function isValidResponse(resp: any) {
	return resp && resp.status === 200 && resp.data.status === 1
}

export const DEMO: any = Axios.create({
	// baseURL: 'https://reqres.in/api' 
	baseURL: 'http://localhost:4000' 
})

DEMO.interceptors.request.use((config: any) => {
	// const accessToken = localStorage.getItem('auth-token')
	// config.headers.Authorization = `Bearer ${accessToken}`
	// config.headers['Content-Type'] = 'application/json'
	return config
})

export const methods = {
	GET: 'GET',
	GET_CONFIG: 'GET_CONFIG',
	POST: 'POST',
	POST_CONFIG: 'POST_CONFIG',
	PUT: 'PUT',
	PUT_CONFIG: 'PUT_CONFIG',
	DELETE: 'DELETE',
	PATCH_CONFIG: 'PATCH_CONFIG',
	PATCH: 'PATCH'
}

export class APIError {
	error

	constructor(msg: any) {
		this.error = msg
	}

	get getMessage() {
		return this.error
	}
}

export const serviceMaker = async (url: any, method: any, data: any = {}, config: any = {}) => {
	try {
		let result
		const APIInstance = DEMO

		switch (method) {
			case 'GET': {
				result = await APIInstance.get(url)
				break
			}
			case 'GET_CONFIG': {
				result = await APIInstance.get(url, config)
				break
			}
			case 'POST': {
				result = await APIInstance.post(url, data)
				break
			}
			case 'POST_CONFIG': {
				result = await APIInstance.post(url, data, config)
				break
			}
			case 'PUT': {
				result = await await APIInstance.put(url, data)
				break
			}
			case 'PUT_CONFIG': {
				result = await await APIInstance.put(url, data, config)
				break
			}
			case 'DELETE': {
				result = await APIInstance.delete(url)
				break
			}
			case 'PATCH_CONFIG': {
				result = await await APIInstance.patch(url, data, config)
				break
			}
			case 'PATCH': {
				result = await APIInstance.patch(url, data)
				break
			}
			default: {
				// eslint-disable-next-line no-throw-literal
				throw 'InvalidMethod'
			}
		}
		if (!isValidResponse) {
			// eslint-disable-next-line no-throw-literal
			throw 'InvalidResponse'
		}
		return result.data
	} catch (err: any) {
		const { response } = err
		const { data } = response
		// if (response.status == 403) {
		// 	router.push({ name: 'Unauthorized' })
		// }

		throw new APIError(data)
	}
}
