import { Col, Container, Row } from "./Grid"
import about from "../assets/img/about.png"
import { MdArrowOutward } from "react-icons/md"
import { ResumeLink } from "../components/constants"

export default function About() {
  const directDownloadLink = ResumeLink.replace(
    "https://drive.google.com/file/d/",
    "https://drive.google.com/uc?export=download&id="
  ).replace("/view?usp=sharing", "");
  return (
    <div className="about px-2 pt-20 xl:pt-[120px] 2xl:pt-[160px] pb-12 lg:pb-16 xl:pb-20 2xl:pb-[115px] bg-[#FFE9D9]">
      <Container>
        <Row className="justify-between items-center">
          <Col xs={12} md={6} lg={5} className="mb-5 md:mb-0">
            <div className=" w-full h-full lg:w-[526px] lg:h-[560px] mx-auto"><img className="w-full h-full" src={about} alt="" /></div>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <div>
              <p className="text-[#FF9640] text-base lg:text-lg xl:text-xl !leading-[1.4] font-bold mb-2">About me</p>
              <h4 className="text-[28px] lg:text-[32px] xl:text-[45px] 2xl:text-[64px] font-bold text-black md:tracking-[-1.5px] !leading-[1] capitalize ">hassan Ali </h4>
              <p className="text-black text-2xl mt-3 mb-2 md:mb-4 !leading-[1.6] font-bold capitalize">Web developer</p>
              <p className="text-lg xl:text-xl text-black  font-bold  leading-[1.4] mb-3 md:mb-5 lg:mb-6">As a  Web Developer with over 3 years of experience, I take pride in my work and am always ready to embrace the next challenge.</p>
              <p className="text-base xl:text-lg text-[rgba(8,8,8,0.6)] !leading-[1.5] mb-5 lg:mb-6 ">That's where I come in—a passionate wordsmith and copy expert. I craft copy that not only captures your essence and values but also resonates deeply with your audience, drawing them in and leaving a lasting impact.</p>
              <a
                href={directDownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className={` max-w-max text-sm lg:text-base border-none capitalize hover:transform hover:scale-[1.1] bg-[#080808] text-white rounded-lg font-bold !leading-[1] py-3 lg:py-4 px-6 lg:px-7 flex items-center gap-2`}
              >
                Resume
                <MdArrowOutward className="w-5 h-5" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
