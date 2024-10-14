

const Cookies = require('js-cookie') 

export default function(context){
    // console.log(Object.keys(context.req.headers))
    if(process.server){
        // console.log(context.req.headers.cookie)
        if(context.req.headers.cookie){
            const stringCookies = context.req.headers.cookie
            // const token = token1[1].split(/;/g)
        // const cookserver = JSON.parse(context.req.headers.cookie)
        // console.log(token1)
            // context.store.state.cookies.token = token[0]
            // context.store.state.cookies.username = token1[2]
        // console.log(context.store.state.cookies.token)
            const tokenMatch = stringCookies.match(/token=([^;]*)/);
            const usernameMatch = stringCookies.match(/username=([^;]*)/);
            // console.log(context.req.headers["cookie"])
            if (tokenMatch && tokenMatch[1] && usernameMatch && usernameMatch[1]) {
                const token = tokenMatch[1];
                context.store.state.cookies.token = token
                const username = usernameMatch[1];
                context.store.state.cookies.username = username
                // context.req.headers.authorization = 'Bearer ' + token;
                // console.log(context.req.headers);
            } else {
                // console.log('Token không tồn tại trong cookie.');
            }

        }
        
    }
    
}