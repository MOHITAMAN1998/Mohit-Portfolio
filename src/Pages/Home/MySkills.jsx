import frontendIcon from "../../assets/frontendicon.png";
import backendicon from "../../assets/backendicon.jpg";
import ui_uxicon from "../../assets/ui_uxicon.png";
import cplus from "../../assets/c++icon.png";
import android from "../../assets/andriodicon.png";

export default function MySkills() {
    const skills = [
        {
            id: 1,
            src: frontendIcon,
            title: "Front_End",
            description: "Hands-on experience on HTML, CSS, Javascript & React.Js"
        },
        {
            id: 2,
            src: backendicon,
            title: "Back-End Developer",
            description: "Worked on PHP as backend for one of my projects ensuring efficient management of database"
        },
        {
            id: 3,
            src: ui_uxicon,
            title: "UI & UX Design",
            description: "Creating user-friendly and visually appealing designs for seamless interactions."
        },
        {
            id: 4,
            src: cplus,
            title: "C++",
            description: "Acquired proficiency in every aspect of C++ and utilized this knowledge to solve over 464 problems on LeetCode, achieving a score of 1120 on GeeksforGeeks and a rating of 1500 on CodeChef."
        },
        {
            id: 5,
            src: android,
            title: "Android Developer",
            description: "Developed Java projects within Android Studio, encompassing essential features like intents, layouts, fragments, and views to create robust mobile applications."
        }
    ];

    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--section-heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {skills.map((item) => (
                    <div key={item.id} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} height={20} width={20} alt="Skill Icon" />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">
                                {item.title}
                            </h3>
                            <p className="skills--section--description">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
