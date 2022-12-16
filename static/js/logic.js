// This is our prof of concept...
// it means that plotly is working

// Plotly.newPlot("my_plot",[
//     {x:[1,2,3], y:[1,2,3]}
// ])


// TODO: Build a data array of two traces, with x-values [1,2,3,4,5]
// and y-values at random
let x_values = [1,2,3,4,5]

// basic for-loop
// let y_values = []
// for(let i=0; i<x_values.length; i++){
//     y_values.push(Math.floor(Math.random()*10))
// }

// console.log(y_values)

// let y_values = x_values.map(function(){
//     return Math.floor(Math.random()*10)
// })

// let data = [
//     {"name":"jose","profesion":"instructor"},
//     {"name":"arantxa","profesion":"student"},
//     {"name":"martin","profesion":"TA"},
// ]
// data.map(x=>x["profesion"]) // ["intructor","student","TA"]

let y_values = x_values.map(()=>Math.floor(Math.random()*10))
let y_values2 = x_values.map(()=>Math.floor(Math.random()*10))

let trace1 = {
    x: x_values,
    y: y_values,
    type: "scatter"
}

let trace2 = {
    x: x_values,
    y: y_values2,
    type: "scatter"
}

let data_array = [trace1, trace2]
Plotly.newPlot("my_plot",data_array)

// Add a listener (aka Event Handler)
// d3.select("#setDataset").on("change", function(){
//     console.log(d3.select("#setDataset").property("value"))
// })

let x2_values = [1,2,3,4,5]
let y_data1 = [1,2,4,8,16]
let y_data2 = [1,10,100,1000,10000]

Plotly.newPlot("my_plot2", [
    {x:x2_values, y:y_data1}
])

function updatePlot(){
    let user_dataset = d3.select("#setDataset").property("value")

    let new_y_data = y_data1

    if(user_dataset==="data2"){
        new_y_data = y_data2
    }
    let array_y = [new_y_data]
    Plotly.restyle("my_plot2", "y", array_y)
}

d3.select("#setDataset").on("change", updatePlot)

console.log("Step 1")

const url = "https://api.spacexdata.com/v2/launchpads"

// Javascript promise...
d3.json(url).then(data_handler)

function data_handler(data){
    console.log(data)
}


console.log("Step 3")

