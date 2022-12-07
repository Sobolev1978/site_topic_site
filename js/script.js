$(document).ready(function() {
  $('.accordeon .answer').hide();
  $('.accordeon .question:first').addClass('active').next().show();
  $('.accordeon .question').click(function() {
    if ($(this).next().is(':hidden')) {
      $('.accordeon .question').removeClass('active').next().slideUp();
      $(this).toggleClass('active').next().slideDown();
    } else $(this).toggleClass('active').next().slideUp();
  });

});

$('.order_btn_start').click(function() {
  $('#modal_6').arcticmodal()
});

$('.order_btn_prof').click(function() {
  $('#modal_7').arcticmodal()
});



$('.btn_1').click(function() {
  $('#modal_1').arcticmodal()
});

$('.btn_2').click(function() {
  $('#modal_2').arcticmodal()
});

$('.btn_3').click(function() {
  $('#modal_5').arcticmodal()
});

$('.btn_4').click(function() {
  $('#modal_4').arcticmodal()
});

$('.our_btn').click(function() {
  $('#modal_3').arcticmodal()
});


$('.burger').click(function() {
  $('.header_mobile').slideToggle()
});

$('.alg_arrow_1').click(function() {
  $('.block_1').hide();
  $('.block_2').show();
})

$('.alg_arrow_2').click(function() {
  $('.block_2').hide();
  $('.block_3').show();
})

$('.alg_arrow_3').click(function() {
  $('.block_3').hide();
  $('.block_4').show();
})

$('.alg_arrow_4').click(function() {
  $('.block_4').hide();
  $('.block_5').show();
})

$('.alg_arrow_5').click(function() {
  $('.block_5').hide();
  $('.block_6').show();
})

$('.alg_arrow_6').click(function() {
  $('.block_6').hide();
  $('.block_1').show();
})

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 220) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  });
});

$(document).ready(function() {
  $(".scroll").click(function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 60;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

$('.slick_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 6000,
  arrows: true,
  // dots: true,
  focusOnSelect: true,
  centerPadding: '180px',
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '50px',
      }
    }
  ]
});

$(document).ready(function() {
  $(".select").selectBox();
});

$('.slider_1').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  navText: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    500: {
      items: 1,
      nav: true
    },

    800: {
      items: 2,
      nav: true
    },
    1200: {
      items: 3,
      nav: true
    }
  }
});


$(document).ready(function() {
  $("#form_1").on("submit", function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.location.href = "spasibo.html"
    }, 1000)
  });
});

$(document).ready(function() {
  $("#form_2").on("submit", function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.location.href = "spasibo.html"
    }, 1000)
  });
});

$(document).ready(function() {
  $("#form_3").on("submit", function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.location.href = "spasibo.html"
    }, 1000)
  });
});

$(document).ready(function() {
  $("#form_4").on("submit", function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.location.href = "spasibo.html"
    }, 1000)
  });
});

$(document).ready(function() {
  $("#form_5").on("submit", function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.location.href = "spasibo.html"
    }, 1000)
  });
});

$(document).ready(function() {
  $("#form_6").on("submit", function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.location.href = "spasibo.html"
    }, 1000)
  });
});

$(document).ready(function() {
  $("#form_7").on("submit", function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.location.href = "spasibo.html"
    }, 1000)
  });
});

$(document).ready(function() {
  $("#form_8").on("submit", function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.location.href = "spasibo.html"
    }, 1000)
  });
});

$(document).ready(function() {

  function falidator(item) {
    check = true;
    $(item).find('input').each(function() {
      if ($(this).hasClass('required') && $(this).val() == '') {
        check = false;
        $(this).css('border', '1px red solid');
      } else {
        $(this).css('border', '1px transparent solid');
      }
    });
    if (check) {
      return true;
    } else {
      return false;
    }
  }

  /**************************/
  $("#form_1").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_1.php",
      data: $("#form_1").serialize(),
      success: function(html) {

      }
    });

    $('#modal_1').arcticmodal('close');
    // $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_1').trigger("reset");
    return false;
  });
  /**************************/

  /**************************/
  $("#form_2").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_2.php",
      data: $("#form_2").serialize(),
      success: function(html) {

      }
    });

    $('#modal_2').arcticmodal('close');
    // $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_2').trigger("reset");
    return false;
  });
  /**************************/
  /**************************/
  $("#form_3").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_3.php",
      data: $("#form_3").serialize(),
      success: function(html) {

      }
    });
    // $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_3').trigger("reset");
    return false;
  });
  /**************************/
  $("#form_4").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_4.php",
      data: $("#form_4").serialize(),
      success: function(html) {

      }
    });

    // $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_4').trigger("reset");
    return false;
  });
  /**************************/
  /**************************/
  $("#form_5").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_5.php",
      data: $("#form_5").serialize(),
      success: function(html) {

      }
    });

    // $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_5').trigger("reset");
    return false;
  });
  /**************************/

  /**************************/
  $("#form_6").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_6.php",
      data: $("#form_6").serialize(),
      success: function(html) {

      }
    });
    // $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_6').trigger("reset");
    return false;
  });
  /**************************/
  /**************************/
  $("#form_7").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_7.php",
      data: $("#form_7").serialize(),
      success: function(html) {

      }
    });
    // $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_7').trigger("reset");
    return false;
  });
  /**************************/
  /**************************/
  $("#form_8").submit(function() {
    if (!falidator(this)) return false;
    $.ajax({
      type: "POST",
      url: "php/form_8.php",
      data: $("#form_8").serialize(),
      success: function(html) {

      }
    });
    // $('#spasibo').arcticmodal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form_8').trigger("reset");
    return false;
  });
  /**************************/

});

$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$(".numbox").click(function() {
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");