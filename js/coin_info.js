fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false')
.then((response)=> response.json())
.then((json)=> flexingData(json))




function flexingData(data){
    console.log(data)
    document.title = `${data[Number(localStorage.getItem('coin-number'))].name} Coin Info`
    var dataNum = 0
    var dataProps = ["market_cap", "current_price", "high_24h", "low_24h", "price_change_24h", "price_change_percentage_24h", "total_supply", "total_volume"]
    document.getElementById('coin-logo').src = data[Number(localStorage.getItem('coin-number'))].image
    document.querySelectorAll('.chart-info').forEach(chartInfo=>{
        if(data[Number(localStorage.getItem('coin-number'))][dataProps[dataNum]]<0) {
            chartInfo.className='text-danger fw-bolder'
            chartInfo.innerHTML = `${data[Number(localStorage.getItem('coin-number'))][dataProps[dataNum]]}`
        }else if(data[Number(localStorage.getItem('coin-number'))][dataProps[dataNum]]>0){
            chartInfo.className='text-success fw-bolder'
            chartInfo.innerHTML = `+${data[Number(localStorage.getItem('coin-number'))][dataProps[dataNum]]}`
        }
        dataNum++
    })
}



