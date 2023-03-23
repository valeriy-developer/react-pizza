const Button = props => {
  return (
    <button className="button" disabled={props.disabled}>
      {props.icon}
      {props.text}
    </button>
  )
}

export default Button
