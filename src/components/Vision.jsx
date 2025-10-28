import { Col, Container, Row } from "./Grid"

export default function Vision() {
  return (
    <div className="vision px-2  py-12 lg:py-20 xl:py-[100px] 2xl:py-[120px]">
      <Container>
        <Row className="justify-between">
          <Col xs={12} md={6} lg={5}>
            <div>
              <h4 className="text-2xl lg:text-[32px] xl:text-[45px] 2xl:text-[64px] font-bold text-black tracking-[-1.5px] !leading-[1] capitalize mb-4 lg:mb-5">My vision is to create happy my clients</h4>
              <p className="text-sm lg:text-base xl:text-lg text-[rgba(8,8,8,0.6)] !leading-[1.5] mb-5 lg:mb-6">
                That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not
                only reflects who you are and what you stand for, but words that truly land with those that
                read them, calling your audience in and making them want more.
              </p>
              <p></p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <div>
              <div className="w-[75px] lg:w-[90px] h-[75px] lg:h-[90px] text-[35px] lg:text-[45px]  text-black font-bold  rounded-full flex items-center justify-center bg-[#FFB646]" >3+</div>
              <h5 className="text-[35px] lg:text-[45px]  text-black font-bold  !leading-[1] mb-5 lg:mb-6">Years of <br />  experience </h5>
              <a href="mailto:hassan4np@gmail.com" className="block" >
              <div className=" group  cursor-pointer rounded-[8px] p-4 lg:p-5 xl:p-6 bg-black  flex items-center justify-between">
                <a href="mailto:hassan4np@gmail.com" className="block">
                  <p className="text-sm lg:text-base xl:text-lg !leading-[1] text-[#C87427]  uppercase font-bold mb-2 ">SAY HELLO!</p>
                  <a href="#" className="font-bold text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] text-white ">hassan4np@gmial.com</a>
                </a>
                <a href="#" className="group-hover:transform group-hover:scale-[1.3]">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 34L34 14" stroke="#FFB646" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M14 14H34V34" stroke="#FFB646" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg></a>
              </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
