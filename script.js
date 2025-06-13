const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");

const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");

const indicator = document.querySelector("[dataindicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCountor = 0;

// Initial setup
handleSlider();
setIndicator("#ccc");
handleCheckBoxChange();

// Function to handle slider movement
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
  const min = inputSlider.min;
  const max = inputSlider.max;
  inputSlider.style.backgroundSize =
    ((passwordLength - min) * 100) / (max - min) + "% 100%";
}

// Function to set indicator color
function setIndicator(color) {
  indicator.style.backgroundColor = color;
  indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

// Random generators
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
  return getRandomInteger(0, 10); // 0-9
}

function generateLowerCase() {
  return String.fromCharCode(getRandomInteger(97, 123));
}

function generateUpperCase() {
  return String.fromCharCode(getRandomInteger(65, 91));
}

function generateSymbol() {
  return symbols[getRandomInteger(0, symbols.length)];
}

// Function to shuffle the password (Fisher-Yates)
function shufflePassword(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
}

// Password strength 
function calculateStrength() {
  let hasUpper = upperCaseCheck.checked;
  let hasLower = lowerCaseCheck.checked;
  let hasNum = numberCheck.checked;
  let hasSymbol = symbolCheck.checked;

  if (hasUpper && hasLower && (hasNum || hasSymbol) && passwordLength >= 8) {
    setIndicator("#0f0"); // Strong
  } else if ((hasUpper || hasLower) && (hasNum || hasSymbol) && passwordLength >= 6) {
    setIndicator("#ff0"); // Medium
  } else {
    setIndicator("#f00"); // Weak
  }
}

// Copy to clipboard
async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "Copied";
  } catch (error) {
    copyMsg.innerText = "Failed";
  }

  copyMsg.classList.add("active");
  setTimeout(() => copyMsg.classList.remove("active"), 2000);
}

// Update slider value
inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

// Copy button click
copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) {
    copyContent();
  }
});

// Track checkbox changes
function handleCheckBoxChange() {
  checkCountor = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) checkCountor++;
  });

  if (passwordLength < checkCountor) {
    passwordLength = checkCountor;
    handleSlider();
  }
}

// Add checkbox change listener
allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBoxChange);
});

// Generate password button
generateBtn.addEventListener("click", () => {
  if (checkCountor === 0) return;

  if (passwordLength < checkCountor) {
    passwordLength = checkCountor;
    handleSlider();
  }

  // Reset password
  password = "";

  let funcArr = [];
  if (upperCaseCheck.checked) funcArr.push(generateUpperCase);
  if (lowerCaseCheck.checked) funcArr.push(generateLowerCase);
  if (numberCheck.checked) funcArr.push(generateRandomNumber);
  if (symbolCheck.checked) funcArr.push(generateSymbol);

  // Compulsory characters
  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i]();
  }

  // Remaining characters
  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randIndex = getRandomInteger(0, funcArr.length);
    password += funcArr[randIndex]();
  }

  // Shuffle and display
  password = shufflePassword(Array.from(password));
  passwordDisplay.value = password;
  calculateStrength();
});
