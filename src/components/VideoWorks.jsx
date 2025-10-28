import { useRef, useState } from "react";
import { Container } from "./Grid";
import { FaPlayCircle } from "react-icons/fa";
import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video1.mp4";
import video3 from "../assets/video/video1.mp4";
import video4 from "../assets/video/video1.mp4";

export default function VideoWorks() {
    const videoRefs = useRef([]);
    const [playingIndex, setPlayingIndex] = useState(null);

    const handlePlay = (idx) => {
        videoRefs.current.forEach((video, i) => {
            if (video && !video.paused && i !== idx) {
                video.pause();
            }
        });
        const selectedVideo = videoRefs.current[idx];
        if (selectedVideo) {
            selectedVideo.play();
            setPlayingIndex(idx);
        }
    };
    const videoList = [video1, video2, video3, video4];
    return (
        <div className="video-works py-12 lg:py-20 xl:py-[100px] bg-[#FFE9D9]">
            <Container>
                <div className="mb-6 lg:mb-8 xl:mb-10 text-center">
                    <p className="text-[#FF9640] text-lg xl:text-xl !leading-[1.4] font-bold mb-2">Video</p>
                    <h4 className="text-2xl lg:text-[32px] xl:text-[45px] 2xl:text-[64px] font-bold text-black tracking-[-1.5px] !leading-[1] capitalize">Works video</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {videoList.map((item, idx) => (
                        <div key={idx} className="relative w-full md:h-[250px] lg:h-[300px] group">
                            <video
                                ref={(el) => (videoRefs.current[idx] = el)}
                                className="w-full h-full object-cover rounded-lg"
                                loop
                                controls={playingIndex === idx}
                            >
                                <source src={item} type="video/mp4" />
                            </video>

                            {/* Play Button */}
                            {playingIndex !== idx && (
                                <button
                                    onClick={() => handlePlay(idx)}
                                    className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 text-white text-xl rounded-lg transition duration-300"
                                >
                                    <FaPlayCircle className="size-8" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
