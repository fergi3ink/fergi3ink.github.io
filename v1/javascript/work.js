window.addEventListener('DOMContentLoaded', () => {
  var form = document.getElementById('password-prompt');
  var passwordInput = document.getElementById('password');
  var footer = document.getElementById('footer');
  var workContent = document.getElementById('work-content');
  var storageValue = window.localStorage.getItem('SF');

  function grantAccess() {
    footer.classList.remove('blocked');
    form.classList.add('blocked');
    workContent.classList.remove('blocked');
  }
  
  if (storageValue) {
    grantAccess();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (storageValue) {
      grantAccess()
    } else if(passwordInput.value == 'SamanthaFergus2019') {
      window.localStorage.setItem('SF', true);
      grantAccess()
    } else {
      passwordInput.classList.add('is-invalid');
    }
  })
});
