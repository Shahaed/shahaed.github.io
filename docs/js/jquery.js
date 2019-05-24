function main() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").slideToggle(400);
  });

  $(".collapsible-message-header").on("click", function() {
    $(this)
      .next()
      .slideToggle(400);
    $(this).toggleClass("active");
  });
}
$(document).ready(main);
