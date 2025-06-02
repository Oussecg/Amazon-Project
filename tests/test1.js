const date = new Date();
date.setDate(date.getDate() + 10); // Adds 10 days, handles month/year overflow
console.log(date); // Shows the new date