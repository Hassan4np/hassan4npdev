import { useState } from "react";
import { Container } from "./Grid";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../assets/img/project1.jpg";
import img2 from "../assets/img/project2.jpg";
import img3 from "../assets/img/project3.png";
import img4 from "../assets/img/project4.png";
import img5 from "../assets/img/project5.png";
import img6 from "../assets/img/project7.png";
import img7 from "../assets/img/project6.png";
import img8 from "../assets/img/project8.png";
import img9 from "../assets/img/project9.png";
import img10 from "../assets/img/project10.png";
import img11 from "../assets/img/project11.png";
import img12 from "../assets/img/project12.png";
import img13 from "../assets/img/project13.png";
import img14 from "../assets/img/project14.png";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const CardList = [
    {
      url: "https://xbitupro4.netlify.app",
      img: img3,
      title: "Endless",
      des: " Web Design & Development",
    },
    {
      url: "https://jade-malabi-45c537.netlify.app",
      img: img4,
      title: "Jade Malabi",
      des: " Web Design & Development",
    },
    {
      url: "https://pondx-meme.netlify.app",
      img: img5,
      title: "Icat",
      des: " Web Design & Development",
    },
    {
      url: "https://duck4.netlify.app/",
      img: img6,
      title: "Duck",
      des: " Web Design & Development",
    },
    {
      url: "https://icat4.netlify.app",
      img: img7,
      title: "Pondx",
      des: " Web Design & Development",
    },
    {
      url: "https://b8a12-project.web.app",
      img: img1,
      title: "Advertisement",
      des: " Web Design & Development",
    },
    {
      url: "https://zdn.netlify.app",
      img: img8,
      title: "Zdn Dashboard",
      des: " Web Design & Development",
    },
    {
      url: "https://axom12.netlify.app",
      img: img9,
      title: "Axom",
      des: " Web Design & Development",
    },
    {
      url: "https://aureal12.netlify.app",
      img: img10,
      title: "Aureal LandingPage",
      des: " Web Design & Development",
    },
    {
      url: "https://the-morning-posts.surge.sh",
      img: img2,
      title: "News Portal",
      des: " Web Design & Development",
    },
    {
      url: "https://beluga12.netlify.app/",
      img: img11,
      title: "Beluga",
      des: " Web Design & Development",
    },
    {
      url: "https://flimfund12.netlify.app",
      img: img12,
      title: "FlimFund",
      des: " Web Design & Development",
    },
    {
      url: "https://trend-token12.netlify.app",
      img: img13,
      title: "Trend Token",
      des: " Web Design & Development",
    },
    {
      url: "https://bit-canex.netlify.app/",
      img: img14,
      title: "Bit Canex",
      des: " Web Design & Development",
    },
  ];
  const displayedItems = showAll ? CardList : CardList.slice(0, 12);
  return (
    <div className="portfolio py-12 lg:py-20 xl:py-25 px-4 bg-white">
      <Container>
        <div className="mb-6 lg:mb-8 xl:mb-10 text-center">
          <p className="text-[#FF9640] text-lg xl:text-xl !leading-[1.4] font-bold mb-2">
            Portfolio
          </p>
          <h4 className="text-2xl lg:text-[32px] xl:text-[45px] 2xl:text-[64px] font-bold text-black tracking-[-1.5px] !leading-[1] capitalize">
            My recent work
          </h4>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-3">
            {displayedItems.reverse().map((item, idx) => (
              <a key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg xl:rounded-xl  shadow-lg border inline-block hover:transform hover:scale-[1.02] "
              >
                <img
                  src={item.img}
                  className="rounded-t-lg xl:rounded-t-xl  w-full h-[180px] xl:h-[180px] 2xl:h-[220px]"
                  alt={item.title}
                />
                <div className="px-4 lg:px-5 pb-5 lg:pb-6">
                  <p className="text-black font-bold text-lg lg:text-xl xl:text-2xl !leading-[1.5] pt-3 lg:pt-4">
                    {item.title}
                  </p>
                  <p className="text-black text-sm lg:text-base xl:text-lg font-bold !leading-[1]">
                    {item.des}
                  </p>
                </div>
              </a>
            ))}
          </div>
          {CardList.length > 12 && !showAll && (
            <div className="flex justify-center mt-5 lg:mt-6">
              <button
                onClick={() => setShowAll(true)}
                className="text-sm lg:text-base border-none capitalize hover:transform hover:scale-[1.1] bg-[#080808] text-white rounded-lg font-bold !leading-[1] py-3 lg:py-4 px-6 lg:px-7 flex items-center gap-2"
              >
                View All
                <MdArrowOutward className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
