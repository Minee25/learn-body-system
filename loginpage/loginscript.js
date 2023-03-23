const switeschange = document.querySelector(".switch-change");

const switchlogin = document.querySelector(".switch-login");
const switchsignup = document.querySelector(".switch-signup");

const formlogin = document.querySelector(".form-login");
const formsignup = document.querySelector(".form-signup");


// 

switchsignup.addEventListener("click", () => {
    switeschange.classList.add("switch-change-signup");
    switeschange.classList.remove("switch-change-login");
    switeschange.innerHTML = "สมัครบัญชี";

    formsignup.classList.remove("hide");
    formlogin.classList.add("hide");
});


switchlogin.addEventListener("click", () => {
    switeschange.classList.add("switch-change-login");
    switeschange.classList.remove("switch-change-signup");
    switeschange.innerHTML = "เข้าสู่ระบบ";

    
    formsignup.classList.add("hide");
    formlogin.classList.remove("hide");
});











// const switeschange = document.querySelector(".swites-change");
// const switeslogin = document.querySelector(".swites-login");
// const switessignup = document.querySelector(".swites-signup");

// const fromlogin = document.querySelector(".from-login");
// const fromsignup = document.querySelector(".from-signup");

// switessignup.addEventListener("click", () => {
//     switeschange.classList.add("signup");
//     switeschange.classList.remove("login");
//     fromlogin.classList.add("hide");
//     fromsignup.classList.remove("hide");
//     switeschange.innerHTML = "Signup";
// });

// switeslogin.addEventListener("click", () => {
//     switeschange.classList.add("login");
//     switeschange.classList.remove("signup");
//     fromsignup.classList.add("hide");
//     fromlogin.classList.remove("hide");
//     switeschange.innerHTML = "Login";
// });