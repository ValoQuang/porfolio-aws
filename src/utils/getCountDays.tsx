export function getCountDays() {
    const date1 = new Date("07/01/2022"); 
    const date2 = new Date(); 
      
    // To calculate the time difference of two dates 
    const Difference_In_Time = date2.getTime() - date1.getTime(); 
      
    // To calculate the no. of days between two dates 
    const daysCount = Math.trunc(Difference_In_Time / (1000 * 3600 * 24)); 
  return daysCount;
}
