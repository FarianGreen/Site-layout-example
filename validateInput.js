const form = document.querySelector(".form__controle");
const email = document.querySelector(".form-email");
const phone = document.querySelector(".form-phone");
const formsInput = document.querySelectorAll(".form__style");
const emailerror = document.querySelector(".email-error");
const phoneerror = document.querySelector(".phone-error");

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.onsubmit = (e) => {
  e.preventDefault();
  const valEmail = email.value;
  const valPhone = phone.value;
  const emptyInputs = Array.from(formsInput).filter(
    (input) => input.value === ""
  );

  formsInput.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (!validateEmail(valEmail)) {
    email.classList.add("error");
    emailerror.style.display = "block";
    return false;
  } else {
    email.classList.remove("error");
  }

  if (emptyInputs.length !== 0) {
    alert("Заполните поля, хоть пару слов =)");
    return false;
  }

  if (!validatePhone(valPhone)) {
    phone.classList.add("error");
    phoneerror.style.display = "block";
    return false;
  } else {
    phone.classList.remove("error");
  }

  const formData = document.body.querySelector("#form");

  const values = new FormData(formData);
  const info = Object.fromEntries(values.entries())

  // const elements = formData.elements;
  // const values = {}
  // const info = Array.from(elements)
  //   .filter((item) => !!item.name)
  //   .forEach(field =>{
  //     const {name, value} = field;
  //     values[name]= value
  //   })
    console.log(info)
  return false;
};
