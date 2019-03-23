export const handler = async (event: any) => {
    const subject = event.queryStringParameters.name || 'Word'
    return {
        statusCode: 200,
        body: `Hello ${subject}!`
    }
}