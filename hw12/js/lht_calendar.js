"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Tutorial Case

   Author: Jerome Adams
   Date:  11/27/2022

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

var thisDay = new Date();
var dayEvent = new Array();
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

function createCalendar(calDate) {
    var calendarHTML = "<table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}

function calCaption(calDate) {
    var monthName = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    var thisMonth = calDate.getMonth();

    var thisYear = calDate.getFullYear();

    return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

function calWeekdayRow() {
   var dayName = ["SUN", "MON","TUE", "WED","THU","FRI","SAT"];

   var rowHTML = "<tr>";

   for (var i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='calendar_weekdays'>" + dayName[1] + "</th>";
   }
   rowHTML += "</tr>";
   return rowHTML;
}
function daysInMonth(calDate) {
   var dayCount= [31,28,31,30,31,30,31,31,30,31,30,31];

   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   if ((thisYear % 4== 0) || (thisYear % 400 == 0)){
      dayCount[1] = 29;
   }

   return dayCount[thisMonth];
}

function calDays(calDate) {
   //
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay();
   //
   var htmlCode = "<tr>";
   for (var i = 0; i < weekDay; i++) {
      htmlCode += "<td></td>";
   }
   //
   var totalDays = daysInMonth(calDate);

   var highlightDay = calDate.getDate();
   for (var i=1; i<= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();
      if (weekDay == 0) htmlCode += "<tr>";
      if (i == highlightDay) {
         htmlCode += "<td class='calendar_dates' id = 'calendar_today'>"
         + i + dayEvent[i] + "</td>";
      } else {
         htmlCode += "<td class= 'calendar_dates'>" + i + dayEvent[i] +"</td>";
      }
      if (weekDay == 6) htmlCode += "</tr>";
   }
   return htmlCode;
}


dayEvent[1] = "";
dayEvent[2] = "<br /><a href='#'>Classic Cinema: Wings</a><br />7 pm <br />$5";
dayEvent[3] = "<br /><a href='#'>The Future is Prologue</a><br />8 pm<br />$18/$24/$36";
dayEvent[4] = "<br /><a href='#'>American Favorites</a><br />7:30 pm<br />$24/$36/$48";
dayEvent[5] = "<br /><a href='#'>Classics Brunch</a><br />11 am<br />$12";
dayEvent[6] = "<br /><a href='#'>LHT Jazz Band</a><br />7 pm<br />$24";
dayEvent[7] = "";


dayEvent[8] = "<br /><a href='#'>Civic Forum</a><br />7 pm<br />free";
dayEvent[9] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[10] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[11] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[12] = "<br /><a href='#'>Classics Brunch</a><br />11 am<br />$12";
dayEvent[13] = "";
dayEvent[14] = "<br /><a href='#'>Hacking your Dreams</a><br />7 pm<br />free";

dayEvent[15] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[16] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[17] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[18] = "<br /><a href='#'>Hamilton</a><br />2 pm<br />$48/$64/$88";
dayEvent[19] = "<br /><a href='#'>Classics Brunch</a><br />11 am<br />$12";
dayEvent[20] = "<br /><a href='#'>What Einstein Got Wrong</a><br />7 pm <br />free";
dayEvent[21] = "";

dayEvent[22] = "<br /><a href='#'>Governor's Banquet</a><br />6 pm <br />by invitation";
dayEvent[23] = "<br /><a href='#'>Classic Cinema: City Lights</a><br />7 pm<br />$5";
dayEvent[24] = "<br /><a href='#'>Stardust Memories</a><br />8 pm<br />$24/$36/$48";
dayEvent[25] = "<br /><a href='#'>Summer Concert</a><br />8 pm<br />$16/$24";
dayEvent[26] = "<br /><a href='#'>Classics Brunch</a><br />11 am<br />$12";
dayEvent[27] = "";
dayEvent[28] = "<br /><a href='#'>Children's Shakespeare</a><br />6 pm<br />free";

dayEvent[29] = "<br /><a href='#'>Kids Fair</a><br />6 pm<br />free";
dayEvent[30] = "<br /><a href='#'>Have Spacesuit, Will Travel</a><br />7:30 pm<br />$22/$36/$48";
