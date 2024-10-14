const axios = require('axios')
export default async function() {
     const URL = process.env.BASE_URL + '/express/getJSON'
    //let result = axios('http://127.0.0.1:3000/express/getJSON?id=123456&pass=abcdef')
    let result = await axios.get(URL,{
        params: {
            id: '123456',
            pass:'abcdef'
        }
    })
    console.log('[Middlware Router call express] ',result.data)
    console.log('[Middleware Router]')
}