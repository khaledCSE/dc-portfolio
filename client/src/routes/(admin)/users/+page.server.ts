import { redirect } from '@sveltejs/kit';

export async function load(event) {
  if (!event.cookies.get('token')) {
    throw redirect(301, '/auth/login')
  }

  try {
    const { cookies, fetch } = event

    const res = await fetch(`${process.env.API_BASE}/users`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies.get('token')}`
      }
    })

    const data = await res.json()

    return { users: data }
  } catch (err) {
    console.error(err);
  }

}