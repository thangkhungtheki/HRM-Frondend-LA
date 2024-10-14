// này thường chạy khi load trang là ở phía server
// const Cookies = require('js-cookie') 
export default async function ({ store, redirect, next}) {
    // If the user is not authenticated
    console.log('>>> middware authhome.js')
    console.log(store.state.cookies.token)
    if ( store.state.cookies.token )   {
      
      // const path = route?.path
      // Cookies.set('pathbefore', path , {expires: 7})
      // req.pathBefore = path
      // console.log(path)
      //await store.commit('cookies/SET_BEFORCE_PATH', path)
      next()
      
    }else{
        redirect('/home')
    }
    
    
  // //  redirect('/login')
}