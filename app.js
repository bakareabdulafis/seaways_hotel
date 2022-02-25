const hamburger = document.querySelector(".hamburger");
const sideNav = document.querySelector(".side-nav");
const checkIn = document.getElementById("check-in");
const checkOut = document.getElementById("check-out");
const guest = document.getElementById("guests");
const roomType = document.getElementById("room-type");
const bookNow = document.querySelector(".book-now");
const checkInDate = document.querySelector(".check-in-date");
const checkOutDate = document.querySelector(".check-out-date");
const checkInMonth = document.querySelector(".check-in-month");
const checkOutMonth = document.querySelector(".check-out-month");
const numberOfGuest = document.querySelector(".number-of-guest");
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

hamburger.addEventListener('click',(e)=>{
    e.preventDefault();

    sideNav.classList.toggle('open');
    hamburger.classList.toggle('open');

})

const today = new Date();
if(today.getMonth()<9){
    const month = "0" + (today.getMonth()+1);
    const date = `${today.getFullYear()}-${month}-${today.getDate()}`
    if(checkIn){
        checkIn.min = date;
    }
    if(checkOut){
        checkOut.min = date;
    }   
}else{
    const month = today.getMonth()+1;
    const date = `${today.getFullYear()}-${month}-${today.getDate()}`
    if(checkIn){
        checkIn.min = date;
    }
    if(checkOut){
        checkOut.min = date;
    }  
}


// checkIn.addEventListener('input',(e)=>{
//     e.preventDefault();

//     checkInDate.innerText= checkIn.value.substr(8,2);
//     checkInMonth.innerText = months[parseInt(checkIn.value.substr(5,2))-1];

//     if(!checkIn.value){
//         checkInDate.innerText = today.getDate()
//         checkInMonth.innerText = months[today.getMonth()]
//     }

//     if(checkIn.value){
//         checkOut.min = checkIn.value;
//     }
// })

// checkOut.addEventListener('input',(e)=>{
//     e.preventDefault();

//     checkOutDate.innerText= checkOut.value.substr(8,2);
//     checkOutMonth.innerText = months[parseInt(checkOut.value.substr(5,2))-1];

//     if(!checkOut.value){
//         checkOutDate.innerText = today.getDate()
//         checkOutMonth.innerText = months[today.getMonth()]
//     }
//     if(!checkIn.value){
//         checkIn.max = checkOut.value;
//     }
// })

// roomType.addEventListener('input',(e)=>{
//     e.preventDefault();

//     if(roomType.value==="triple"){
//         guest.max = 8;
//     }else if(roomType.value==="double"){
//         guest.max = 4;
//     }else{
//         guest.max = 2;
//     }
// });

// guest.addEventListener('input',(e)=>{
//     e.preventDefault();

//     numberOfGuest.innerText = guest.value;
    
//     if(guest.value.length<2){
//         numberOfGuest.innerText = "0" + guest.value;
//     }

// });


const checkType = (e) => {  
    if(roomType.value==="single"){
        window.location.href = "room_details (Single room).html"
        console.log(3);
        console.log(checkIn.value);
    }else if(roomType.value==="double"){
        window.location.href = "room_details (Double room).html"
    }else if(roomType.value==="triple"){
        window.location.href = "room_details (Triple room).html"
    }else{
        swal("Error!","Please select a room type!","error");
    }
    if(checkIn){
        availabilityCheckIn.value=checkIn.value;
    }
    if(checkOut){
        availabilityCheckOut.value=checkOut.value;
    }
}

// bookNow.addEventListener('click',(e)=>{
//     e.preventDefault();

//     checkType();
// })