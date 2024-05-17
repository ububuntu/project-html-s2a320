$(function () {
  //ページ内スクロール
  var navHeight = $('.header').outerHeight();

  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top - navHeight;
    $('html, body').animate({ scrollTop: position }, 300, 'swing');
    return false;
  });

  //ページトップ
  $('#js-page-top').on('click', function () {
    $('body,html').animate({ scrollTop: 0 }, 300);
    return false;
  });
});

$(function () {
  //カーソルストーカー
  var cursor = $("cursor");
  $(document).on("mousemove", function (e){
    var x = e.clientX;
    var y = e.clientY;

    cursor.css({
      "top":y+"px","left":x+"px"
    });
  });
});
