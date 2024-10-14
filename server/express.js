const bodyParser = require('body-parser')
const app = require('express')()
const axios = require('axios')

app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.get('/getJSON', (req, res) => {
  console.log('[Server Middleware express]')
  let a = req.query.id
  let b  = req.query.pass
  // console.log('[Server Middleware params query] ',a)
  // console.log('[Server Middleware params query] ',b)
  return res.send('test middleware express')
  
})
app.post('/dangnhap', async(req, res) => {
  console.log('[Server Middleware express] >>> đăng nhập')
  let id = req.body.username 
  let pass  = req.body.password 
  try {
    const result = await axios.post(process.env.BACKEND_URL + '/jwt',{
    username: id,
    password: pass
  })
  if(result.data){
    //console.log(result.data)
    return res.json(result.data)
  }else{
    return res.json({token: null})
  }
  
  } catch (error) {
    return res.json({token: null})
  }
  
  
})
module.exports = app