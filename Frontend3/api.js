const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1f94cdec6mshaefbef7657cd262p1906b5jsn84306654774f',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};


fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
    .then((apiData) => {
        return apiData.json()})
	.then((data)=> {
        let table=document.getElementById('table')
        for (let i = 0; i < data.countries_stat.length; i++) {
            console.log(data)
            let obj=data.countries_stat[i]
            let row=document.createElement('tr')
            let number=document.createElement('td')
            let country=document.createElement('td')
            let cases=document.createElement('td')
            let deaths=document.createElement('td')
            let recovered=document.createElement('td')

            number.innerHTML=`${i+1}`
            country.innerHTML=obj.country_name
            cases.innerHTML=obj.cases
            deaths.innerHTML=obj.deaths
            recovered.innerHTML=obj.total_recovered

            row.appendChild(number)
            row.appendChild(country)
            row.appendChild(cases)
            row.appendChild(deaths)
            row.appendChild(recovered)

            table.appendChild(row)
            
        }
    })  
	.catch((error)=>{
        console.log(`${error}`)
    })
    // var mainContainer = document.getElementById("country");
       
        // console.log(`${data.countries_stat[2].country_name}`)
        // for (var i = 0; i < 10; i++) {
        //    data.countries_stat.map((values)=>{
        //     tableData+=`
        //     <tr>
        //     <td>${i};</td>
        //     <td>${values[i].country_name};</td>
        //     <td>${values[i].cases};</td>
        //     <td>${values[i].deaths};</td>
           
        //     </tr>`
        //    })
        // }
        //     document.getElementById('table').innerHTML=tableData
     
            
           
        // )
        
            // div.innerHTML = 'Country: ' + data.countries_stat[1].country_name + ' ' ;
            // mainContainer.appendChild(div)
