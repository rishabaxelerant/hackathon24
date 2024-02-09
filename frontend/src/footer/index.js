import React from "react";
import "./footer.css";

export default class Header extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="region region-footer flex-container-desktop">
          <div className="region-inner flex-container-desktop footer__container content-wrapper">
            <nav className="footer-navigation menu-footer">
              <ul role="menu" className="active-branch flex-container-desktop">
                <li
                  className="footer-menu__item footer-menu__depth-1 footer-menu__item-has-children"
                  role="none"
                >
                  <h3 className="footer__menu-title">Who We Are</h3>
                  <ul role="menu" className="footer-menu__children-wrapper">
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a href="https://www.axelerant.com/about" role="menuitem">
                        About Us
                      </a>
                    </li>
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a
                        href="https://www.axelerant.com/careers"
                        role="menuitem"
                      >
                        Careers
                      </a>
                    </li>
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a
                        href="https://axelerant.atlassian.net/wiki/spaces/OA/overview"
                        role="menuitem"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open Handbook
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="footer-menu__item footer-menu__depth-1 footer-menu__item-has-children"
                  role="none"
                >
                  <h3 className="footer__menu-title">What We Do</h3>
                  <ul role="menu" className="footer-menu__children-wrapper">
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a
                        href="https://www.axelerant.com/services"
                        role="menuitem"
                      >
                        Services
                      </a>
                    </li>
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a href="https://www.axelerant.com/blog" role="menuitem">
                        Blog
                      </a>
                    </li>
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a
                        href="https://www.axelerant.com/success-stories"
                        role="menuitem"
                      >
                        Work
                      </a>
                    </li>
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a
                        href="https://www.axelerant.com/industries"
                        role="menuitem"
                      >
                        Industries
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="footer-menu__item footer-menu__depth-1 footer-menu__item-has-children"
                  role="none"
                >
                  <h3 className="footer__menu-title">How We Do</h3>
                  <ul role="menu" className="footer-menu__children-wrapper">
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a
                        href="https://www.axelerant.com/delivery-engagement-models/managed-projects"
                        role="menuitem"
                      >
                        Managed Projects
                      </a>
                    </li>
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a
                        href="https://www.axelerant.com/delivery-engagement-models/staff-augmentation"
                        role="menuitem"
                      >
                        Staff Augmentation
                      </a>
                    </li>
                    <li
                      className="footer-menu__item footer-menu__depth-2"
                      role="none"
                    >
                      <a
                        href="https://www.axelerant.com/delivery-engagement-models/continuous-development-and-maintenance"
                        role="menuitem"
                      >
                        Continuous Development And Maintenance
                      </a>
                    </li>
                    <li
                      className="footer-menu__item footer-menu__depth-2 l-show"
                      role="none"
                    >
                      <h3 className="footer__menu-title">Contact Us</h3>
                      <ul role="menu" className="footer-menu__children-wrapper">
                        <li
                          className="footer-menu__item footer-menu__depth-3"
                          role="none"
                        >
                          <a
                            href="https://www.axelerant.com/contact"
                            role="menuitem"
                          >
                            Request for Services
                          </a>
                        </li>
                        <li
                          className="footer-menu__item footer-menu__depth-3"
                          role="none"
                        >
                          <a
                            href="https://axelerant.pinpointhq.com/register-your-interest/new"
                            role="menuitem"
                          >
                            Join us!
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div className="Axl-contact-info">
              <h3 className="footer__menu-title">Connect With Us</h3>
              <div className="footer-content">
                <ul className="social_list flex-container">
                  <li>
                    <a
                      href="https://www.facebook.com/axelerant"
                      role="menuitem"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <img
                          src="https://www.axelerant.com/hubfs/Axelerant-2022/images/Axelerant_Facebook_link.svg"
                          alt="Axelerant Facebook Link"
                          width="44"
                          height="44"
                        />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/axelerant"
                      role="menuitem"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <img
                          src="https://www.axelerant.com/hubfs/Axelerant-2022/images/Axelerant_LinkedIn_link.svg"
                          alt="Axelerant LinkedIn Link"
                          width="44"
                          height="44"
                        />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/axelerantcom/"
                      role="menuitem"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <img
                          src="https://www.axelerant.com/hubfs/Axelerant-2022/images/Axelerant_Instagram_link.svg"
                          alt="Axelerant Instagram Link"
                          width="44"
                          height="44"
                        />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/axelerant"
                      role="menuitem"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <img
                          src="https://www.axelerant.com/hubfs/twitter-X.svg"
                          alt="Axelerant Twitter Link"
                          width="44"
                          height="44"
                        />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@Axelerant"
                      role="menuitem"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <img
                          src="https://www.axelerant.com/hubfs/Axelerant-2022/images/Axelerant_YT_link.svg"
                          alt="Axelerant YouTube Link"
                          width="44"
                          height="44"
                        />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="join_us_field xs-show">
                <div className="footer-menu__item footer-navigation">
                  <h3 className="footer__menu-title">Contact Us</h3>
                  <div className="footer-content">
                    <ul className="contact_list">
                      <li>
                        <a href="https://www.axelerant.com/contact">
                          Request for Services
                        </a>
                      </li>
                      <li>
                        <a href="https://www.axelerant.com/contact#join_us">
                          Join us!
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="region region-secondary-footer footer__container flex-container-desktop content-wrapper">
          <div className="cm-copyright-block">
            <p>&copy; 2023 Axelerant. All Rights Reserved.</p>
          </div>

          <div className="footer-social-media-links footer-links">
            <ul>
              <li>
                <a href="https://www.axelerant.com/privacy-policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
