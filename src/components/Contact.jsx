import { MdArrowOutward } from "react-icons/md";
import { Col, Container, Row } from "./Grid";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2i8r1qo', 'template_p8i8arf', form.current, '6w4HBeN2fHKLbDWOI')
      .then((result) => {
        toast("Message sent successfully!");
      }, (error) => {
        toast("Failed to send message.");
      });
  };
  const ContactList = [
    {
      img: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33366 5.33325H26.667C28.1337 5.33325 29.3337 6.53325 29.3337 7.99992V23.9999C29.3337 25.4666 28.1337 26.6666 26.667 26.6666H5.33366C3.86699 26.6666 2.66699 25.4666 2.66699 23.9999V7.99992C2.66699 6.53325 3.86699 5.33325 5.33366 5.33325Z" stroke="#080808" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M29.3337 8L16.0003 17.3333L2.66699 8" stroke="#080808" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>`,
      title: "Email us",
      value: "hassan4np@gmail.com"
    },
    {
      img: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0663 6.66658C21.3686 6.92067 22.5654 7.55759 23.5037 8.49583C24.4419 9.43407 25.0788 10.6309 25.3329 11.9333M20.0663 1.33325C22.772 1.63383 25.295 2.84548 27.2212 4.76926C29.1474 6.69304 30.3623 9.2146 30.6663 11.9199M29.3329 22.5599V26.5599C29.3344 26.9313 29.2584 27.2988 29.1096 27.639C28.9608 27.9793 28.7427 28.2847 28.469 28.5357C28.1954 28.7868 27.8724 28.9779 27.5206 29.0969C27.1688 29.2158 26.7961 29.26 26.4263 29.2266C22.3234 28.7808 18.3823 27.3788 14.9196 25.1333C11.698 23.0861 8.9667 20.3548 6.91959 17.1333C4.66622 13.6549 3.26391 9.69458 2.82625 5.57325C2.79293 5.20454 2.83675 4.83293 2.95492 4.48208C3.07309 4.13124 3.26301 3.80884 3.51261 3.53541C3.7622 3.26199 4.06599 3.04353 4.40464 2.89395C4.74329 2.74436 5.10937 2.66693 5.47959 2.66659H9.47959C10.1267 2.66022 10.754 2.88936 11.2446 3.3113C11.7352 3.73323 12.0557 4.31918 12.1463 4.95992C12.3151 6.24001 12.6282 7.49689 13.0796 8.70659C13.259 9.18382 13.2978 9.70247 13.1915 10.2011C13.0851 10.6997 12.8381 11.1574 12.4796 11.5199L10.7863 13.2133C12.6843 16.5513 15.4482 19.3152 18.7863 21.2133L20.4796 19.5199C20.8421 19.1614 21.2998 18.9144 21.7984 18.808C22.297 18.7017 22.8157 18.7405 23.2929 18.9199C24.5026 19.3713 25.7595 19.6844 27.0396 19.8533C27.6873 19.9446 28.2788 20.2709 28.7016 20.7699C29.1245 21.269 29.3491 21.906 29.3329 22.5599Z" stroke="#080808" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`,
      title: "Call us",
      value: "+8801723461543 "
    },
    {
      img: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 29C6 28.4477 6.44772 28 7 28H25C25.5523 28 26 28.4477 26 29C26 29.5523 25.5523 30 25 30H7C6.44772 30 6 29.5523 6 29Z" fill="#080808" fill-opacity="0.9"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 10C14.3431 10 13 11.3431 13 13C13 14.6569 14.3431 16 16 16C17.6569 16 19 14.6569 19 13C19 11.3431 17.6569 10 16 10ZM11 13C11 10.2386 13.2386 8 16 8C18.7614 8 21 10.2386 21 13C21 15.7614 18.7614 18 16 18C13.2386 18 11 15.7614 11 13Z" fill="#080808" fill-opacity="0.9"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C13.6131 4 11.3239 4.94821 9.63604 6.63604C7.94821 8.32387 7 10.6131 7 13C7 17.1399 9.31185 20.9096 11.7546 23.7188C12.9638 25.1094 14.1755 26.2305 15.0851 27.0037C15.4449 27.3095 15.7562 27.5599 16 27.75C16.2438 27.5599 16.5551 27.3095 16.9149 27.0037C17.8245 26.2305 19.0362 25.1094 20.2454 23.7188C22.6882 20.9096 25 17.1399 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.3869 4 16 4ZM16 29C15.4265 29.8192 15.4263 29.819 15.4259 29.8188L15.4251 29.8182L15.4228 29.8166L15.4154 29.8114L15.39 29.7933C15.3683 29.7778 15.3375 29.7557 15.2981 29.7269C15.2192 29.6693 15.1059 29.5853 14.9631 29.4762C14.6775 29.2579 14.2732 28.9384 13.7899 28.5276C12.8245 27.707 11.5362 26.5156 10.2454 25.0312C7.68815 22.0904 5 17.8601 5 13C5 10.0826 6.15893 7.28473 8.22183 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27 17.8601 24.3118 22.0904 21.7546 25.0312C20.4638 26.5156 19.1755 27.707 18.2101 28.5276C17.7268 28.9384 17.3225 29.2579 17.0369 29.4762C16.8941 29.5853 16.7808 29.6693 16.7019 29.7269C16.6625 29.7557 16.6317 29.7778 16.61 29.7933L16.5846 29.8114L16.5772 29.8166L16.5749 29.8182L16.5741 29.8188C16.5737 29.819 16.5735 29.8192 16 29ZM16 29L16.5735 29.8192C16.2291 30.0603 15.7709 30.0603 15.4265 29.8192L16 29Z" fill="#080808" fill-opacity="0.9"></path>
          </svg>`,
      title: "Office address",
      value: "Khulna ,Jashore , Bangladesh"
    },
  ]
  return (
    <div className="contact py-12 lg:py-20 xl:py-[100px] 2xl:py-[120px] px-4 bg-white">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-5 lg:mb-6">
            <div className="mb-6 lg:mb-8 xl:mb-10">
              <p className="text-[#FF9640] text-lg xl:text-xl !leading-[1.4] font-bold mb-2">Contact</p>
              <h4 className="text-2xl lg:text-[32px] xl:text-[45px] 2xl:text-[64px] font-bold text-black tracking-[-1.5px] !leading-[1] capitalize ">Let’s <br />connect</h4>
            </div>
            <div className="w-[70%]">
              {ContactList.map((item, idx) => (
                <div className="flex  gap-3 lg:gap-4 pb-3 lg:pb-4 border-b border-b-[rgba(8,8,8,0.6)] mb-5 lg:mb-6 last:mb-0" key={idx}>
                  <div className=""><span dangerouslySetInnerHTML={{ __html: item.img }} ></span></div>
                  <div>
                    <p className="text-sm lg:text-base xl:text-lg !leading-[1] text-[rgba(8,8,8,0.6)] mb-1">{item.title}</p>
                    <p className="text-base lg:text-lg xl:text-xl font-bold !leading-[1.4] text-black">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <form ref={form} onSubmit={sendEmail} >
              <input type="hidden" name="_captcha" value="false" />
              <div className="md:flex items-center gap-5 lg:gap-6 mb-3">
                <div className="w-full mb-2 md:mb-0">
                  <p className="text-[#000000] font-bold text-sm md:base !leading-[1.25] mb-2 md:mb-3">Name</p>
                  <input type="text" className=" focus:border-[rgba(8,8,8,0.4)]  outline-none text-[#888888] text-base md:lg w-full !leading-[1.25] p-3 lg:p-4 rounded-lg border border-[rgba(8,8,8,0.4)]" placeholder="Your Name*" name="" id="" />
                </div>
                <div className="w-full">
                  <p className="text-[#000000] font-bold text-sm md:base !leading-[1.25] mb-2 md:mb-3">Email</p>
                  <input type="text" className="text-[#888888] focus:border-[rgba(8,8,8,0.4)]  outline-none text-base md:lg w-full !leading-[1.25] p-3 lg:p-4 rounded-lg border border-[rgba(8,8,8,0.4)]" placeholder="Your Email*" name="" id="" />
                </div>
              </div>
              <div className="md:flex items-center gap-5 lg:gap-6 mb-3">
                <div className="w-full mb-2 md:mb-0">
                  <p className="text-[#000000] font-bold text-sm md:base !leading-[1.25] mb-2 md:mb-3">Phone</p>
                  <input type="text" className="text-[#888888] focus:border-[rgba(8,8,8,0.4)]  outline-none text-base md:lg w-full !leading-[1.25] p-3 lg:p-4 rounded-lg border border-[rgba(8,8,8,0.4)]" placeholder="Your Number*" name="" id="" />
                </div>
                <div className="w-full">
                  <p className="text-[#000000] font-bold text-sm md:base !leading-[1.25] mb-2 md:mb-3">Subject</p>
                  <input type="text" className="text-[#888888] focus:border-[rgba(8,8,8,0.4)]  outline-none text-base md:lg w-full !leading-[1.25] p-3 lg:p-4 rounded-lg border border-[rgba(8,8,8,0.4)]" placeholder="Your Subject*" name="" id="" />
                </div>
              </div>
              <div className="w-full mb-3">
                <p className="text-[#000000] font-bold text-sm md:base !leading-[1.25] mb-2 md:mb-3">Message</p>
                <textarea type="text" className=" h-[100px] md:h-[150px] text-[#888888] outline-none focus:border-[rgba(8,8,8,0.4)] text-base md:lg w-full !leading-[1.25] p-3 lg:p-4 rounded-lg border border-[rgba(8,8,8,0.4)]" placeholder="Type Your Massage" name="" id="" />
              </div>
              <button type="submit" className={` text-sm lg:text-base border-none  capitalize hover:transform hover:scale-[1.1] bg-[#080808] text-white  rounded-lg font-bold !leading-[1] py-3 lg:py-4 px-6 lg:px-7 flex items-center gap-2`}>
                Submit
                <MdArrowOutward className="w-5 h-5" />
              </button>
            </form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  )
}
