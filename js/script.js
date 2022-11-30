{
  let showPassword = false;

  const onFormSubmit = (event) => {
    event.preventDefault();

    const errorElement = document.querySelector(".js-error");
    errorElement.classList.add("toggleErrorMesage");
  };

  const togglePassword = () => {
    showPassword = !showPassword;
    const passwordElement = document.querySelector(".js-password");
    const showPasswordElement = document.querySelector(".js-showPassword");
    const hiddenPasswordElement = document.querySelector(".js-hiddenPassword");

    passwordElement.setAttribute("type", showPassword ? "text" : "password");
    showPasswordElement.classList.toggle("form__boxInput__showIcon");
    hiddenPasswordElement.classList.toggle("form__boxInput__showIcon");
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    const togglePasswordElement = document.querySelector(".js-togglePassword");

    form.addEventListener("submit", onFormSubmit);
    togglePasswordElement.addEventListener("click", togglePassword);
  };

  init();
}
