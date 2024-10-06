const addBeneficaryForm = document.getElementById('addBeneficaryForm');

const nameInput = document.getElementById('name');
const nicInput = document.getElementById('nic');
const postalCodeInput = document.getElementById('postalCode');
const phoneInput = document.getElementById('phone');

const nameError = document.getElementById('nameError');
const nicError = document.getElementById('nicError');
const postalCodeError = document.getElementById('postalCodeError');
const phoneError = document.getElementById('phoneError');

const validateName = (name) => {
  return name.trim() !== '';
};

const validateNIC = (nic) => {
  return nic.trim().length === 12;
};

const validatePostalCode = (postalCode) => {
  return postalCode.trim().length === 5;
};

const validatePhone = (phone) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]([0-9]{3})[-. ]([0-9]{4})$/;
  return phoneRegex.test(phone.trim());
};

const showError = (element, message) => {
  element.textContent = message;
  element.style.color = 'red';
  element.style.display = 'block';
};

const hideError = (element) => {
  element.textContent = '';
  element.style.display = 'none';
};

nameInput.addEventListener('input', () => {
  const name = nameInput.value;
  if (!validateName(name)) {
    showError(nameError, 'Please enter a name.');
  } else {
    hideError(nameError);
  }
});

nicInput.addEventListener('input', () => {
  const nic = nicInput.value;
  if (!validateNIC(nic)) {
    showError(nicError, 'Please enter a valid NIC number (12 digits).');
  } else {
    hideError(nicError);
  }
});

postalCodeInput.addEventListener('input', () => {
  const postalCode = postalCodeInput.value;
  if (!validatePostalCode(postalCode)) {
    showError(postalCodeError, 'Please enter a valid postal code (5 digits).');
  } else {
    hideError(postalCodeError);
  }
});

phoneInput.addEventListener('input', () => {
  const phone = phoneInput.value;
  if (!validatePhone(phone)) {
    showError(phoneError, 'Please enter a valid phone number (e.g., (076) 757-1212).');
  } else {
    hideError(phoneError);
  }
});

addBeneficaryForm.addEventListener('submit', (event) => {
  if (!validateName(nameInput.value) || !validateNIC(nicInput.value) || !validatePostalCode(postalCodeInput.value) || !validatePhone(phoneInput.value)) {
    // event.preventDefault();
  }
});