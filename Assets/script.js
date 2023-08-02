// Variable for today's date to be accessed via dayjs
var todayDate = dayjs();
// Variable targetting time-block class with Jquery 
var timeBlock = $('.time-block');
// Variable for the current time to be parsed via JQuery and formatted in hours
var currentHour = parseInt(dayjs().format('H'));

// Wrapped all code that interacts with the DOM in a call to jQuery
$(document).ready(function () {
    // Added code to display the current date in the header of the page
  $('#currentDay').text(todayDate.format('MMM D, YYYY'));

  // Added a listener for click events on the save button.
  $('.saveBtn').on('click', function () {
    // Created variable for id
    var hour = $(this).parent().attr('id');
    // Created variable  for values of the corresponding textarea
        var textArea = $(this).siblings('textarea').val();
    // Set local storage for both variables
    // Set user input to be saved in localStorage
    localStorage.setItem(hour, textArea);
  });

  // Created function to apply past, present, or future class to each time block by comparing the id to the current hour 
  function loadEvent () {
    var i = 9;
    timeBlock.each(function () {
    $('#hour-' +[i]+ ' .description').val(localStorage.getItem('hour-' +[i]));
    if (currentHour === i) {
      $(this).addClass('present');
    }
    else if (currentHour > i) {
      $(this).addClass('past');
    }
    else {
      $(this).addClass('future');
    }
    i++;
  })
  }
  
  loadEvent();
});
