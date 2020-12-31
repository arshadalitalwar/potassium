$(function () {
  $(".bars li .bar").each(function (key, bar) {
    console.log(key + " " + bar);
    var percentage = $(this).data("percentage");
    console.log(percentage);
    $(this).animate(
      {
        height: percentage + "%",
      },
      1000
    );
  });
});
