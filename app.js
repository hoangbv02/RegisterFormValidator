const formInput = document.querySelectorAll(".from-input");
const login = document.querySelector(".register-btn");
const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

function showError(input, message) {
    const parent = input.parentElement;
    const small = parent.querySelector("small");
    parent.classList.add("error");
    small.innerText = message;
}
function showSuccess(input) {
    const parent = input.parentElement;
    const small = parent.querySelector("small");
    parent.classList.remove("error");
    small.innerText = "";
}
function checkEmptyInput(listInput) {
    listInput.forEach((input) => {
        let isValueInput = false;
        const valueInput = input.value.trim();
        if (!valueInput) {
            isValueInput = true;
            showError(input, "Không được để trồng!");
        } else {
            showSuccess(input);
        }
        return isValueInput;
    });
}
function checkLengthValueInput(input, min, max) {
    const valueInput = input.value.trim();
    if (valueInput.length < min) {
        showError(input, `Số ký tự nhập phải ít nhất ${min} ký tự!`);
        return false;
    }
    if (valueInput.length > max) {
        showError(input, `Số ký tự nhập phải không quá ${max} ký tự!`);
        return false;
    }
    return true;
}
function checkEmailInput(input) {
    let isEmail = true;
    const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const valueInput = input.value.trim();
    if (!regex.test(valueInput)) {
        isEmail = false;
        showError(input, "Email không hợp lệ!");
    } else {
        showSuccess(input);
    }
    return isEmail;
}
function checkSameValue(input1, input2) {
    let isSameValue = true;
    const valueInput1 = input1.value.trim();
    const valueInput2 = input2.value.trim();
    if (valueInput1 !== valueInput2) {
        isSameValue = false;
        showError(input2, "Mật khẩu không giống! ");
    }
    return isSameValue;
}

login.addEventListener("click", function (e) {
    e.preventDefault();

    checkEmptyInput([username, email, password, confirmPassword]);
    checkEmailInput(email);
    checkLengthValueInput(username, 5, 10);
    checkLengthValueInput(password, 8, 20);
    checkLengthValueInput(confirmPassword, 8, 20);
    checkSameValue(password, confirmPassword);
});
