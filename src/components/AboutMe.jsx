import { Col, Container, Row } from "./Grid";
import img from "../assets/img/about-me.png"

export default function AboutMe() {
  const DetailsList = [
    {
      title:"Name",
      des:"Hassan Ali",
    },
    {
      title:"Nationality",
      des:"Bangladesh",
    },
    {
      title:"Phone",
      des:"+8801723461543",
    },
    {
      title:"Email",
      des:"hassan4np@gmail.com",
    },
    {
      title:"Experience",
      des:"3+ years",
    },
    {
      title:"Freelance",
      des:"Freelance",
    },
    {
      title:"WhatsApp",
      des:"+8801723461543",
    },
    {
      title:"Language",
      des:"Bangla, English",
    },
  ]
  return (
    <div className="about-me px-2 ">
      <Container>
        <Row className="justify-between">
          <Col xs={12} md={6} lg={4} className="mb-5 md:mb-0">
            <div className="w-full lg:w-[409px] h-full lg:h-[492px]"><img src={img} className="w-full h-full" alt="" /></div>
          </Col>
          <Col xs={12} md={6} lg={7}>
            <div>
              <p className="text-black !leading-[1.6] font-bold text-lg lg:text-xl xl:text-2xl mb-5 lg:mb-6">About Me</p>
              <p className="text-[rgba(8,8,8,0.6)] text-sm lg:text-base xl:text-lg !leading-[1.4] mb-4 lg:mb-5">
              Hassan Ali - A <span className="text-black"> Web Development</span> with a Global Reach.
              I’m here to craft words that truly capture your essence and convey your purpose. Passionate about creating copy that reflects who you are and what you stand for. Code and design that truly connect with your audience, engaging them and leaving them wanting more.</p>
              <div className="pt-5">
                {DetailsList.map((item,idx)=>(
                   <div className="flex items-center gap-7 lg:gap-8 mb-3 last:mb-0" key={idx}>
                   <p className="w-[120px] text-[rgba(8,8,8,0.6)] text-sm lg:text-base xl:text-lg !leading-[1]">{item.title}</p>
                   <p className="text-black font-bold text-lg lg:text-xl xl:text-2xl !leading-[1.3]">{item.des}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
