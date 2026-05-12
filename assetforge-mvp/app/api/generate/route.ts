import { NextRequest, NextResponse } from 'next/server'
import { generateAssetPack } from '@/lib/pipeline'
import { AssetRequest } from '@/lib/types'

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AssetRequest

    if (!body.source || body.source.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a URL, transcript, or notes with enough source material.' },
        { status: 400 }
      )
    }

    const result = await generateAssetPack(body)
    return NextResponse.json({ result })
  } catch (error) {
    return NextResponse.json(
      { error: 'Generation failed. Please check the request payload and try again.' },
      { status: 500 }
    )
  }
}
