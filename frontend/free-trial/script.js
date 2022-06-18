console.log('Ready!!!!!')

    
    let firstNameElement = document.querySelector("#firstName");
    let lastNameElement = document.querySelector("#lastName");
    let emailAddressElement = document.querySelector("#emailAddress");
    let passwordElement = document.querySelector("#password");
    let formElement = document.querySelector("#signUp")

    
    const inputIsRequired = value => value === '' ? false : true;

    const inputIsBetween = (length, min, max) => length < min || length > max ? false : true ;

    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };

    const showError = (input, message) => {
        const formField = input.parentElement;

        formField.classList.remove('success');
        formField.classList.add('error');

        const error = formField.querySelector('.error-msg');
        error.textContent = message;
    }

    const showSuccess = (input) => {
        const formField = input.parentElement;

        formField.classList.remove('error')
        formField.classList.add('success');

        const error = formField.querySelector('.error-msg');
        error.textContent = '';
    }

    
    const checkFirstName = () => {
        let valid = false;
        const min = 3,
        max = 30;
        const firstName = firstNameElement.value.trim();

        if(!inputIsRequired(firstName)) {
            showErrorOrSuccess(firstNameElement, 'Firstname cannot be empty');
        } else if (!inputIsBetween(firstName.length, min, max)) {
            showErrorOrSuccess(firstNameElement, `Firstname must be between ${min} and ${max}`);
        } else {
            showErrorOrSuccess(firstNameElement);
            valid = true;
        }

        return valid
    }

    const checkLastName = () => {
        let valid = false;
        const min = 3,
        max = 30;
        const lastName = lastNameElement.value.trim();

        if(!inputIsRequired(lastName)) {
            showErrorOrSuccess(lastNameElement, 'Lastname cannot be empty');
        } else if (!inputIsBetween(lastName.length, min, max)) {
            showErrorOrSuccess(lastNameElement, `Lastname must be between ${min} and ${max}`);
        } else {
            showErrorOrSuccess(lastNameElement);
            valid = true;
        }

        return valid
    };

    const checkEmailAddress = () => {
        let valid = false;
        const emailAddress = emailAddressElement.value.trim();

        if(!inputIsRequired(emailAddress)) {
            showErrorOrSuccess(emailAddressElement, 'Email Address cannot be empty');
        } else if (!isEmailValid(emailAddress)) {
            showErrorOrSuccess(emailAddressElement, 'Looks like this is not an email');
        } else {
            showErrorOrSuccess(emailAddressElement);
            valid = true;
        }

        return valid;
    };

    const checkPassword = () => {
        let valid = false;

        const password = passwordElement.value.trim();

        if (!inputIsRequired(password)) {
            showErrorOrSuccess(passwordElement, 'Password cannot be empty');
        } else if (!isPasswordSecure(password)) {
            showErrorOrSuccess(passwordElement, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
        } else {
            showErrorOrSuccess(passwordElement);

            valid = true;
        }

        return valid;
    };

    const showErrorOrSuccess = (input, message="") => {
        const formField = input.parentElement;
        

        if (!message) {
            formField.classList.remove('error');
            formField.classList.add('success');
        } else {
            formField.classList.add('error');
            formField.classList.remove('success');
        }

        const error = formField.querySelector('.error-msg');
        error.textContent = message
    };

    formElement.addEventListener('submit', function (e) {
        e.preventDefault();

        let isFirstNameValid = checkFirstName(),
            isLastNameValid = checkLastName(),
            isPasswordValid = checkPassword(),
            isEmailAddressValid = checkEmailAddress();

        let isFormValid = isFirstNameValid &&
                            isLastNameValid &&
                            isEmailAddressValid &&
                            isPasswordValid;

        if (isFormValid) {

        }
    });

    const debounce = (fn, delay = 00) => {
        let timeoutId;
        return (...args) => {
            if(timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                fn.apply(null, args)
            }, delay);
        };
    };

    formElement.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'firstName':
                checkFirstName();
                break;
            case 'lastName':
                checkLastName();
                break;
            case 'emailAddress':
                checkEmailAddress();
                break;
            case 'password':
                checkPassword();
                break;
        }
    }));