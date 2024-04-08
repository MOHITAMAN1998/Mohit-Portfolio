import img from "../../assets/MOHIT AMAN1.jpg"

export default function HeroSection()
{
    return (
        <section id="heroSection" className="hero--section">
                <div className="hero--section--content--box">
                    <div className="hero--section--content">
                        <p className="section--title">Hey,I'm Mohit Aman</p>
                        <h1 className="hero--section--title">
                            <span className="hero--section--title--color">Welcome to my</span>{" "}
                            <br/>
                            Portfolio
                        </h1>
                        <p className="hero--section-description">
                         This space is your gateway to discovering everything about me from my skills and expertise to all the details you need. Let's explore and connect! 
                        </p>
                    </div>

                </div>
                <div className="hero--section--img">
                    <img src={img} alt="Hero Section"/>
                </div>
        </section>
    );
}