// getting classes 
let container = document.getElementById('container')
//  fetching data from api using .then & async, await

const table = document.getElementById('table')

async function getInfo() {
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
fetch(url) 
.then((res) => {
    return res.json();
})
    .then((info) => {
        console.log(info);
        for(var i =0; i< info.length; i++){
        const node = document.createElement("tr")
        const img = document.createElement("img")
        img.src = info[i].image;
        node.appendChild(img);

        //2.name
        const nameNode = document.createElement("td")
        const nameText = document.createTextNode(info[i].name);
        nameNode.appendChild(nameText);
        node.appendChild(nameNode);

        //3. symbol
         //for symbol
           const symbolNode = document.createElement("td")
           const symbolText = document.createTextNode(info[i].symbol);
           symbolNode.appendChild(symbolText);
           node.appendChild(symbolNode);

     
        //4.current_price
         //current price
        
         const priceNode = document.createElement("td")
         const priceText = document.createTextNode(info[i].current_price);
         priceNode.appendChild(priceText);
         node.appendChild(priceNode); 

        //5.market_cap
       //market_cap
       
       const marketNode = document.createElement("td")
        const marketText = document.createTextNode(info[i].market_cap);
        marketNode.appendChild(marketText);
        node.appendChild(marketNode);
       
        //market cap
        
        const marketCapNode = document.createElement("td")
        const capChangeText = document.createTextNode(info[i].market_cap_change_percentage_24h);
        marketCapNode.appendChild(capChangeText);
        node.appendChild(marketCapNode);
        
    
        table.appendChild(node);
        }
        // console.log(array)
    })
}
getInfo();


// function toScreen() {
//     var array = [];
    
//     getInfo(array);
//     // console.log(array);    
    
//     const table = document.getElementById('table')
//     array.forEach((el) => {
//         const node = document.createElement("th")
//         const tdNode = document.createElement("tr")
//         const textnode = document.createTextNode(info[i].id);
//         // console.log(el);

//         tdNode.appendChild(textnode);
//         node.appendChild(tdNode);
//         table.appendChild(node);

//     });

// }

// toScreen();



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