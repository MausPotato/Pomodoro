jQuery(document).ready(function($) {
  $('.hidden').hide();
  var fade_time = 400;
  //上方menu切換
  $('.menu li').click(function(e) {
    e.preventDefault();
    $(this).find('a').toggleClass('active');
    $(this).siblings().find('a').removeClass('active');
  });
  $('#todo').click(function(e) {
    e.preventDefault();
    $('.firsttask').stop(true).fadeOut(fade_time*1.5);
    $('.analyticscontent').stop(true).fadeOut(fade_time*1.5);
    $('.ringtonescontent').stop(true).fadeOut(fade_time*1.5);
    $('.listpage').delay(fade_time*1.5).fadeToggle(fade_time*2);
  });
  $('#analytics').click(function(e) {
    e.preventDefault();
    $('.firsttask').stop(true).fadeOut(fade_time*1.5);
    $('.listpage').stop(true).fadeOut(fade_time*1.5);
    $('.ringtonescontent').stop(true).fadeOut(fade_time*1.5);
    $('.analyticscontent').delay(fade_time*1.5).fadeToggle(fade_time*2);
  });
  $('#ring').click(function(e) {
    e.preventDefault();
    $('.firsttask').stop(true).fadeOut(fade_time*1.5);
    $('.listpage').stop(true).fadeOut(fade_time*1.5);
    $('.analyticscontent').stop(true).fadeOut(fade_time*1.5);
    $('.ringtonescontent').delay(fade_time*1.5).fadeToggle(fade_time*2);
  });

  //firstbtn按鈕
  $('.firstbtn').click(function(e) {
    e.preventDefault();
    $('.notask').fadeOut(fade_time*1.5);
    $('.addtask').delay(fade_time*1.5).fadeIn(fade_time*2);
  });
  //addbtn
  $('#addform').submit(function(e) {
    e.preventDefault();
    $('.firsttask').fadeOut(fade_time*1.5);
    $('.listpage').delay(fade_time*1.5).fadeIn(fade_time*2);
  });

  //list下拉式選單設定
  $('.list li').click(function(e) {
    e.preventDefault();
    $(this).find('.dropdown-open').slideToggle();
    $(this).siblings().find('.dropdown-open').slideUp();
  });

  //clock叫出
  $('.list p').click(function(e) {
    e.preventDefault();
    $(this).find('.task').toggleClass('active');
    $(this).parent().siblings().find('.task').removeClass('active');
    $('.edit').stop(true).fadeOut(fade_time*1.5);
    $('.clock').delay(fade_time*1.5).fadeIn(fade_time*2);
    $('.tasktitle')[0].textContent = $(this).parent().find('.task')[0].text;
    console.log($('.tasktitle'));
  });
  //開始按鈕
  $('.startbtn').click(function(e) {
    e.preventDefault();
    $('.selected').fadeOut(fade_time*1.5);
    $('.working').delay(fade_time*1.5).fadeIn(fade_time*2);
  });

  //暫停按鈕切換
  $('.workpause').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('start');
  });
  $('.breakpause').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('start');
  });

  //editbtn按鈕
  $('.editbtn').click(function(e) {
    e.preventDefault();
    $('.clock').stop(true).fadeOut(fade_time*1.5);
    $('.edit').delay(fade_time*1.5).fadeIn(fade_time*2);
    $('#taskname')[0].value = $(this).parent().find('.task')[0].text;
    $('#describe')[0].value = $(this).parent().find('.dropdown-open li')[0].textContent;
  });

  //addanewtask按鈕
  $('.addnt').click(function(e) {
    e.preventDefault();
    $('#taskname')[0].value = "";
    $('#describe')[0].value = "";
    $('.edit').fadeIn(fade_time*2);
  });

  //delbtn按鈕
  $('.delbtn').click(function(e) {
    e.preventDefault();
    $('.edit').fadeOut(fade_time*1.5);
  });

  //ringtones設定
  function createSound(source) {
    var sound = document.createElement('audio');
    sound.src = source;
    sound.volume = 0.5;
    sound.autoPlay = false;
    sound.preLoad = true;
    sound.controls = true;
    return sound;
  }

  var currentSound;

  $('.ringtonescontent li').click(function(e) {
    e.preventDefault();
    $(this).find('a').toggleClass('active');
    $(this).siblings().find('a').removeClass('active');
    if (currentSound != undefined) {
      currentSound.pause();
    }
    if ($(this)[0].textContent != 'None') {
      currentSound = createSound('sound/' + $(this)[0].textContent + '.mp3');
      currentSound.play();
    }
  });

});