import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

const configuratiion = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuratiion)

export async function POST(req: Request) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { messages } = body

        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        if (!configuratiion.apiKey) {
            return new NextResponse('OpenAI API Key not Configured', { status: 500 })
        }

        if (!messages) {
            return new NextResponse('Messages are Required', { status: 400 })
        }
    } catch (error) {
        console.log('[CONVERSATION_ERROR]', error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}