'use client'
import { useAppSelector } from '@/context/store'

const useAccessToken = () => {
  const user = useAppSelector(store => store.userState.user)
  if (user === null) {
    return null
  } else {
    return user.accessToken
  }
}

export default useAccessToken
