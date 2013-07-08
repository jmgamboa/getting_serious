$(document).ready(function(){
  $('.name').blur(function(){
    $.ajax({
      url: 'profile',
      type: 'put',
      data: {
        name: $(this).text()
      }
    });
  });
});
