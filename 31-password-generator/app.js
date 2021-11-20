const passwordGenerator = () => {
  // Variables
  const result = document.querySelector(".value");
  const clipboardBtn = document.querySelector(".btn-clipboard");
  const length = document.querySelector("#length");
  const uppercase = document.querySelector("#uppercase");
  const lowercase = document.querySelector("#lowercase");
  const number = document.querySelector("#numbers");
  const symbol = document.querySelector("#symbols");
  const button = document.querySelector(".button");

  // Functions
  const randomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  const randomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  const randomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };
  const randomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomFunction = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    symbol: randomSymbol,
  };

  const generatePassword = (lower, upper, number, symbol, length) => {
    let generatedPWD = "";
    const typesCount = lower + upper + number + symbol;
    const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );

    if (typesCount === 0) {
      return "";
    }

    for (let i = 0; i < length; i += typesCount) {
      typeArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPWD += randomFunction[funcName]();
      });
    }

    const finalPassword = generatedPWD.slice(0, length);
    return finalPassword;
  };

  // Events
  button.addEventListener("click", () => {
    const resLength = +length.value;
    const hasLower = lowercase.checked;
    const hasUpper = uppercase.checked;
    const hasNumber = number.checked;
    const hasSymbol = symbol.checked;
    result.innerText = generatePassword(
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      resLength
    );
  });

  clipboardBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = result.innerText;

    if (!password) {
      return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard!");
  });
};

passwordGenerator();
