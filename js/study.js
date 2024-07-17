




fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false')
.then((response)=> response.json())
.then((json)=> {
     flexingData(json)
})





function flexingData(data) {
     console.log(data)
     var coinNumber = 0
     document.querySelectorAll('.chart').forEach(chart=>{
          chart.children[0].innerHTML = `${data[coinNumber].market_cap_rank}`
          chart.children[1].innerHTML = `<img src=${data[coinNumber].image} alt="Logo" class="logo">`
          chart.children[2].innerHTML = `${data[coinNumber].name}`
          chart.children[3].innerHTML = `<span class="text-success fw-bolder">$</span> ${data[coinNumber].current_price}`
          chart.children[4].className = 'fw-bolder'
          if(Number(data[coinNumber].price_change_percentage_24h)>0) {
               chart.children[4].innerHTML = `+${data[coinNumber].price_change_percentage_24h}%`
               chart.children[4].classList.add('text-success')
          }else if(Number(data[coinNumber].price_change_percentage_24h)<0) {
               chart.children[4].innerHTML = `${data[coinNumber].price_change_percentage_24h}%`
               chart.children[4].classList.add('text-danger')
          }
          coinNumber++
     })
}




document.getElementById('search').oninput = ()=> {
     var searchInput = document.getElementById('search').value.toLowerCase()
     document.querySelectorAll('.chart').forEach(chart=>{
          if(searchInput === ""){
               chart.style.display = 'table-row'
               if(chart.classList.contains('table-light')) chart.classList.replace('table-light','table-dark')
          }else if(!chart.children[1].innerHTML.toLowerCase().includes(searchInput)
          && searchInput !== ""){
               chart.style.display = 'none'
          }else {
               if(chart.classList.contains('table-dark')){ 
                    chart.classList.replace('table-dark','table-light')
               }else{
                    chart.classList.add('table-light')
               }
               chart.style.display = 'table-row'
          }
     })
}

document.querySelectorAll('.chart').forEach((chart)=>{
     chart.addEventListener('click',()=>{
          window.location.href = 'coin_info.html'
          window.localStorage.setItem('coin-number', Number(chart.children[0].innerHTML)-1)
     })
});

document.getElementById('search-button').addEventListener('click',()=>{
     var searchInput = document.getElementById('search').value.toLowerCase()
     document.querySelectorAll('.chart').forEach(chart=>{
          if(searchInput === ""){
               chart.style.display = 'table-row'
               if(chart.classList.contains('table-light')) chart.classList.replace('table-light','table-dark')
          }else if(!chart.children[1].innerHTML.toLowerCase().includes(searchInput)
          && searchInput !== ""){
               chart.style.display = 'none'
          }else {
               if(chart.classList.contains('table-dark')){ 
                    chart.classList.replace('table-dark','table-light')
               }else{
                    chart.classList.add('table-light')
               }
               chart.style.display = 'table-row'
          }
     })
})





























// else if(searchInput === "") {
//      flexingData(api)
// }

// var arr = []
// chart.children[1].innerHTML.split("").map(letter=>{
//      if(searchInput.split('').includes(letter.toLowerCase())){
//           arr.push(`<span style='font-weight: 700; font-size: 20px;'>${letter}</span>`)
//      }else {
//           arr.push(`<span>${letter}</span>`)
//      }
// })
// chart.children[1].innerHTML = arr.join('')



// function readPosts() {
//      let request = new XMLHttpRequest()
//      request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
//      request.responseType = 'json'
//      request.send()
//      request.onload = function() {
//      var div = document.createElement('div');
//      for(post of request.response){
//           div.innerHTML += `<br><br><h3>${post.id}</h3><h4>${post.userId}</h4>
//           <h4>${post.title}</h4><span>${post.body}</span>`
//      }
//      div.className = 'container'
//      document.body.appendChild(div)
//      }
// }

// function createNewPost() {
//      fetch('https://jsonplaceholder.typicode.com/posts', {
//           method: 'POST',
//           body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//           }),
//           headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         })  
//         .then((response) => response.json())
//         .then((json) => console.log(json));

// }

