import { Configuration, OpenAIApi } from 'openai'

const configuratiion = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuratiion)

export async function POST(req: Request) {
    try {

    } catch (error) {
        console.log('[CONVERSATION_ERROR]', error)
    }
}