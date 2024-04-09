const DOMAIN = 'http://domain-api.com'

export const _postMessage = async (data) => {
    const url = '/tenants/dummy/query'
    const response = await fetch(DOMAIN + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer test',
        },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    const responseData = await response.json()

    return responseData.data
}
