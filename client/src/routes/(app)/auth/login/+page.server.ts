import { redirect } from '@sveltejs/kit';

export async function load(event) {
  if (event.cookies.get('token')) {
    redirect(301, '/dashboard')
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, fetch, cookies }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    // console.log({ email, password });

    try {
      const res = await fetch(`${String(process.env.API_BASE)}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()
      cookies.set('token', data.token, { path: '/', sameSite: true, httpOnly: true })
    } catch (err) {
      console.error(err);
      // return { error: err }
    }

  }
}