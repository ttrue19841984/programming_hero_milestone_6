
let count = 0;
const handleCategory = async () => {
    
  const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    // console.log(data);
    const tabContainer = document.getElementById('tab-container');
    const trimedData = data.data.news_category.slice(0, 3);
    trimedData.forEach((category) => {
        count = count + 1;
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${count}  ${category.category_name}  </a>
        `
        tabContainer.appendChild(div);
    })

    console.log(data.data.news_category)
}


const handleLoadNews = async (categoryId) =>{
    // console.log(categoryId)
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();
    // console.log(data.data)
    const cardContainer = document.getElementById('card-container');
    data.data?.forEach((news) =>{
        console.log(news)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="${news?.image_url}" /></figure>
            <div class="card-body">
              <h2 class="card-title">
                ${news.title}
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div> 
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        `
        cardContainer.appendChild(div)
    })
}


handleCategory()