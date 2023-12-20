import { redirect } from '@sveltejs/kit';

export async function load(event) {
  const { cookies, fetch } = event
  const token = cookies.get('token')
  if (token) {
    const res = await fetch(`${String(process.env.API_BASE)}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await res.json()
    event.locals = { ...event.locals, user: data }
    return { user: data }
  } else {
    throw redirect(301, '/auth/login')
  }
}