window.addEventListener('DOMContentLoaded', () => {
  var form = document.getElementById('password-prompt');
  var passwordInput = document.getElementById('password');
  var footer = document.getElementById('footer');
  var workContent = document.getElementById('work-content');

  
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(passwordInput.value == 'SamanthaFergus2019') {
      footer.classList.remove('blocked');
      form.classList.add('blocked');
      workContent.classList.remove('blocked');
    }

    

    // remove blocked form footer
    // hide form 
    // show content

    // eventually save to local storage
    
  })
  
});

