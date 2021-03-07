function Thanks(props) {
    return (
      <div className="thanks">
        <img className="thanks-img" src={`${process.env.PUBLIC_URL}/images/cover.jpg`}/>
        <p className="thanks-text">
            <h3>
                ¡Muchas gracias por tu pedido!
            </h3>
            En breve, recibirás más información en el correo electrónico especificado durante el proceso de compra.
        </p>
      </div>
    );
}
  
export default Thanks;