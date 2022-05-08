let news = document.getElementById("news");
let load = document.getElementById("load");
 load.innerHTML += `Loading`;


fetch(
  "https://newsapi.org/v2/everything?q=tesla&from=2022-04-08&sortBy=publishedAt&apiKey=a526b2b49d1849beaf2494b29a24062d"
)
  .then((response) => response.json())
  .then((data) => {
      load.style.display = "none";
    let article = data.articles;
    article.map((el) => {
      console.log(el);
      news.innerHTML += `
        
        <div class="col-12 col-md-6 col-lg-3 mobile-view">
            <div class="card my-2 shadow " style="width: 17rem;">
                <img src=${el.urlToImage} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title text-center">${el.title}</h5>
                <p class="card-text">${el.content}</p>
                <div class="text-end">
                <a href="${el.url}" class="btn btn-primary ">Read More</a>
                <div>
                </div>
            </div>
        </div>
        
        
        `;
    });
  })
  .catch((err) => console.log(err));

  
