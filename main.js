$(document).ready(function () {
  $bgvideo = $("#bg-video");
  $mainvideo = $("#main-video");

  $mainvideo.on("play", function () {
    $bgvideo.trigger("pause");
  });

  $navToggle = $(".nav-toggle");
  $navBar = $(".nav");
  $navToggle.click(function (e) {
    // e.preventDefault();
    // alert("Clicked");
    $navBar.toggle();
    // alert("problem");
  });
});
