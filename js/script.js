{
  const onFormSubmit = (event) => {
    event.preventDefault();

    const errorElement = document.querySelector(".js-error");
    errorElement.classList.add("toggleErrorMesage");
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
