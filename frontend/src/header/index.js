import React from "react";
import "./header.css";
import { ReactComponent as Logo } from "./Axelerant-Logo-color.svg";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header__wrapper">
          <div className="header__container flex-container">
            <Logo />
            <div>
              <a
                class="contact__cta-button"
                href="https://www.axelerant.com/contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </header>
        <h1 class="page__title">Axelerant Sales GPT</h1>
      </>
    );
  }
}
