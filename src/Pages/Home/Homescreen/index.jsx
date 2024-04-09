import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import Myportfolio from "../MyPortfolio";
import Footer from "../Footer";

export default function Home()
{
    return (
        <div style={{display:"fixed"}}>
        <HeroSection/>
        <MySkills/>
        <AboutMe/>
        <Myportfolio/>
        <Footer/>
       </div>
    )
}