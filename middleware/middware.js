
export default async function ({ store, redirect, $axios }) {
  const username = store.state.username;
  const password = store.state.password;
  console.log('>>>middleware: user pass ', store.state )
  try {
    // Gửi request đến server backend để kiểm tra thông tin đăng nhập
    const response = await $axios.post('http://192.168.2.134:3000/dangnhap', {
        username: username,
        password: password
    });

    // if (response.status === 200 && response.data.success) {
    if (response.status === 200) {
        console.log(response.data)
      // Nếu thông tin đăng nhập hợp lệ, chuyển hướng đến trang dashboard
      redirect('/user');
    } else {
      // Nếu thông tin đăng nhập không hợp lệ, ở lại trang đăng nhập
      redirect('/login');
    }
  } catch (error) {
    // Xử lý lỗi khi gửi request đến server backend
    console.error('Error:', error);
    redirect('/login');
  }

    console.log('>>> Đây là middleware')
    
}