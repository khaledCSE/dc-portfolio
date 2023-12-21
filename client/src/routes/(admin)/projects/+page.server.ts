import type { LoadEvent } from "@sveltejs/kit";
export async function load(event: LoadEvent) {
  const { fetch } = event
  try {
    const res = await fetch(`${process.env.API_BASE}/projects`)
    const data = await res.json()

    const skillRes = await fetch(`${process.env.API_BASE}/skills`)
    const skills = await skillRes.json()

    return { data, skills }
  } catch (error) {
    console.log(error);
    return { resp: undefined }
  }

}
