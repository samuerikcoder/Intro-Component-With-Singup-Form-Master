import { emailValidation } from "./emailvalidation.js";
import {  inputError } from "./inputerror.js";

const form = document.querySelector('form');
const fieldGroups = form.querySelectorAll('.field-group');

form.addEventListener('submit', event => {
    event.preventDefault();
    fieldGroups.forEach(fieldGroup => {
        const input = fieldGroup.querySelector('input');
        const iconError = fieldGroup.querySelector('.icon-error');
        const textError = fieldGroup.querySelector('.error-text');
        const valueError = inputError({
            input,
            iconError,
            textError
        });
        if(input.value.trim() === '' || !input.value) {
            valueError.show();
        }
        else {
            valueError.clear();
            const emailValidator = emailValidation({input, valueError})
            emailValidator.verify();
        }
    });
});