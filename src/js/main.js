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

function testRegex(regexName, id) {
  let iconPasswordCondition = id + " " + "i";
  if (regexName.test(inputPassword.value)) {
    document.querySelector(id).style.color = "green";
    document.querySelector(iconPasswordCondition).className =
      "fa fa-check-circle mr-1";
    return true;
  } else {
    document.querySelector(id).style.color = "red";
    document.querySelector(iconPasswordCondition).className =
      "fa fa-times-circle mr-1";
    return false;
  }
}

let inputPassword = document.querySelector("#password");

function checkPassword() {
  //check length
  let length = testRegex(/^.{8,}$/, "#length");
  //check number
  let number = testRegex(/(?=.*\d)/, "#containNumber");
  //check lowercase
  let lowercase = testRegex(/[a-z]/, "#lowercase");
  //check uppercase
  let uppercase = testRegex(/[A-Z]/, "#uppercase");
  // check special
  let special = testRegex(/[!@#~`\$%\^\&*\)\(+=._-]/g, "#special");

  return length && number && lowercase && uppercase && special;
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

let passwordResult = document.querySelector("#passwordResult");
function showWeakPassword() {
  passwordResult.classList.remove("blue");
  passwordResult.classList.add("pink");
}

function showStrongPassword() {
  passwordResult.classList.remove("pink");
  passwordResult.classList.add("blue");
}

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
