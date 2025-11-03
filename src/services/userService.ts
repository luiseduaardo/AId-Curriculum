import { apiFetch } from './api'

export async function getUser(id: string){
  return apiFetch(`/users/${id}`)
}
