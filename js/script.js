const musicSpan = document.querySelectorAll('.musicSpan').forEach((item) => {
  item.addEventListener('click', function () {
    document.getElementById('sound').play();
  });
});
