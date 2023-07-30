var todayDate = dayjs();
var timeBlock = $('.time-block');
var currentHour = parseInt(dayjs().format('H'));

$(document).ready(function () {
  $('#currentDay').text(todayDate.format('MMM D, YYYY'));


  $('.saveBtn').on('click', function () {
    var hour = $(this).parent().attr('id');
    var textArea = $(this).siblings('textarea').val();
    localStorage.setItem(hour, textArea);
  });

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
