interface ButtonProps{
    children: string;
    color?: string;
    onClick: ()=> void;
}
const Button = ({children, onClick, color = 'primary'}:ButtonProps) => {
  return (
    <button className={"btn btn-"+color} onClick={onClick} data-dismiss="alert">{children}</button>
  )
}

export default Button