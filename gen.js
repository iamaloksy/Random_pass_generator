const passwordLengthInput = document.getElementById("password-length");
const generatePasswordButton = document.getElementById("generate-password");
const generatedPassword = document.getElementById("generated-password");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

generatePasswordButton.addEventListener("click", () => {
  const passwordLength = passwordLengthInput.value;
  const useLowercase = lowercaseChars.length > 0;
  const useUppercase = uppercaseChars.length > 0;
  const useNumbers = numberChars.length > 0;
  const useSymbols = symbolChars.length > 0;

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let char = "";
    if (useLowercase) {
      char += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    if (useUppercase) {
      char += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    if (useNumbers) {
      char += numberChars[Math.floor(Math.random() * numberChars.length)];
    }
    if (useSymbols) {
      char += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }
    password += char[Math.floor(Math.random() * char.length)];
  }

  generatedPassword.textContent = password;
});