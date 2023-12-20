import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').Actions} */
export async function load({ cookies }) {
  const token = cookies.get('token')
  if (token) {
    cookies.delete('token', { path: '/' })
  }
  redirect(301, '/')
}