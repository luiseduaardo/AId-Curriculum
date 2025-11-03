import { useState } from 'react'

export default function useAuth(){
  const [user, setUser] = useState<null | { id:string; name:string }>(null)
  const login = (u:{id:string;name:string})=> setUser(u)
  const logout = ()=> setUser(null)
  return { user, login, logout }
}
