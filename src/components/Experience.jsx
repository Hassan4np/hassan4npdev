import { Col, Container, Row } from "./Grid";

export default function Experience() {
  const CardList = [
    {
      time:"03/216 - Running",
      value:"Axtra",
      title:"Lead digital marketer",
    },
    {
      time:"03/216 - Running",
      value:"Axtra",
      title:"Product designer",
    },
    {
      time:"03/216 - Running",
      value:"Axtra",
      title:"UX researcher",
    },
    
  ]
  return (
    <div className="exp px-4">
      <Container>
        <p className="text-black font-bold text-lg lg:text-xl xl:text-2xl !leading-[1.3] mb-5 lg:mb-6"> Experience</p>
        <Row>
        {CardList.map((item,idx)=>(
            <Col xs={12} md={6} className="mb-4 lg:mb-5 " key={idx}>
            <div className="rounded-lg lg:rounded-2xl py-6 lg:py-7 xl:py-[30px] px-5 lg:px-6 xl:px-7 bg-[rgb(241,235,235)] hover:bg-white shadow-[2px_2px_4px] cursor-pointer">
              <p className="text-lg !leading-[1.5] text-black font-semibold mb-6 lg:mb-7 xl:mb-8 ">{item.time}</p>
              <p className="text-base lg:text-lg  text-black font-bold mb-3 lg:mb-4 flex items-center gap-2 "> <span className="w-2 h-2  inline-block rounded-full bg-[#FF9330] flex-[0_0_auto]"></span>{item.value}</p>
              <p className="text-black font-bold text-lg lg:text-xl xl:text-2xl !leading-[1.3]">{item.title}</p>
            </div> 
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}
