const axios = require('axios')
export default async function (req, res, next,) {
    // Đơn giản là gửi lại một JSON response
    const response = await axios.post('http://127.0.0.1:4000/jwt', {
        username: 'dtan',
        password: 'qeqeqeqe'
        })
    const data = JSON.stringify(response.data)
    // req.store.token = data.token,
    console.log(data)
    
    res.end()
  }