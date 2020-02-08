import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import headerStyles from './header.module.scss';

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import email from "../../assets/email.svg";
import menu from "../../assets/menu.svg";

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    github
                    linkedin
                    twitter
                    email
                }
            }
        }
    `)
    let dispState = false;
    let icons = React.createRef();
    function showMenu() {
        icons.current.style.transform = dispState ? 'rotateX(90deg)' : 'rotateX(0deg)';
        dispState = !dispState;
    }
    return (
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                </ul>
                <span><img onClick={() => showMenu()} src={menu} className={headerStyles.menu}/></span>
                <ul ref={icons} className={headerStyles.socialLinks}>
                    <li><a href={"mailto:"+data.site.siteMetadata.email} target="_blank"><img src={email} /></a></li>
                    <li><a href={data.site.siteMetadata.github} target="_blank"><img src={github} /></a></li>
                    <li><a href={data.site.siteMetadata.linkedin} target="_blank"><img src={linkedin} /></a></li>
                    <li><a href={data.site.siteMetadata.twitter} target="_blank"><img src={twitter} /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;