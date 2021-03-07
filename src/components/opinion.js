function Opinion(props) {
  return (
    <div className="opinion">
        <img src={`${process.env.PUBLIC_URL}${props.image}`}/>
        <div className="text">
            {props.text}
        </div>
        <div className="name">
            {props.name}
        </div>
        <div className="description">
            {props.description}
        </div>
    </div>
  );
}

export default Opinion;