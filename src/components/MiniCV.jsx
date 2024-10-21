import'./MiniCV.css'
import { ReactLogo, CssLogo, HtmlLogo, JsLogo, TailwindLogo, GitHubLogo, GitLogo, MongoDBLogo, PostmanLogo, SQLLogo, JestLogo, FirebaseLogo } from '../assets/logos.jsx'

function MiniCV() {
    return (
        <>
            <aside className='cv-card'>
                <h3>Ángel F. Gento</h3><br/>
                <h4>Front-end Developer</h4>
                <p>I studied full-stack programming at one of the top academies in the country: The Bridge - Talent Accelerator. I learned the necessary technologies for both back-end and front-end development,
                     and although I enjoy back-end, I’m more drawn to front-end.</p>
            
            <div className='cv-content'>
                <div className='langLogos'>
                    <h4>Skills</h4> 
                    <ul className='skillContainer'>
                        <li><CssLogo /></li>
                        <li><HtmlLogo /></li>
                        <li><JsLogo /></li>
                        <li><ReactLogo /></li>
                        <li><TailwindLogo /></li>
                        <li><GitLogo /></li>
                        <li><GitHubLogo /></li>
                        <li><MongoDBLogo /></li>
                        <li><PostmanLogo /></li>
                    </ul>
                    <h4>Work in progress...</h4>
                    <ul className='skillContainer'>
                        <li><JestLogo /></li>
                        <li><SQLLogo /></li>
                        <li><FirebaseLogo /></li>
                    </ul>
                </div>
                
            </div>
            </aside>
        </>
    )
}

export default MiniCV

