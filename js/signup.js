$(function () {
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  var $checkbox = $('input[type=checkbox]');
  var $submit = $('button[type=submit]');
  // variables verificadoras booleanas
  var verifyEmail = false;
  var verifyPassword = false;
  var verifyCheck = false;
  // validacion de email
  $email.on('input', function(event) {
    $(this).val();
    var patternEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    console.log(patternEmail.test($(this).val()));
    if (patternEmail.test($(this).val())) {
      verifyEmail = true;
      activeButton();
    } else {
      verifyEmail = false;
      desactiveButton();
    }
  });
  // validacion de password
  $password.on('input', function() {
    if ($(this).val().length >= 6) {
      verifyPassword = true;
      activeButton();
    } else {
      verifyPassword = false;
      desactiveButton();
    }
  });
  // validacion check
  $checkbox.on('click', function(event) {
    console.log(event.target.checked);
    if (event.target.checked) {
      verifyCheck = true;
      activeButton();
      $valButton.css('background', '#813b7a');
      $valButton.css('color', 'white');
    } else {
      verifyCheck = false;
      desactiveButton();
    }
  });
  // guardar data
  $submit.on('click', function(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = 'views/home.html';
  });
  // funciones active
  function activeButton() {
    if (verifyEmail && verifyPassword && verifyCheck) {
      $submit.attr('disabled', false);
    }
  }
  function desactiveButton() {
    $submit.attr('disabled', true);
  }
});