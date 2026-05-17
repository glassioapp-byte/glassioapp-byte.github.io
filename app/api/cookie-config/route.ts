import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CONFIG_PATH = path.join(process.cwd(), 'cookie-config.json')

const DEFAULT_CONFIG = {
  bannerEnabled: true,
  bannerText:
    'We use cookies to enhance your experience. Some cookies are essential for the site to work properly. Others help us understand how visitors use our site and may be used for analytics, marketing, or personalization.',
  privacyPolicyUrl: '/privacy.html',
}

function readConfig() {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, 'utf-8')
    return { ...DEFAULT_CONFIG, ...JSON.parse(raw) }
  } catch {
    return { ...DEFAULT_CONFIG }
  }
}

export async function GET() {
  const config = readConfig()
  return NextResponse.json(config)
}

export async function PATCH(req: NextRequest) {
  const adminSecret = process.env.ADMIN_SECRET ?? 'glassio-admin-2024'
  const headerSecret = req.headers.get('x-admin-secret')

  if (headerSecret !== adminSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const current = readConfig()
  const updated = { ...current, ...body }

  try {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(updated, null, 2), 'utf-8')
  } catch {
    return NextResponse.json({ error: 'Failed to write config' }, { status: 500 })
  }

  return NextResponse.json(updated)
}
