import "./button.css";

export default function StyledButton({ name, style = {} }) {
  return (
    <a style={style} className="cta">
      {name}
    </a>
  );
}
