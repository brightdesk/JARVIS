// TweenMax
var elmTweenMax = document.getElementById("tween-max");
TweenMax.to(elmTweenMax, 1.5, { left: "45%" });

// TimelineMax
var elmTimelineMax = document.getElementById("timeline-max");
var myTimeLine = new TimelineMax({ repeat: 5, repeatDelay: .5 });
myTimeLine
    .add(TweenLite.to(elmTimelineMax, 2, { left: '45%' }))
    .add(TweenLite.to(elmTimelineMax, 1, { top: 50, opacity: 0 }))
    .add(TweenLite.to(elmTimelineMax, 1, { left: 0, opacity: 0.25 }))
    .add(TweenLite.to(elmTimelineMax, 1, { top: 0, opacity: 1 }));
