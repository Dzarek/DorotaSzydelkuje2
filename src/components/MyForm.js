import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/ContactPage.css";
import emailjs from "emailjs-com";

class MyForm extends Component {
  state = {
    status: "",
  };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bluxqcj",
        "template_rxmr3mj",
        e.target,
        "user_hMGLIzZtMljfB9Ssj5uYj"
      )
      .then(
        () => {
          e.target.reset();
          this.setState({ status: "SUCCESS" });
        },
        () => {
          this.setState({ status: "ERROR" });
        }
      );
  };
  render() {
    const { status } = this.state;
    return (
      <form onSubmit={this.sendEmail}>
        <h1>
          Masz pytania lub chcesz coś zamówić? <br /> Napisz do mnie!
        </h1>

        <input type="text" name="name" placeholder="Imię i nazwisko" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <br />
        <textarea
          placeholder="Twoja wiadomość..."
          name="message"
          required
        ></textarea>
        <br />
        <label className="labelCheck" htmlFor="accept">
          <p>
            <input type="checkbox" id="accept" name="accept" required />
            Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na
            mojego e-maila{" "}
            <span>
              {" "}
              <NavLink className="cookieLink" to="/cookie">
                (Polityka Prywatności)
              </NavLink>
            </span>
          </p>
        </label>
        <br />
        {status === "SUCCESS" ? (
          <p style={{ fontSize: "30px" }}>Wiadomość wysłana! </p>
        ) : (
          <button>Wyślij</button>
        )}
        {status === "ERROR" && (
          <p style={{ fontSize: "30px" }}>ups... coś poszło nie tak!</p>
        )}
      </form>
    );
  }
}
export default MyForm;
