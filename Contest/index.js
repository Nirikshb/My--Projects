const arr1=[1,2,3,4];

const initial=0;

const sum = arr1.reduce((accumulator, currentValue) =>
accumulator + currentValue, initial);

console.log(sum);



//market_cap_rank
        
const marketRankNode = document.createElement("td")
const rankText = document.createTextNode(info[i].market_cap_rank);
marketRankNode.appendChild(rankText);
node.appendChild(marketRankNode);

//id
      
const tdNode = document.createElement("tr")
const textnode = document.createTextNode(info[i].id);
tdNode.appendChild(textnode);
tdNode.appendChild(textnode);
node.appendChild(tdNode);

       
        //current price
        
        const volumeNode = document.createElement("td")
        const volumeText = document.createTextNode(info[i].total_volume);
        volumeNode.appendChild(volumeText);
        node.appendChild(volumeNode);


