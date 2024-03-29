import { useQuery } from '@tanstack/react-query'
import { UserService } from '../services/user.service'

export const useProfile = () => {
	const { data } = useQuery({
		queryKey: ['getProfile'],
		queryFn: UserService.getProfile,
		select: ({ data }) => data
	})

	return { profile: data }
}
