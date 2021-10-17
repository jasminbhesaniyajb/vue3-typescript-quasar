import { serviceMaker, methods } from './service'

export const FETCH_USERS = () =>
	serviceMaker(`/users`, methods.GET)

export const LOGIN_USER = (payload: any) => {
	serviceMaker(`/login`, methods.POST, payload)
}
