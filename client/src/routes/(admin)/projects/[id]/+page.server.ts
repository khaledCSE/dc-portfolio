import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types.js'

export async function load({ fetch, params }) {
  const id = params.id

  const res = await fetch(`${process.env.API_BASE}/projects/${id}`)
  const data = await res.json()

  const skillRes = await fetch(`${process.env.API_BASE}/skills`)
  const skills = await skillRes.json()

  return { projects: data, skills }
}

export const actions: Actions = {
  default: async ({ cookies, fetch, request }) => {
    const formData = await request.formData()
    const projectId = formData.get('projectId')
    const projectName = formData.get('projectName')
    const projectDescription = formData.get('projectDescription')
    const skills = JSON.parse(formData.get('skills')!.valueOf() as string)
    const techStack = formData.get('techStack')!.toString().split(',').map((el) => el.trim())


    const skillRes = await fetch(`${process.env.API_BASE}/skills`)
    const skillData = await skillRes.json()

    const mappedSkills: string[] = []
    for (let i = 0; i < skills.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      skillData.forEach((sk: any) => {
        if (sk.name === skills[i]) {
          mappedSkills.push(sk._id)
        }
      })
    }

    const token = cookies.get('token')

    const payload = { projectId, projectName, projectDescription, skills: mappedSkills, techStack };

    const res = await fetch(`${process.env.API_BASE}/projects`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })

    await res.json()

    redirect(301, '/projects')
  }
}