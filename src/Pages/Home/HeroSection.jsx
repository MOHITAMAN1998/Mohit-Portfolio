import img from "../../assets/MOHIT_AMAN.png";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Mohit Aman</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Welcome to my</span>{" "}
                        <br />
                        Portfolio
                    </h1>
                    <p className="hero--section-description">
                        This space is your gateway to discovering everything about me from my skills and expertise to all the details you need. Let's explore and connect!
                    </p>
                </div>
                <a href="https://github.com/MOHITAMAN1998/resume" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Resume</a>
            </div>
            <div className="hero--section--img">
            <img
                src={img}
                style={{
                borderRadius: "500px",
                boxShadow: "2px 5px 15px rgba(0, 0, 0, 0.5)",
                maxWidth: "100%",
                height: "auto",
                "@media (max-width: 768px)": {
                    maxWidth: "50%", 
                }
                }}
                alt="Hero Section"
            />
            </div>

        </section>
    );
}
