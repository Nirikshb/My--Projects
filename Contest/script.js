
// getting classes 
let container = document.getElementById('#container')
//  fetching data from api using .then & async, await

const table = document.getElementById('table')
async function getInfo(array) {
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

fetch(url) 
.then((res) => {
    return res.json();
})
    .then((info) => {
        for(var i =0; i< info.length; i++){
        array.push(info[i])
        const node = document.createElement("td")
        const tdNode = document.createElement("tr")
        const textnode = document.createTextNode(info[i].symbol);
        // console.log(info[i].id);

        tdNode.appendChild(textnode);
        node.appendChild(tdNode);
        table.appendChild(node);
        }
        // console.log(array)
    })
}

function toScreen() {
    var array = [];
    
    getInfo(array);
    // console.log(array);    
    
    const table = document.getElementById('table')
    array.forEach((el) => {
        const node = document.createElement("th")
        const tdNode = document.createElement("tr")
        const textnode = document.createTextNode(info[i].id);
        // console.log(el);

        tdNode.appendChild(textnode);
        node.appendChild(tdNode);
        table.appendChild(node);

    });

}

toScreen();



    // const newUser = {
        
    //     //need id, symbol, price change, price change percent
    //     name :`${user.id} ${user.symbol} ${user.name}`
    //  };
   

    // addData(newUser);
    // }

    // function addData(obj){
    //     data.push(obj)
    
    //     updateDom();
      
    // }

    //into the webpage ==copied
    // function updateDom(providedData = data){
    //  main.innerHtml = "<h4>Name</h3><h4>Short</h3><h4>Price</h3><h4>Value</h3><h4>% up or down</h3><h4>Market Cap</h3>";
   
    //  data.forEach((item) => {
    //      const element = document.createElement('div');
    //      element.classList.add('item');
    //      element.innerHTML = `<h4> ${item.id}</h4> ${item.symbol} ${item.name}`;
    //  });    
    // }