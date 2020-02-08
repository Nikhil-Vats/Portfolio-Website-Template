import React from "react";

import Layout from "../components/layout/layout";
import Head from "../components/head";
import Form from "../components/form/form";
import contactStyles from "../styles/contact.module.scss";
import contactUs from "../assets/contact_us.svg";
const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className={contactStyles.details}>
                <img src={contactUs} className={contactStyles.image}/>   
                <Form className={contactStyles.form}/>
            </div>
        </Layout>
    )
}

export default ContactPage;