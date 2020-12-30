
function greeting(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currentDay = daysOfTheWeek[date.getDay()]; 
  return `Hello World! Happy ${currentDay}!`;
}
