import Form from "./form.js";

function Thanks(props) {
    return (
      <>
        <div className="thanks">
          <img className="thanks-img" src={`${process.env.PUBLIC_URL}/images/cover.jpg`}/>
          <div className="thanks-text">
              <h3>
                  ¡Muchas gracias por tu pedido!
              </h3>
              <p>En breve, recibirás más información en el correo electrónico especificado durante el proceso de compra.</p>

              <p>Si deseas una dedicatoria personal por parte de la autora, por favor, rellena el siguiente formulario.</p>
              <Form />
          </div>
        </div>
      </>
    );
}
  
export default Thanks;