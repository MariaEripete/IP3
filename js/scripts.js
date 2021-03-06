/*$(document).ready(function(){
    $("#design-img").click(function(){
      $("#design-img").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#devsign-img").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#dev-img").click(function(){
      $("#dev-img").slideDown('1500').hide('1000');
      $("#dev").show('1500');
    });
    $("#dev").click(function(){
      $("#dev").slideUp('1500');
      $("#dev-img").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#pm-img").click(function(){
      $("#pm-img").slideDown('1500').hide('1000');
      $("#product-management").show('1500');
    });
    $("#product-management").click(function(){
      $("#product-management").slideUp('1500');
      $("#pm-img").slideDown('1500');
    });
  });
  



$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show('white');
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
    $("foms").submit(function(){
        // event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#comment").val();
        //Name == '' || Email == '' || Message == ''
        //"input#name").val() && $("input#email").val()
        if ($(name == '' || email == '' || message == ''){
          alert (name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
          alert("Please enter your name and email!");
        }
        
      });
    
  });*/






  $(document).ready(function() {

    $("#design").click(function(){
      $("#design-showing").toggle();
      $(".hide-design-image").toggle();
    })
  
    $("#development").click(function(){
      $("#development-showing").toggle();
      $(".hide-development-image").toggle();
    })
  
    $("#productManagement").click(function(){
      $("#product-management-showing").toggle();
      $(".hide-product-management").toggle();
    })
  
    //Insert white box upo hover
    $(".Hover").hover(function(){
      $(this).append({opacity:'2'});
    },
    function(){
      $(this).append({opacity:'0'});
    })
    
  $('.submit').click(function () {
          var Name = $('#mce-FNAME').val();
          var Email = $('#mce-EMAIL').val();
          var Message = $('#mce-MESSAGE');
          
          if (Name == '' || Email == '' || Message == '') {
              alert('Please make sure you have filled in the form correctly!');
          } else {
              alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
          }
    });
  });
  
