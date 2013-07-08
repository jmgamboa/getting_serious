$(document).ready(function(){
  // hide the box initially
  $('.status').hide();

  // hide the status while editing
  $('.name').focus(function(){
    $('.status').hide();
  });

  $('.name').blur(function(){
    $('.status')
      .text('Saving...')
      .show();

    $.ajax({
      url: 'profile',
      type: 'put',
      data: {
        name: $(this).text()
      },
      success: function(){
        // display the status 
        $('.status').text('Saved!');
        setTimeout(function(){
          $('.status').hide();
        }, 1500);
      },
      error: function(){
        $('.status').text('Error!');
      }
    });
  });
});
