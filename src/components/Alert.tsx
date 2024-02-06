import { ReactNode } from "react"

interface TextProps{
    children: ReactNode;
    onClose:()=> void;
}
const Alert = ({children, onClose}: TextProps) => {
  return (
    <div 
    className="alert alert-primary .alert-dismissible"
    >   
        {children}  <button type="button" className="close" onClick={onClose} data-dismiss="alert">Close</button></div>
        
  )
}

export default Alert