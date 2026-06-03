$(function () {

  // Toggle individual FAQ item
  $(".faq-question").on("click", function () {
    var $item = $(this).closest(".faq-item");
    var $answer = $item.find(".faq-answer");
    var isOpen = $item.hasClass("open");

    // Close all other open items
    $(".faq-item").not($item).each(function () {
      $(this).find(".faq-answer").slideUp(200);
      $(this).removeClass("open");
    });

    // Toggle clicked item
    if (isOpen) {
      $answer.slideUp(200);
      $item.removeClass("open");
    } else {
      $answer.slideDown(250);
      $item.addClass("open");
    }
  });

  // Expand all / Collapse all button
  var allOpen = false;
  $("#toggleAll").on("click", function () {
    allOpen = !allOpen;
    if (allOpen) {
      $(".faq-answer").slideDown(250);
      $(".faq-item").addClass("open");
      $(this).text("Collapse all");
    } else {
      $(".faq-answer").slideUp(200);
      $(".faq-item").removeClass("open");
      $(this).text("Expand all");
    }
  });

});