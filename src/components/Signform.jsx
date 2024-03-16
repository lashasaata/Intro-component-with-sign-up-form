import { useState } from "react";

function Signform() {
  const [useForm, setUseForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [useFormErrors, setUseFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [useHover, setUseHover] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUseForm({
      ...useForm,
      [name]: value,
    });
  };

  const focusHandler = (e) => {
    const { name } = e.target;
    setUseHover({
      ...useHover,
      [name]: true,
    });
    console.log(useHover);
  };

  const blurHandler = (e) => {
    const { name } = e.target;
    setUseHover({
      ...useHover,
      [name]: false,
    });
  };

  const errorHandler = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errors = {};

    if (useForm.firstName.replaceAll(" ", "") == "") {
      errors.firstName = "First Name cannot be empty";
    }
    if (useForm.lastName.replaceAll(" ", "") == "") {
      errors.lastName = "Last Name cannot be empty";
    }
    if (!emailRegex.test(useForm.email)) {
      errors.email = "Looks like this is not an email";
    } else if (useForm.email.replaceAll(" ", "") == "") {
      errors.email = "Email cannot be empty";
    }
    if (useForm.password.replaceAll(" ", "") == "") {
      errors.password = "Password cannot be empty";
    }
    setUseFormErrors(errors);
    console.log(useFormErrors);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    errorHandler();
  };

  return (
    <>
      <section className="w-[327px] lg:w-[560px] h-[88px] lg:h-[60px] rounded-[10px] bg-[#5e54a4] flex items-center justify-center shadow-section">
        <p className="text-center text-white text-[15px] leading-[26px] tracking-[0.27px] font-medium w-[145px] lg:w-auto">
          <span className="font-bold">Try it free 7 days </span>
          then $20/mo. thereafter
        </p>
      </section>
      <form
        onSubmit={submitHandler}
        action=""
        className="flex flex-col items-center gap-[16px] lg:gap-[20px] p-6 lg:p-10 bg-white rounded-[10px] shadow-section"
      >
        <div className="flex flex-col items-end lg:gap-[4px]">
          <div
            className={`${
              useFormErrors.firstName
                ? "border-[#ff7979] border-2"
                : useHover.firstName
                ? "border border-[#5e54a4]"
                : "border-[#dedede] border"
            } flex justify-between items-center w-[279px] lg:w-[460px] h-[56px] border-solid px-5 lg:px-[27px] rounded-[5px]`}
          >
            <input
              onChange={inputHandler}
              onFocus={focusHandler}
              onBlur={blurHandler}
              name="firstName"
              type="text"
              placeholder="First Name"
              className="lg:w-[300px] text-sm text-[#3d3b48] leading-[1.89] tracking-[0.25px] font-[600] lg:ml-[4px] focus:outline-none focus:caret-[#5e54a4] placeholder:text-[#3d3b48] placeholder:text-sm placeholder:leading-[1.86] placeholder:tracking-[0.25px] placeholder:font-[600] placeholder:opacity-75"
            />
            {useFormErrors.firstName ? (
              <img src="./images/icon-error.svg" alt="error icon" />
            ) : (
              ""
            )}
          </div>
          <p className="text-[11px] text-[#ff7979] font-[500]">
            {useFormErrors.firstName}
          </p>
        </div>
        <div className="flex flex-col items-end lg:gap-[4px]">
          <div
            className={`${
              useFormErrors.lastName
                ? "border-[#ff7979] border-2"
                : useHover.lastName
                ? "border border-[#5e54a4]"
                : "border-[#dedede] border"
            } flex justify-between items-center w-[279px] lg:w-[460px] h-[56px] border-solid px-5 lg:px-[27px] rounded-[5px]`}
          >
            <input
              onChange={inputHandler}
              onFocus={focusHandler}
              onBlur={blurHandler}
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="lg:w-[300px] text-sm text-[#3d3b48] leading-[1.89] tracking-[0.25px] font-[600] focus:outline-none focus:caret-[#5e54a4] placeholder:text-[#3d3b48] placeholder:text-sm placeholder:leading-[1.86] placeholder:tracking-[0.25px] placeholder:font-[600] placeholder:opacity-75"
            />
            {useFormErrors.lastName ? (
              <img src="./images/icon-error.svg" alt="error icon" />
            ) : (
              ""
            )}
          </div>
          <p className="text-[11px] text-[#ff7979] font-[500]">
            {useFormErrors.lastName}
          </p>
        </div>
        <div className="flex flex-col items-end lg:gap-[4px]">
          <div
            className={`${
              useFormErrors.email
                ? "border-[#ff7979] border-2"
                : useHover.email
                ? "border border-[#5e54a4]"
                : "border-[#dedede] border"
            } flex justify-between items-center w-[279px] lg:w-[460px] h-[56px] border-solid px-5 lg:px-[27px] rounded-[5px]`}
          >
            <input
              onChange={inputHandler}
              onFocus={focusHandler}
              onBlur={blurHandler}
              name="email"
              type="email"
              placeholder="Email Address"
              className="lg:w-[300px] text-sm text-[#3d3b48] leading-[1.89] tracking-[0.25px] font-[600] focus:outline-none focus:caret-[#5e54a4] placeholder:text-[#3d3b48] placeholder:text-sm placeholder:leading-[1.86] placeholder:tracking-[0.25px] placeholder:font-[600] placeholder:opacity-75"
            />
            {useFormErrors.email ? (
              <img src="./images/icon-error.svg" alt="error icon" />
            ) : (
              ""
            )}
          </div>
          <p className="text-[11px] text-[#ff7979] font-[500]">
            {useFormErrors.email}
          </p>
        </div>
        <div className="flex flex-col items-end lg:gap-[4px]">
          <div
            className={`${
              useFormErrors.password
                ? "border-[#ff7979] border-2"
                : useHover.password
                ? "border border-[#5e54a4]"
                : "border-[#dedede] border"
            } flex justify-between items-center w-[279px] lg:w-[460px] h-[56px] border-solid px-5 lg:px-[27px] rounded-[5px]`}
          >
            <input
              onChange={inputHandler}
              onFocus={focusHandler}
              onBlur={blurHandler}
              name="password"
              type="password"
              placeholder="Password"
              className="lg:w-[300px] text-sm text-[#3d3b48] leading-[1.89] tracking-[0.25px] font-[600] focus:outline-none focus:caret-[#5e54a4] placeholder:text-[#3d3b48] placeholder:text-sm placeholder:leading-[1.86] placeholder:tracking-[0.25px] placeholder:font-[600] placeholder:opacity-75"
            />
            {useFormErrors.password ? (
              <img src="./images/icon-error.svg" alt="error icon" />
            ) : (
              ""
            )}
          </div>
          <p className="text-[11px] text-[#ff7979] font-[500]">
            {useFormErrors.password}
          </p>
        </div>
        <button
          type="submit"
          className="w-[279px] lg:w-[460px] h-[56px] rounded-[5px] bg-[#38cc8b] text-white text-[15px] font-[600] leading-[1.73] tracking-[1px] shadow-button hover:bg-[#77e2b3] hover:cursor-pointer"
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-[11px] leading-[21px] leading-[1.91] font-[500] text-[#bab7d4] text-center mt-[-8px] lg:mt-[-12px]">
          By clicking the button, you are agreeing to{" "}
          <br className="lg:hidden" /> our
          <span className="text-[#ff7979] font-[700]"> Terms and Services</span>
        </p>
      </form>
    </>
  );
}

export default Signform;
