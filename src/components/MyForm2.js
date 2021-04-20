import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/ContactPage.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xeqpbwaa"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
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
          {/* <input type="checkbox" id="accept" name="accept" required /> */}
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
          <p>Wiadomość wysłana! </p>
        ) : (
          <button>Wyślij</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
