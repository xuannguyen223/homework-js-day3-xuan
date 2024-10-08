// // ******************** EVEN NUMBER, ODD NUMBER **************************
function showErrorInput() {
  document.querySelector("#number").classList.remove("inputDecor");
  document.querySelector("#number").classList.add("errorInputDecor");
}

function showCorrectInput() {
  document.querySelector("#number").classList.remove("errorInputDecor");
  document.querySelector("#number").classList.add("inputDecor");
}

let btnCheckNumber = document.querySelector("#checkNumber");

btnCheckNumber.onclick = function (event) {
  let inputValue = document.querySelector("#number").value;
  let checkNumberResult = document.querySelector("#checkNumberResult");
  if (inputValue == "") {
    checkNumberResult.innerHTML = "bạn chưa nhập nội dung";
    showErrorInput();
  } else if (Number(inputValue) % 2 != 0 && Number(inputValue) % 2 != 1) {
    checkNumberResult.innerHTML =
      "nội dung bạn vừa nhập không phải là số nguyên, vui lòng nhập lại";
    showErrorInput();
  } else if (Number(inputValue) % 2 == 0) {
    checkNumberResult.innerHTML = "số chẵn";
    showCorrectInput();
  } else {
    checkNumberResult.innerHTML = "số lẻ";
    showCorrectInput();
  }
};

// ************************ XÉT THƯỞNG NHÂN VIÊN ***************************8

let btnCalculateBonus = document.querySelector("#calculateBonus");

btnCalculateBonus.onclick = function (event) {
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

let btnCalculateDiscount = document.querySelector("#calculateDiscount");

btnCalculateDiscount.onclick = function (event) {
  let bill = document.querySelector("#bill").value * 1;

  document.querySelector("#discountResult").innerHTML =
    bill > 500 ? bill * 0.2 : "Không được chiết khấu";
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

let btnCreateAccount = document.querySelector("#createAccount");

btnCreateAccount.onclick = function (event) {
  let lengthOfPassword = document.querySelector("#password").value.length;
  let createTagP = document.createElement("p");

  if (lengthOfPassword >= 8) {
    createTagP.innerHTML = "Bạn đã đăng ký tài khoản thành công";
    createTagP.classList.add("pink");
    btnCreateAccount.closest(".signUp").appendChild(createTagP);
  } else {
    createTagP.innerHTML =
      "Mật khẩu của bạn không đủ mạnh, vui lòng tạo lại mật khẩu";
    createTagP.classList.add("blue");
    btnCreateAccount.closest(".signUp").appendChild(createTagP);
  }
};
