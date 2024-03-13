function Signform() {
  return (
    <>
      <section className="w-[327px] h-[88px] rounded-[10px] bg-[#5e54a4] flex items-center justify-center">
        <p className="text-center text-white text-[15px] leading-[26px] tracking-[0.27px] font-medium">
          <span className="font-bold">Try it free 7 days </span>
          then <br /> $20/mo. thereafter
        </p>
      </section>
      <form
        action=""
        className="flex flex-col items-center gap-[16px] p-6 bg-white rounded-[10px] shadow-[0px_8px_0px_0px_rgba(0, 0, 0, 0.15)]"
      >
        <div>
          <div className="flex fustify-between items-center">
            <input name="firstName" type="text" placeholder="First Name" />
            <img src="./images/icon-error.svg" alt="error icon" />
          </div>
          <p></p>
        </div>
        <div>
          <div className="flex fustify-between items-center">
            <input name="lastName" type="text" placeholder="Last Name" />
            <img src="./images/icon-error.svg" alt="error icon" />
          </div>
          <p></p>
        </div>
        <div>
          <div className="flex fustify-between items-center">
            <input name="email" type="email" placeholder="Email Address" />
            <img src="./images/icon-error.svg" alt="error icon" />
          </div>
          <p></p>
        </div>
        <div>
          <div className="flex fustify-between items-center">
            <input name="password" type="password" placeholder="Password" />
            <img src="./images/icon-error.svg" alt="error icon" />
          </div>
          <p></p>
        </div>
        <button className="w-[279px] h-[56px] rounded-[5px] bg-[#38cc8b] text-white text-[15px] font-[600] leading-[1.73] tracking-[1px]">
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-[11px] leading-[21px] leading-[1.91] font-[500] text-[#bab7d4] text-center mt-[-8px]">
          By clicking the button, you are agreeing to <br /> our
          <span className="text-[#ff7979] font-[700]"> Terms and Services</span>
        </p>
      </form>
    </>
  );
}

export default Signform;
