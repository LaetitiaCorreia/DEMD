$((document) => {
    let stickyTop = 0,
    scrollTarget = false;
  
    let timeline = $('.timeline__nav'),
    items = $('li', timeline),
    milestones = $('.timeline__section .milestone'),
    offsetTop = parseInt(timeline.css('top'));
  
    const TIMELINE_VALUES = {
      start: 190,
      step: 30 };
  
  
    $(window).resize(function () {
      timeline.removeClass('fixed');
  
      stickyTop = timeline.offset().top - offsetTop;
  
      $(window).trigger('scroll');
    }).trigger('resize');
  
    $(window).scroll(function () {
      if ($(window).scrollTop() > stickyTop) {
        timeline.addClass('fixed');
      } else {
        timeline.removeClass('fixed');
      }
    }).trigger('scroll');
  
    items.find('span').click(function () {
      let li = $(this).parent(),
      index = li.index(),
      milestone = milestones.eq(index);
  
      if (!li.hasClass('active') && milestone.length) {
        scrollTarget = index;
  
        let scrollTargetTop = milestone.offset().top - 80;
  
        $('html, body').animate({ scrollTop: scrollTargetTop }, {
          duration: 400,
          complete: function complete() {
            scrollTarget = false;
          } });
  
      }
    });
  
    $(window).scroll(function () {
      let viewLine = $(window).scrollTop() + $(window).height() / 3,
      active = -1;
  
      if (scrollTarget === false) {
        milestones.each(function () {
          if ($(this).offset().top - viewLine > 0) {
            return false;
          }
  
          active++;
        });
      } else {
        active = scrollTarget;
      }
  
      timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
  
      items.filter('.active').removeClass('active');
  
      items.eq(active != -1 ? active : 0).addClass('active');
    }).trigger('scroll');
  });

  $(document).scroll(function() {
      var x = document.getElementsByClassName("timeline__nav");
    var y = $(document).scrollTop(),
        header = $(".timeline__nav");

        if($(this).scrollTop() >= 500 ) {  
        //header.css("display","none");
        // header.css({position: "absolute"});
        header.css({position: "fixed", "top" : "0"});
        header.style.display = "block";
    } 
        // if($(this).scrollTop() <= 40 ) {         
        // header.css({position: "fixed", "top" : "0", "left" : "0"});
        // }
    
    else {
        // header.css({position: "absolute"});
        header.style.display = "none";
    }
});
  
