import { NextApiRequest, NextApiResponse } from 'next'
import { unsetAuthCookies } from 'next-firebase-auth'
import { initAuth } from '../../services/firebase'

initAuth()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await unsetAuthCookies(req, res)
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error.' })
  }

  return res.status(200).json({ success: true })
};
