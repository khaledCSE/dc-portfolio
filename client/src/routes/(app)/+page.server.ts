import type { LoadEvent } from "@sveltejs/kit";

export interface IindexResponse {
  success: boolean
  message: string
  users: number
}

export async function load(event: LoadEvent) {
  const { fetch } = event
  try {
    const res = await fetch(`${process.env.API_BASE}/projects`)
    const data: IindexResponse = await res.json()
    return { resp: data }
  } catch (error) {
    console.log(error);
    return { resp: undefined }
  }

}