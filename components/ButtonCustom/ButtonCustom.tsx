import './buttonCustom.css';

const ButtonCustom = ({text}: {text: string}) => {
  return (
    <button className="btnCustom">{text}</button>
  )
}

export default ButtonCustom