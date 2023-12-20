import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types.js';

export async function load({ params, fetch }) {
  try {
    const res = await fetch(`${process.env.API_BASE}/skills/${params.id}`)
    const data = await res.json()

    return { skill: data }
  } catch (err) {
    console.error(err);
    redirect(301, '/dashboard')
  }

}

export const actions: Actions = {
  default: async ({ cookies, fetch, request }) => {
    const formData = await request.formData()
    const skillId = formData.get('skillId')
    const skillName = formData.get('skillName')
    const skillDescription = formData.get('skillDescription')

    const token = cookies.get('token')

    try {
      const res = await fetch(`${process.env.API_BASE}/skills`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ skillId, skillName, skillDescription })
      })

      await res.json()

      return redirect(301, '/skills')
    } catch (err) {
      console.error(err);
      throw redirect(301, '/skills')
    }
  }
}