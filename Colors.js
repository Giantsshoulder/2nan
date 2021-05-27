var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < 1){
    //   alist[i].style.color=color;
    //   i=i+1;
    //   }
    $('a').css('color', color);
    }
  }
  var body = {
    setColor:function(color){
      // document.querySelector('body').style.color=color;
      $('body').css('color', color);
    },
    setbackgroundColor:function(color){
      // document.querySelector('body').style.backgroundColor=color;
      $('body').css('backgroundColor', color);
    }
  }
  function nightdayhandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      body.setbackgroundColor('black');
      body.setColor('white');
      self.value = 'day';
      Links.setColor('powderblue');
    } else {
      body.setbackgroundColor('white');
      body.setColor('black');
      self.value = 'night';
      Links.setColor('blue');
    }
  }
