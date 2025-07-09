// 在 js/load.js 中使用相对路径
fetch('data/news.json')  // 无需写完整路径
   .then(response => response.json())
   .then(data => console.log(data))
