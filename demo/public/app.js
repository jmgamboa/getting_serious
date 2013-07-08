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

  $('.doc .title').blur(function(){
    var doc = {
      title: $(this).text()
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
