import { useNavigate } from "react-router-dom";

function Button({ text, href, onClick, className }) {
  const navigate = useNavigate();

  const handleClick = () => (href && navigate(href));

  return(
    <button onClick={onClick || handleClick} className={className}>
      { text }
    </button>
  );
}

export default Button;
