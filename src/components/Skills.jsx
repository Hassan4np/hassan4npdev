import {Container} from "./Grid";
import { FaReact, FaNodeJs, FaWordpress, FaBootstrap, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill,RiNextjsLine  } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { SiExpress, SiShopify } from "react-icons/si";
export default function Skills() {
  const CardList = [
    {
      title: "React Js",
      icon: <FaReact className="size-full text-[#201F1F]" />,
    },

    {
      title: "Next Js",
      icon: <RiNextjsLine className="size-full text-[#201F1F]" />,
    },
    {
      title: "Wordpress",
      icon: <FaWordpress className="size-full text-[#201F1F]" />,
    },
    {
      title: "Shopify",
      icon: <SiShopify className="size-full text-[#201F1F]" />,
    },
    {
      title: "Mongodb",
      icon: <TbBrandMongodb className="size-full text-[#201F1F]" />,
    },
    {
      title: "Node Js",
      icon: <FaNodeJs className="size-full text-[#201F1F]" />,
    },
    {
      title: "Express Js",
      icon: <SiExpress className="size-full text-[#201F1F]" />,
    },
    {
      title: "Tailwindcss",
      icon: <RiTailwindCssFill className="size-full text-[#201F1F]" />,
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap className="size-full text-[#201F1F]" />,
    },
    {
      title: "Figma ",
      icon: <FaFigma className="size-full text-[#201F1F]" />,
    },

  ]
  return (
    <div className="skills px-4 ">
      <Container>
        <p className="text-black font-bold text-lg lg:text-xl xl:text-2xl !leading-[1.3] mb-5 lg:mb-6">Skills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
          {CardList.map((item, idx) => (
            <div key={idx} className=" flex gap-3 items-center lg:gap-4 rounded-md  py-6 lg:py-7 xl:py-[30px] px-5 lg:px-6 xl:px-7 bg-[rgb(241,235,235)] hover:bg-white shadow-[2px_2px_4px] cursor-pointer">
              <span className="block size-7 md:size-8">{item.icon}</span>
              <p className="text-black font-bold text-lg lg:text-xl xl:text-2xl !leading-[1.3]">{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
