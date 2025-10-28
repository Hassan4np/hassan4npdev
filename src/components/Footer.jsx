import { Link } from "react-scroll";
import { Col, Container, Row } from "./Grid";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const Icons = [
    {
      url: "https://www.facebook.com/hassan4np",
      img: <FaFacebook />
    },
    {
      url: "https://www.linkedin.com/in/hassan4np",
      img: <FaLinkedin />
    },
    {
      url: "https://github.com/Hassan4np",
      img: <FaGithub />
    },
  ]
  return (
    <div className="footer bg-black pt-12 lg:pt-16 xl:pt-20 2xl:pt-[100px] pb-12 lg:pb-16 px-3">
      <Container>
        <div className="mb-5 lg:mb-6">
          <Row>
            <Col xs={12} md={6} lg={4} className="mb-5 md:mb-0">
              <div className="h-full">
                <h4 className="text-[32px] xl:text-[45px] 2xl:text-[64px] font-bold text-white tracking-[-1.5px] !leading-[1] capitalize ">Le t’s work<br />together</h4>
                <div className="mt-4 lg:mt-5 flex items-center gap-4 lg:gap-5 ">
                  <p className="text-base lg:text-lg  xl:text-xl font-bold text-white !leading-[1.4]">Based in Bangladesh |</p>
                  <div className="icons flex items-center gap-3 lg:gap-4 ">
                    {Icons.map((item, idx) => (
                      <a key={idx} target="_blank" href={`${item.url}`}>{item.img}</a>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-5 lg:mb-0">
              <a href="mailto:hassan4np@gmail.com" className=" w-full inline-block cursor-pointer   h-full border border-[rgba(255,255,255,0.2)] rounded-lg lg:rounded-[16px] p-4 lg:p-5 xl:p-6">
                <p className="text-base lg:text-lg  xl:text-xl font-bold text-white !leading-[1.4]">Looking for a Developer?</p>
                <div className="mt-[14%]">
                  <div className="flex  items-center justify-between gap-5 lg:gap-6 w-full">
                    <p className="text-base lg:text-lg  xl:text-xl font-bold text-[#FF9330] !leading-[1.4]">hassan4np@gmail.com</p>
                    <p href="#" className="inline-block">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 28.3334L28.3334 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M11.6667 11.6667H28.3334V28.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <a href="tel:+8801723461543" className=" w-full inline-block cursor-pointer   h-full border border-[rgba(255,255,255,0.2)] rounded-lg lg:rounded-[16px] p-4 lg:p-5 xl:p-6">
                <p className="text-base lg:text-lg  xl:text-xl font-bold text-white !leading-[1.4]">Want a more in-depth look at my history?</p>
                <div className="mt-[14%]">
                  <div className="flex  items-center justify-between gap-5 lg:gap-6 w-full">
                    <p className="text-base lg:text-lg  xl:text-xl font-bold text-[#FF9330] !leading-[1.4]">+8801723461543</p>
                    <p href="#" className="inline-block">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 28.3334L28.3334 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M11.6667 11.6667H28.3334V28.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </div>
        <div className="md:flex  items-center justify-between pt-3 border-t border-[#393939]">
          <p className="text-base lg:text-lg text-white !leading-[1.5] font-semibold mb-4 md:mb-0">©{currentYear} Hassan Ali, All Rights Reserved</p>
          <Link to="about"  className=" cursor-pointer text-base lg:text-lg text-white !leading-[1.5] font-semibold flex items-center gap-2">Back to top
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5" stroke="#FFB646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M19 12L12 5L5 12" stroke="#FFB646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </Link>
        </div>
      </Container>
    </div>
  )
}
