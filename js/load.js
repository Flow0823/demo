fetch('../data/news.json')
    .then(response => {
        if (!response.ok) throw new Error('HTTP错误: ' + response.status);
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('news-container');
        data.forEach(item => {
            container.innerHTML += `
                <div class="news-item">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error('加载错误:', error);
        document.getElementById('news-container').innerHTML = 
            '<p style="color:red">加载失败: ' + error.message + '</p>';
    });
