// typing text animation script
var typed = new Typed('#typed-text', {
  strings: ["I'm a Computer Science Major.", "I'm a student at the University of Notre Dame.", "I aim to make software that benefits others."],
  typeSpeed: 100, // Speed of typing
  backSpeed: 30, // Speed of deleting
  loop: true,    // Loop the typing
  backDelay: 1500, // Delay before deleting
  startDelay: 1000, // Delay before typing starts
});

// Smooth scrolling for 'Scroll to Bottom' button
document.querySelector('#scrollToBottom').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#bottom').scrollIntoView({
    behavior: 'smooth'
  });
});
