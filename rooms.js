const availabilityCheckIn = document.querySelector(".availability-check-in");
const availabilityCheckOut = document.querySelector(".availability-check-out");

availabilityCheckIn.addEventListener('input',(e)=>{
    e.preventDefault();

    if(availabilityCheckIn.value){
        availabilityCheckOut.min = availabilityCheckIn.value;
    }
})

availabilityCheckOut.addEventListener('input',(e)=>{
    e.preventDefault();

    if(availabilityCheckOut.value){
        availabilityCheckIn.max = availabilityCheckOut.value;
    }
})
