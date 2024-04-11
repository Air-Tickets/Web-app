// fetch('http://192.168.1.105:8080/api/flight', {mode: 'no-cors'})
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

let div = document.getElementById("table");
let array = [];
let array1 = [];
let array2 = [];
let array3 = ["Madrid", "Warsaw", "Lisbon", "Gdansk", "Copenhagen", "Warsaw"];
let temperatures = [];


async function logFlights() {
    const response = await fetch("http://172.31.111.135:8080/api/flight");
    const flights = await response.json();

    Object.values(flights).forEach(element => {
        array.push(element["miejsce_startowe"])
        array1.push(element["miejsce_docelowe"])
        array2.push(element["data"])
    });
    console.log(array1);
    for(let i = 0; i<6; i++)
    {
        const response1 = await fetch("https://api.weatherapi.com/v1/current.json?key=94d4d487f93f467ebf594259241403&q="+array3[i]);
        const weather = await response1.json();
        console.log(weather);
        temperatures.push(weather.current["temp_c"])
    }

    console.log(array);
    console.log(temperatures);
    
    idk = ["Miejsce startowe", "Miejsce docelowe", "Data", "Temperatura"];

    for(let i = 0; i < 6; i++)
    {
        idk.push(array[i]);
        idk.push(array1[i]);
        idk.push(array2[i]);
        idk.push(temperatures[i]);
    }

    console.log(idk);
    // const jsonToString = JSON.stringify(flights);
    // console.log('jsonToString', jsonToString);

    // paragr.innerHTML = `
    // Samolot startuje z ${flights.miejsce_startowe} i ląduje w
    // ${JSON.stringify(flights.miejsce_docelowe)}
    // `;

    // paragr.innerText = array[0];
    // div.innerHTML += ("<table><tr><th>Miasto</th><th>Odlot</th><th>Przylot</th><th>Temperatura</th><th>Miasto</th><th>Miasto</th></tr><tr><tr><th>gagfdasg</th></tr>");
    // array.forEach(element => {
    //     div.innerHTML += ("<th>"+element+"</th>");
    // })
    // div.innerHTML += ("</table>");
    function tableCreate() {

        let myTableDiv = document.getElementById("table");

        let table = document.createElement('TABLE');

        let tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);

        let k = 0;
        for (let i = 0; i < idk.length/4; i++) {
            let tr = document.createElement('TR');
            tableBody.appendChild(tr);

            for (let j = 0; j < 4; j++) {
                let td = document.createElement('TD');
                td.appendChild(document.createTextNode(idk[k]));
                tr.appendChild(td);
                k+=1;
            }
        }
        myTableDiv.appendChild(table);
    }
    tableCreate();
        // const body = document.body;
        // tbl = document.createElement('table');
        // const tr = tbl.insertRow();
        // for(let i = 0; i<idk.length; i++)
        // {
        //     const td = tr.insertCell();
        //     td.appendChild(document.createTextNode(idk[i]));
        //     body.appendChild(tbl);
        // }
    
        // idk.forEach(element => {
        //     const td = tr.insertCell();
        //     td.appendChild(document.createTextNode(element));
        //     })
        //     body.appendChild(tbl);
        // }   
}

logFlights();



// fetch('http://192.168.1.105:8080/api/flight')
//   .then(res => res.json())
//   .then(json => {
//     console.log(json)
//     // you need to get mountains from json
//     // if json is in the shape that is needed then leave as it is 
//     const mountains = json
//     let table = document.querySelector("table");
//     let data = Object.keys(mountains[0]);
//     generateTable(table, mountains); // generate the table first
//     generateTableHead(table, data); // then the head
//   })

// https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// https://www.freecodecamp.org/news/how-to-fetch-data-from-an-api-using-the-fetch-api-in-javascript