import { CountUp } from "./countup.js/dist/countUp.js";


const options = {
    startVal: 0,
    useEasing: true, 
    useGrouping: true, 
    separator: ',', 
    decimal: '.', 
};

const countParent = document.querySelectorAll(".fact-texts");

const startCount = () =>{
    countParent.forEach((item)=>{
        const data = item.querySelector('h2');
        const countValue = data.getAttribute('data-value');
    
        const countUp = new CountUp(data,countValue,options);
    
        countUp.reset();
    
        if(!countUp.error){
            countUp.start();
        }
    })
}


ScrollReveal().reveal('.fact-texts',{delay:200, beforeReveal:startCount, reset:true});