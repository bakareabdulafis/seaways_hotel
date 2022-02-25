const checkIn = localStorage.getItem('checkIn');

console.log(checkIn);

const availabilityCheckIn = document.getElementById('availability-check-in');

availabilityCheckIn.value = checkIn ? checkIn : '';

availabilityCheckIn.addEventListener('input', (e) => {
  localStorage.removeItem('checkIn');
});
