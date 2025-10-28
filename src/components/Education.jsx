import { Container } from "./Grid";
export default function Education() {
  const CardList = [
    {
      time: "2024",
      value: "Axtra",
      title: "Bsc Bachelor of Science",
    },
    {
      time: "2017",
      value: "Axtra",
      title: "Hsc Higher Secondary Certificate",
    },
    {
      time: "2015",
      value: "Axtra",
      title: "Ssc Secondary School Certificate",
    },

  ]
  return (
    <div className="education px-4">
      <div className="exp">
        <Container>
          <p className="text-black font-bold text-lg lg:text-xl xl:text-2xl !leading-[1.3] mb-5 lg:mb-6"> Education</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {CardList.map((item, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row   gap-x-14 lg:gap-x-14 xl:gap-x-[110px]  rounded-lg lg:rounded-2xl p-5 bg-[rgb(241,235,235)] hover:bg-white shadow-[2px_2px_4px] cursor-pointer">
                <div>
                  <p className="text-lg  text-black font-bold mb-3 lg:mb-4 flex items-center gap-2 "> <span className="w-2 h-2  inline-block rounded-full bg-[#FF9330] flex-[0_0_auto]"></span>{item.value}</p>
                  <p className="text-black font-bold text-xl xl:text-2xl !leading-[1.3]">{item.title}</p>
                </div>

              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}
