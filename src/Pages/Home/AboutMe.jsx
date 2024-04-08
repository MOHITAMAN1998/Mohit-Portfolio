import img from "../../assets/About_ME.jpg"

export default function AboutMe(){
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src={img} alt="About Me"/>
            </div>
            <div className="hero--section--content--box 
                about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills-section--heading">About Me
                    </h1>
                    <p className="hero--section--description">Hello there! I'm Mohit Aman, on a journey to mastery in the field of Computer Applications, currently enrolled in the Master of Computer Applications (MCA) program at Maulana Azad National Institute of Technology (MANIT), Bhopal. With a keen eye on the pulse of technology and its dynamic trends, I consider myself a tech enthusiast ready to tackle the challenges of tomorrow. </p>
                    <p className="hero--section--description">Driven by an unbounded thirst for knowledge, I pride myself on being a quick and adaptable learner. I am passionate about leveraging my expertise to make meaningful contributions to esteemed organizations.  </p>
                </div>
            </div>
        </section>
    );
}