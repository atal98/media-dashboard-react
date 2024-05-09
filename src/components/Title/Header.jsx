import React, { useEffect } from "react";
import "./header.scss";
function Header() {
  useEffect(() => {
    const darkButton = document.getElementById("dark");
    const lightButton = document.getElementById("light");

    const setDarkMode = () => {
      document.querySelector("body").classList = "dark";
      localStorage.setItem("colorMode", "dark");
    };

    const setLightMode = () => {
      document.querySelector("body").classList = "light";
      localStorage.setItem("colorMode", "light");
    };

    const colorModeFromLocalStorage = () => {
      return localStorage.getItem("colorMode");
    };

    const colorModeFromPreferences = () => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"; // If preference is set or does not match anything (light is default)
    };

    const loadAndUpdateColor = () => {
      // local storage has precedence over the prefers-color-scheme
      const color = colorModeFromLocalStorage() || colorModeFromPreferences();
      color === "dark" ? darkButton.click() : lightButton.click();
    };

    // when the inputs are clicked, check which radio button is checked and change the color
    const radioButtons = document.querySelectorAll(".toggle__wrapper input");
    radioButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        darkButton.checked ? setDarkMode() : setLightMode();
      });
    });

    // when the prefers-color-scheme changes, this event will be emitted
    // event reflects the media query, if it matches, the new color is dark, else it is light
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        event.matches ? darkButton.click() : lightButton.click();
      });

    // Load the right color on startup - localStorage has precedence
    loadAndUpdateColor();

    // Clean up event listeners when component unmounts
    return () => {
      radioButtons.forEach((button) => {
        button.removeEventListener("click", (event) => {
          darkButton.checked ? setDarkMode() : setLightMode();
        });
      });
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (event) => {
          event.matches ? darkButton.click() : lightButton.click();
        });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <header className="header container">
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
        <span className="header__subtitle">Total Followers: 23,004</span>
      </div>
      <fieldset
        className="header__toggle toggle"
        aria-label="theme toggle"
        role="radiogroup"
      >
        <label htmlFor="dark">
          Dark Mode <span className="visually-hidden">On</span>
        </label>
        <div className="toggle__wrapper">
          <input type="radio" name="theme" id="dark" />
          <input type="radio" name="theme" id="light" />
          <span aria-hidden="true" className="toggle__background"></span>
          <span aria-hidden="true" className="toggle__button"></span>
        </div>
        <label htmlFor="light" className="visually-hidden">
          Dark Mode Off
        </label>
      </fieldset>
    </header>
  );
}

export default Header;
