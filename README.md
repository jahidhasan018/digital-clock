# digital-clock

Demo: https://codepen.io/jahidhasan018/full/BaqazgQ

## How i did it?
- First in the html document i have added a div with id of clock to display the digital clock.
- Then i added the script tag and gets the element in javascript after that i have added javascript setInterval function and assigned time in mili-second so that it runs every second.
- And than a set a callback function for setInterval and in that function I have initilize javascript new Date() object to get hours, minutes and seconds with date object method.
- Then i have to format the hours because it gives 24 hours format instead of that i would like to have 12 hours format so i checked that if the hours is grater than 12 then remove the 12 from that other wise i will show the hours.
- Then i have formatted the AM,PM based on the current time if it is less than 12 that means it's AM otherwise it's PM.
- Then i added another function which add 0 to before hours, minutes and seconds when it's less than 10
- And Finaly i display the formatted times in the clock div using Template Literals
