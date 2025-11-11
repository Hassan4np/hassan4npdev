import { Container } from "./Grid";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            title: "Founder, TechWave",
            image: "https://i.pravatar.cc/100?img=12",
            feedback:
                "Working with Hassan was an absolute pleasure. He perfectly understood our requirements and delivered a stunning website on time!",
        },
        {
            name: "Sarah Lee",
            title: "CEO, PixelVerse",
            image: "https://i.pravatar.cc/100?img=5",
            feedback:
                "Hassan is a talented developer! His attention to detail and creative approach made our project stand out beautifully.",
        },
        {
            name: "David Kim",
            title: "Project Manager, Webify",
            image: "https://i.pravatar.cc/100?img=33",
            feedback:
                "Very professional and easy to work with. I’m impressed by his problem-solving skills and quick communication.",
        },
       
    ];
    return (
        <section className="bg-[#FFE9D9] py-10 lg:py-16 xl:py-20 px-3 lg:px-4" id="testimonials">
            <Container>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 lg:mb-8 xl:mb-10">
                        What My Clients Say
                    </h2>

                    <div className="grid gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white flex justify-between flex-col rounded-2xl shadow-md p-4 lg:p-5 xl:p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                            >
                                <div>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-15 lg:w-20 h-15 lg:h-20 mx-auto rounded-full mb-5 object-cover"
                                    />
                                    <p className="text-black text-lg lg:text-xl italic mb-5">{item.feedback}</p>
                                </div>
                                <div>
                                    <h4 className="text-xl lg:text-2xl font-semibold text-black">
                                        {item.name}
                                    </h4>
                                    <p className="text-base lg:text-lg text-black">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
