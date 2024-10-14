const axios = require('axios')

export default async function (req, res, next) {
    try {
        // Kiểm tra nếu req.query không xác định

        // Lấy các query từ URL

        // const sotap = req.query.sotap
        // console.log(sotap)
        // Kiểm tra nếu thiếu query
        // Gọi API khác sử dụng axios
        
        const test = req.url
        console.log(">>>" + test)
        // const apiUrl = `http://127.0.0.1:4000/g?idunique=98538&idfilm=4931`
        const apiUrl = `http://127.0.0.1:4000/g?idunique=98267&idfilm=4265`
        const response = await axios.get(apiUrl, { responseType: 'stream' });
        
        // Thiết lập header cho response
        // res.setHeader('Content-Disposition', 'attachment; filename="file.m3u8"');
        // res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
       
        
        // Truyền dữ liệu từ response của API đến response của client
        response.data.pipe(res);
        
    } catch (error) {
        // Xử lý lỗi và trả về lỗi
        console.error(error);
        res.end()
    };
}