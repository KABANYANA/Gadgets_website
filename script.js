const userContainer=document.getElementById('products')

const getProducts=()=>{
   return fetch('https://dummyjson.com/products?limit=8')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error)
};

const displayProducts = async()=>{
const products = await getProducts();
console.log(products)

products.products.map(item=>{
    console.log(item)
    let div = document.createElement('div')
    let image = document.createElement('img')
    let title = document.createElement('h2')
    let price = document.createElement('p')

    image.src= item.thumbnail;
    title.innerHTML = `${item.category} ${item.title}`
    price.innerHTML = item.price;


    div.appendChild(image)
    div.appendChild(title)
    div.appendChild(price)
    div.setAttribute('key',item.id)
    //div.id='key'
    div.setAttribute('class','product')
    userContainer.appendChild(div)

});
}
displayProducts()