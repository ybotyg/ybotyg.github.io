$(document).ready(function () {
  new WOW().init();
  $(document).on("scroll", function () {
    if
    ($(document).scrollTop() > 250) {
      $("header").css('padding', '3');
    } else {
      $("header").css('padding', '12');
    }
  });

  $(".form-inline").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../new.php", //Change
      data: th.serialize()

    }).done(function () {
      $("#callback").fadeOut(100);
      $(".success").addClass("visible");

      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
        $(".success").removeClass("visible");

      }, 3000);
    });
    return false;
  });
  $('#call-btn, .hide-btn').click(function () {
    $('.overlay').fadeIn(500);
  });
  $('.closemodal').click(function () {
    $('.overlay, #cookies').fadeOut(300);
  });
});
