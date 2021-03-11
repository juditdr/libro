import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <>
        {status === "" || status === "ERROR" ? (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/mbjpnyaz"
                method="POST"
            >
                <input type="email" name="email" required placeholder="E-mail usado en la compra"/>

                <input type="text" name="name" required placeholder="Nombre"/>

                <textarea type="text" name="message" rows="4" cols="30" required placeholder="Escribe aquí tu mensaje"/>

                <button>Enviar</button>
            </form>
        ) : null}
      {status === "SUCCESS" ? <><p>¡Gracias!</p><p className="thanks-tex2">Hemos recibido tu petición correctamente.</p></> : null}
      {status === "ERROR" ? <p>Ooops! Ha habido un error. Por favor, inténtalo de nuevo más tarde.</p> : null}
      </>
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