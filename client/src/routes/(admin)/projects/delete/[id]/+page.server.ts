import { redirect } from '@sveltejs/kit'

export async function load({ cookies, fetch, params }) {
  const id = params.id

  const token = cookies.get('token')

  const res = await fetch(`${process.env.API_BASE}/projects/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })

  await res.json()

  redirect(301, '/dashboard')
}