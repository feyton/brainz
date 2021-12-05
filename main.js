$(document).ready(function () {
  $bgvideo = $("#bg-video");
  $mainvideo = $("#main-video");

  $mainvideo.on("play", function () {
    $bgvideo.trigger("pause");
  });
});
