window.addEventListener('DOMContentLoaded', (event) => {

  console.log("LOADED");
  
  var downArrow = document.querySelector('#down-arrow a');

  
  downArrow.addEventListener('click', function(e) {
    scrollAnchors(e, e.target);

    console.log("in click event");
  });
});

function scrollAnchors(e, respond = null) {
  function distanceToTop(el) { 
    return Math.floor(el.getBoundingClientRect().top); 
  }
  
  e.preventDefault();
  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
  var targetAnchor = document.querySelector(targetID);
    
  if (!targetAnchor) return;
    
  var originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
  
  var checkIfDone = setInterval(function() {
    var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
     
      clearInterval(checkIfDone);
    }
  }, 100);
}