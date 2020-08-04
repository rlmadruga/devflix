import React from "react";
import { FooterBase } from "./styles";
import logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <FooterBase>
      <img src={logo} width="150px" alt="Logo DevFlix" />

      <p>
        Proudly created during{" "}
        <a href="https://www.alura.com.br/">Alura's React Immersion</a> 💚
      </p>
    </FooterBase>
  );
}

export default Footer;
