$(document).ready(function(){
  var saveDoc = function(doc){
    $('.status')
      .text('Saving...')
      .show();

    $.ajax({
      url: 'doc',
      type: 'put',
      data: doc,
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
  };


  // hide the status while editing
  $('.doc .editable').focus(function(){
    $('.status').hide();
  });

  // update the title in real-time
  $('.doc .title').on('input', function(){
    var title = $(this).text();
    $('title').text(title);
  });

  $('.doc .title').blur(function(){
    var title = $(this).text();
    var doc = {
      title: title
    };
    saveDoc(doc);
  });

  $('.doc .body').blur(function(){
    var doc = {
      body: $(this).text()
    };
    saveDoc(doc);
  });


  // hide the box initially
  $('.status').hide();
});
