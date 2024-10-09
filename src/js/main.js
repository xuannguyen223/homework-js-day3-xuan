// ******************** EVEN NUMBER, ODD NUMBER **************************
function showErrorInput() {
  document.querySelector("#number").classList.remove("inputDecor");
  document.querySelector("#number").classList.add("errorInputDecor");
}

function showCorrectInput() {
  document.querySelector("#number").classList.remove("errorInputDecor");
  document.querySelector("#number").classList.add("inputDecor");
}

function validateInput(content) {
  let isValidContent = true;
  // check string có hợp lệ hay ko (empty, null, undefine)
  if (!content) {
    document.querySelector("#checkNumberResult").innerHTML =
      "bạn chưa nhập nội dung";
    isValidContent = false;
  }
  let numberRegex = /^[0-9]*$/;
  if (!numberRegex.test(content)) {
    document.querySelector("#checkNumberResult").innerHTML =
      "nội dung bạn vừa nhập không phải là số nguyên, vui lòng nhập lại";
    isValidContent = false;
  }
  // return để đoạn code tiếp theo có thể sử dụng kết quả của nó
  if (isValidContent == true) {
    return true;
  } else {
    showErrorInput();
    return false;
  }
}

let btnCheckNumber = document.querySelector("#checkNumber");

btnCheckNumber.onclick = function (event) {
  let inputValue = document.querySelector("#number").value;

  // check input ko hop le - boolean
  let result = validateInput(inputValue);
  if (!result) {
    return; // break của hàm
  }

  // check chan - le
  document.querySelector("#checkNumberResult").innerHTML =
    Number(inputValue) % 2 == 0 ? "số chẵn" : "số lẻ";

  // update css cua input
  showCorrectInput();
};

// ---- IDEA BAN ĐẦU----
// let btnCheckNumber = document.querySelector("#checkNumber");

// btnCheckNumber.onclick = function (event) {
//   let inputValue = document.querySelector("#number").value;
//   let checkNumberResult = document.querySelector("#checkNumberResult");
//   if (inputValue == "") {
//     checkNumberResult.innerHTML = "bạn chưa nhập nội dung";
//     showErrorInput();
//   } else if (Number(inputValue) % 2 != 0 && Number(inputValue) % 2 != 1) {
//     checkNumberResult.innerHTML =
//       "nội dung bạn vừa nhập không phải là số nguyên, vui lòng nhập lại";
//     showErrorInput();
//   } else if (Number(inputValue) % 2 == 0) {
//     checkNumberResult.innerHTML = "số chẵn";
//     showCorrectInput();
//   } else {
//     checkNumberResult.innerHTML = "số lẻ";
//     showCorrectInput();
//   }
// };

// ************************ XÉT THƯỞNG NHÂN VIÊN ***************************8

let formReward = document.querySelector("#reward");

formReward.onsubmit = function (event) {
  let employeeName = document.querySelector("#name").value;
  let salesQuantity = document.querySelector("#quantity").value;
  let priceOfproduct = document.querySelector("#price").value;
  let revenueOfmonth = Number(salesQuantity) * Number(priceOfproduct);

  document.querySelector("#revenue").innerHTML = revenueOfmonth;
  document.querySelector("#nameResult").innerHTML = employeeName;

  document.querySelector("#bonusResult").innerHTML =
    salesQuantity > 100 ? revenueOfmonth * 0.1 : "Không được thưởng";
};

// ************************ TÍNH CHIẾT KHẤU ***************************8

let formDiscount = document.querySelector("#discount");

formDiscount.onsubmit = function (event) {
  let bill = document.querySelector("#bill").value * 1;

  document.querySelector("#discountResult").innerHTML =
    bill > 500 ? Math.round(bill * 0.2) : "Không được chiết khấu";
};

// ************************ KIỂM TRA MẬT KHẨU ***************************8

let eyeBtn = document.querySelector("#eye");

