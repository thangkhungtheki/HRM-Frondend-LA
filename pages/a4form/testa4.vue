<template>
  <div class="a4-content">
    <h1>Đây là tiêu đề</h1>
    <p>Đây là nội dung của tài liệu. Nội dung này sẽ được in trên trang A4 với kích thước chuẩn và lề như đã thiết lập.</p>
  </div>
</template>

<script>
export default {
  name: 'A4Template'
}
</script>

<style scoped>
@page {
  size: A4;
  margin: 0mm;
}

.a4-content {
  font-family: Arial, sans-serif;
  font-size: medium;
  width: 210mm;
  height: 297mm;
  padding: 20mm;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  margin-top: 0;
}

p {
  text-align: justify;
}
</style>
