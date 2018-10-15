let newsArticles = document.getElementById("newsArticles")


for (let index = 0; index < news.articles.length; index++) {

    let item = news.articles[index]

    let newsItem = `
    <li class ="newsItem">
    <img src="${item.urlToImage}"/>  
    <div class="itemDescription">
    <h2>${item.title} </h2>
    <div class="author"> 
    <h3>${item.author}</h3> 
    <h4>${item.publishedAt}</h4>
    </div>
    <div class="description">
        ${item.description}
    </div>
    <br>
    <div class = "link">
    <a href = "${item.url}">Link to article</a>
    </div>
    </div>
    <br>
    <br>
  </li>
  `
    function addNewsItems() {

        newsArticles.insertAdjacentHTML('beforeend', newsItem)
    }

    addNewsItems()
}

