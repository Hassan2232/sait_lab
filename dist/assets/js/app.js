$('.scrollto').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1200,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

$('.navBtn__close').on('click', function() {
    $('.nav__item-left').toggleClass('active');
    $('body').toggleClass('active');
});

$(function($) {
    $('#post').on('submit', function(event) {
        event.preventDefault();
      if ( validateForm() ) { 
        return false;
      } else {
        var i = 3;
        function time(){
        document.getElementById("time").innerHTML = i;
        i--;
        if (i < 0) location.href = "index.html";
        }
        time();
        setInterval(time, 1000);
      }
    });
    
    function validateForm() {
      $(".text-error").remove();
      
      // Проверка имени    
      var el_l = $("#formName");
      if ( el_l.val().length < 3 ) {
        var v_login = true;
        el_l.after('<span class="text-error for-login">Имя должно быть больше 2 символов</span>');
      } 
      $("#formName").toggleClass('error', v_login );
      
      // Проверка e-mail
      var reg =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var el_e = $("#formEmail");
      var v_email = el_e.val()?false:true;
    
      if ( v_email ) {
        el_e.after('<span class="text-error for-email">Поле e-mail обязательно к заполнению</span>');
      } else if ( !reg.test( el_e.val() ) ) {
        v_email = true;
        el_e.after('<span class="text-error for-email">Вы указали недопустимый e-mail</span>');
      }
      $("#formEmail").toggleClass('error', v_email );
      
      // Проверка текста
      
      var el_p1 = $("#formText");
      
      var v_pass1 = el_p1.val()?false:true;
      
   
     if ( el_p1.val().length <=6 ) {
        var v_pass1 = true;
        el_p1.after('<span class="text-error for-pass1">Пароль больше 6 символов</span>');
      } 
      
      $("#formText").toggleClass('error', v_pass1 );
      
      return ( v_login || v_email || v_pass1 );
    }


     
  });

  let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = container.getElementsByClassName('days')[0],
    prev = container.getElementsByClassName('prev')[0],
    next = container.getElementsByClassName('next')[0],
    monthName = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];



let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
console.log(nowDate.getFullYear());

function setMonthCalendar(year,month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 0).getDay(),
        monthDaysText = '';

    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';

    if (monthPrefix > 0){
        for (let i = 1  ; i <= monthPrefix; i++){
            monthDaysText += '<li></li>';
        }
    }

    for (let i = 1; i <= monthDays; i++){
        monthDaysText += '<li>' + i + '</li>';
    }

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear){
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
}

setMonthCalendar(nowYear,nowMonth);

prev.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}

next.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}