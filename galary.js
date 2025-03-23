$('.all').on('mousemove', function(e) {
  var width = $(this).width();
  var height = $(this).height();
  var offsetX = 0.5 - e.pageX / width;
  var offsetY = 0.5 - e.pageY / height;

  $('.left, .right, .lefter, .righter').each(function() {
    var rotateY = offsetX * 10;
    var rotateX = offsetY * 10;
    $(this).css('transform', `perspective(1500px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
  });
});

// Reset animation on mouse leave
$('.all').on('mouseleave', function() {
  $('.left, .right, .lefter, .righter').css('transform', '');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});