let fUnit=document.querySelector('#from')
let tUnit=document.querySelector('#to')
let result=document.querySelector('#output')
let temp=document.querySelector('#temp')
let con=document.querySelector('#convert')
let cl=document.querySelector('#cl')

con.addEventListener('click',()=>{
    switch (fUnit.value) {
        case 'Celsius':
            switch (tUnit.value) {
                case 'Celsius':
                    result.innerText= temp.value
                    break;
                case 'Kelvin':
                    
                    result.innerText= eval(temp.value)+273.15
                
                break;
                case 'Fahrenheit':
                    result.innerText= eval(temp.value)*1.8 +32
                break;
            
               
            }
            
            break;
        case 'Kelvin':
            switch (tUnit.value) {
                case 'Celsius':
                    result.innerText= eval(temp.value) - 273.15
                    break;
                case 'Kelvin':
                    result.innerText=temp.value
                break;
                case 'Fahrenheit':
                    result.innerText= (eval(temp.value)* 1.8) - 459.67
                break;
            
               
            }
        
        break;
        case 'Fahrenheit':
            switch (tUnit.value) {
                case 'Celsius':
                    result.innerText= (eval(temp.value)-32) /1.8
                    break;
                case 'Kelvin':
                    result.innerText= (eval(temp.value)+ 459.67)/ 1.8
                break;
                case 'Fahrenheit':
                    result.innerText=temp.value
                break;
            
               
            }
        
        break;
    
        
    }
})

cl.addEventListener('click',()=>{
    result.innerText=" ";
    temp.value=" ";
})
