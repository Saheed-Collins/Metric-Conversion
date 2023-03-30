let Metric = document.getElementById ('Metric')
let Result = document.getElementById('Result')

let Kilometer = document.getElementById ('Kilometer')
let Mile = document.getElementById ('Mile')
let Inches = document.getElementById ('Inches')
let Centimeters = document.getElementById ('Centimeters')
let Pounds = document.getElementById ('Pounds')
let Kg = document.getElementById ('Kg')

let wipe =''

let converter = document.getElementById ('converter')


function convert() {
    if (converter.value == Kilometer.value) {
        Result.value = Number (Metric.value) * 0.621
    }
    
    else if (converter.value == Mile.value) {
        Result.value = Number (Metric.value) * 1.606
    }
    else if (converter.value == Inches.value) {
        Result.value = Number (Metric.value) * 2.54
    }
    else if (converter.value == Centimeters.value) {
        Result.value = Number (Metric.value) * 0.394
    }
    else if (converter.value == Pounds.value) {
        Result.value = Number (Metric.value) * 0.454  
    }
    
    else if (converter.value == Kg.value) {
        Result.value = Number (Metric.value) * 2.25
    }
    
}

function next() {
    
    Metric.value='';
    Result.value='';
}