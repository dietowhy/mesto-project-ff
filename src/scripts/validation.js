function showInputError (formElement, inputElement, errorMessage, validationConfig){
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);

  inputElement.classList.add(validationConfig.inputErrosClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass)
}

function hideInputError (formElement, inputElement, validationConfig){
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);

  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(validationConfig.errorClass);
}

function isValid (formElement, inputElement, validationConfig){
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } 

  else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } 
  
  else {
    hideInputError(formElement, inputElement, validationConfig);
  }
}

function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState (inputList, buttonElement, validationConfig){
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }

}

function enableValidation (validationConfig){
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, validationConfig);
  })

}

function clearValidation (form, validationConfig){
  const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(form, inputElement, validationConfig)
    inputElement.value = ""
  })
}

function setEventListeners (formElement, validationConfig){
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationConfig);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });

}

export {enableValidation, clearValidation}