eyeBtn.onclick = function (event) {
  let typeInputPassword = document.querySelector("#password").type;

  switch (typeInputPassword) {
    case "password":
      document.querySelector("#password").type = "text";
      eyeBtn.innerHTML = `<i class="fa fa-eye"></i>`;
      break;
    case "text":
      document.querySelector("#password").type = "password";
      eyeBtn.innerHTML = `<i class="fa fa-eye-slash"></i>`;
      break;
    default:
      console.log("This type doesn't support click");
  }
};

let passwordResult = document.querySelector("#passwordResult");

function showWeakPassword() {
  passwordResult.classList.remove("blue");
  passwordResult.classList.add("pink");
}

function showStrongPassword() {
  passwordResult.classList.remove("pink");
  passwordResult.classList.add("blue");
}

let inputPassword = document.querySelector("#password");

function checkPassword() {
  let isStrongPassword = true;
  //check number
  let numberRegex = /(?=.*\d)/;
  if (numberRegex.test(inputPassword.value)) {
    document.querySelector("#containNumber").style.color = "green";
    document.querySelector("#containNumber i").className =
      "fa fa-check-circle mr-1";
  } else {
    document.querySelector("#containNumber").style.color = "red";
    document.querySelector("#containNumber i").className =
      "fa fa-times-circle mr-1";
    isStrongPassword = false;
  }
  //check length
  let lengthOfPassword = document.querySelector("#password").value.length;
  if (lengthOfPassword >= 8) {
    document.querySelector("#length").style.color = "green";
    document.querySelector("#length i").className = "fa fa-check-circle mr-1";
  } else {
    document.querySelector("#length").style.color = "red";
    document.querySelector("#length i").className = "fa fa-times-circle mr-1";
    isStrongPassword = false;
  }
  //check lowercase
  let lowercaseRegex = /[a-z]/;
  if (lowercaseRegex.test(inputPassword.value)) {
    document.querySelector("#lowercase").style.color = "green";
    document.querySelector("#lowercase i").className =
      "fa fa-check-circle mr-1";
  } else {
    document.querySelector("#lowercase").style.color = "red";
    document.querySelector("#lowercase i").className =
      "fa fa-times-circle mr-1";
    isStrongPassword = false;
  }
  //check uppercase
  let uppercaseRegex = /[A-Z]/;
  if (uppercaseRegex.test(inputPassword.value)) {
    document.querySelector("#uppercase").style.color = "green";
    document.querySelector("#uppercase i").className =
      "fa fa-check-circle mr-1";
  } else {
    document.querySelector("#uppercase").style.color = "red";
    document.querySelector("#uppercase i").className =
      "fa fa-times-circle mr-1";
    isStrongPassword = false;
  }
  // check special
  let specialRegex = /[!@#~`\$%\^\&*\)\(+=._-]/g;
  if (specialRegex.test(inputPassword.value)) {
    document.querySelector("#special").style.color = "green";
    document.querySelector("#special i").className = "fa fa-check-circle mr-1";
  } else {
    document.querySelector("#special").style.color = "red";
    document.querySelector("#special i").className = "fa fa-times-circle mr-1";
    isStrongPassword = false;
  }
  return isStrongPassword;
}

inputPassword.oninput = function () {
  checkPassword();
};

inputPassword.onkeyup = function (event) {
  const key = event.key;
  if (key == "Delete" || key == "Backspace") {
    checkPassword();
  }
};

let formSignUp = document.querySelector("#signUp");

formSignUp.onsubmit = function (event) {
  if (checkPassword()) {
    passwordResult.innerHTML = `Bạn đã đăng ký thành công cho tài khoản:
      <span class="text-indigo-600">${
        document.querySelector("#accountName").value
      }</span>`;
    showStrongPassword();
    document.querySelector("#accountName").value = "";
    document.querySelector("#password").value = "";
  } else {
    passwordResult.innerHTML =
      "Mật khẩu của bạn không đủ mạnh, vui lòng tạo lại mật khẩu";
    showWeakPassword();
  }
};
