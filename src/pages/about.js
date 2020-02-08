import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import Head from "../components/head";
import aboutStyles from "../styles/about.module.scss";

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <div className={aboutStyles.layout}>
                <h1>Hi, I am John Doe! 😃</h1>
                <p>
                    I'm a Web developer experienced in alien-react.js and alien-node.js. I love designing and creating websites. I am a tenth year student pursuing an alien degree from University of Mars (Seriously?). 
                </p>
                <p>
                    I ❤️ Open Source with all my heart. I have contributed to 1, 2, 3. I have started blogging my day to day learnings to help beginners (Tbh, I am also a beginner! 😆). I love VSCode, GitHub, animals (especially dogs 🐶), music 🎵, TV shows 🎥, and food 🍟.
                </p>
                <p>
                    I am a curious person and I love learning new things. Time is precious, thanks for visiting my website, as a return gift here's an advice for you - Join Twitter and follow people experienced in your field to learn in a more efficient and fast way. My friend Kiki told me this and since then it has helped me so much. Here's a <a target="_blank" href="https://twitter.com/hackSultan/status/1143186098820194304">link</a> with a list of people you should follow.
                </p>
            </div>
        </Layout>
    )
}

export default AboutPage;