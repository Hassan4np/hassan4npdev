import { useState } from "react";
import { Container } from "./Grid"
import { MdArrowOutward } from "react-icons/md";
import AboutMe from "./AboutMe";
// import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export default function Details() {
  const [Item, setItem] = useState("About me")
  const BtnList = [
    "About me", "Skills", "Education"
  ]
  return (
    <div className="details bg-[#F0F1F4] py-12 lg:py-20 xl:py-[100px] ">
      <Container>
        <div className="text-center mb-4 lg:mb-5">
          <p className="text-[#FF9640] text-base lg:text-lg xl:text-xl !leading-[1.4] font-bold mb-2">Resume</p>
          <h4 className="text-2xl lg:text-[32px] xl:text-[45px] 2xl:text-[64px] font-bold text-black tracking-[-1.5px] !leading-[1] capitalize ">All over my details find here...</h4>
        </div>
        <div className="text-center flex items-center justify-center mb-4 lg:mb-5">
          <div className="overflow-auto  scroll-bar">
            <div className=" w-[650px] md:w-full flex items-center gap-4 lg:gap-5">
              {BtnList.map((item, idx) =>
                <button onClick={() => setItem(item)} key={idx} className={` ${item === Item ? "!bg-[#080808] !text-white " : ""} text-sm lg:text-base border-none transform duration-300 capitalize hover:bg-[#080808] hover:text-white text-[#080808] bg-white rounded-lg font-bold !leading-[1] py-3 lg:py-4 px-6 lg:px-7 flex items-center gap-2`}>
                  {item}
                  <MdArrowOutward className="w-5 h-5" />
                </button>)}
            </div>
          </div>
        </div>
        <div className="pt-5 lg:pt-6">
          {Item === "About me" && <AboutMe />}
          {/* {Item === "Experience" && <Experience />} */}
          {Item === "Skills" && <Skills />}
          {Item === "Education" && <Education />}
        </div>
      </Container>
    </div>
  )
}
