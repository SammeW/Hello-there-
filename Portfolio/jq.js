$(document).ready(function(){
    $("button").click(function(){
      var div = $("div");  
      div.animate({top: '-1350px'}, "slow");
      div.animate({left: '34%'}, "slow");
      div.animate({fontSize: '4em'}, "slow");
    });
  });