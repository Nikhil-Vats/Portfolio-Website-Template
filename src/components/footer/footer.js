import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import react from "../../assets/react.svg";
import gatsby from "../../assets/gatsby.svg";
import like from "../../assets/like.svg";
import footerStyles from "./footer.module.scss";

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <div className={footerStyles.footer}>
            {/* You can change {data.site.siteMetadata.author} to {data.site.siteMetadata.title} 
            and change the corresponding link to have your name on the footer instead 
            but it would be awesome if you can keep my name on the footer to give me credit! 
            (Thank you awesome person!) */}
            <h6>{'</> by'} <a href="https://github.com/Nikhil-Vats">{data.site.siteMetadata.author}</a> with <img src={like}/> using <img src={gatsby}/> and <img src={react} />© {new Date().getFullYear()}.</h6>
        </div>
    )
}

export default Footer;