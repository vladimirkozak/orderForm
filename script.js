window.onload = function() {
  const select1 = new ItcCustomSelect('#select-1');

  const form = document.getElementById('order_form');
  const inputRequired = form.querySelectorAll('.required');

  form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
  });

  inputRequired.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim().length) {
        if (input.classList.contains('info__input--email')) {
          const isValid = validateEmail(input.value.trim());
          if (!isValid) {
            setErrorFor(input, 'Введен неверный e-mail');
            return;
          }
        }
        setSuccessFor(input);
      } else {
        setErrorFor(input);
      }
    });
  });

  function checkInputs () {
    inputRequired.forEach(input => {
      if (input.value.trim() || input.hasAttribute('disabled')) {
        setSuccessFor(input);
      } else {
        setErrorFor(input);
      }
    });
  }

  function setErrorFor (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const error = formControl.querySelector('.form-error');

    if (message) {
      error.innerHTML = message;
    }
  }

  function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
  }

  function validateEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

}
