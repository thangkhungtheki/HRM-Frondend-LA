// này thường chạy khi load trang là ở phía server
// const Cookies = require('js-cookie') 
export default function ({ store, redirect}) {
    // req.isAuth = false
    // If the user is not authenticated

    console.log('>>> middware auth.js')
    
    if ( store.state.cookies.token )   {
      
      // const path = route?.path
      // Cookies.set('pathbefore', path , {expires: 7})
      // req.pathBefore = path
      // console.log(path)
      //await store.commit('cookies/SET_BEFORCE_PATH', path)
      
      // req.isAuth = true
      
    } else {
        redirect('/home')
    }
  // //  redirect('/login')
}
