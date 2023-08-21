$(document).ready(function () {
    console.log('ready')

    $('.guide[data-order="0"]').addClass("show");
    console.log('done')

  $('.next').on('click', function () {
    var dataOrder = $(this).parent().parent().data('order'); // Find the data-order of the current guide
    var nextDataOrder = dataOrder + 1;

    // Hide the current guide
    $('.guide[data-order="' + dataOrder + '"]').removeClass("show");

    // Show the next guide
    $('.guide[data-order="' + nextDataOrder + '"]').addClass("show");
  });

  $('.previous').on('click', function () {
    var dataOrder = $(this).parent().parent().data('order'); // Find the data-order of the current guide
    var previousDataOrder = dataOrder - 1;

    // Hide the current guide
    $('.guide[data-order="' + dataOrder + '"]').removeClass("show");

    // Show the previous guide
    $('.guide[data-order="' + previousDataOrder + '"]').addClass("show");
  });
});