$(function () {
  $('#change-color').on('click', function () {
    // 不透明度を0にする（フェードアウトする）
    $('#target').css('color', 'green');
  });
  $('#change-text').on('click', function () {
    // 不透明度を1にする（フェードインする）
    $('#target').text('やっほー！');
  });
  $('#fade-out').on('click', function() {
       // 高さを0にする（スライドアップする）
       $('#target').fadeOut();
  });
  $('#fade-in').on('click', function() {
        // 高さを200にする（スライドダウンする）
        $('#target').fadeIn();
  });
 });

