import { redirect } from "@sveltejs/kit";
import type { Actions } from "../$types";

export const actions: Actions = {
  default: async ({ cookies, fetch, request }) => {
    const formData = await request.formData()
    const skillName = formData.get('skillName')
    const skillDescription = formData.get('skillDescription')

    const token = cookies.get('token')

    const res = await fetch(`${process.env.API_BASE}/skills`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ skillName, skillDescription })
    })

    await res.json()

    throw redirect(301, '/skills')
  }
}