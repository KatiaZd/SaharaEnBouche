import style from "./Button.module.css"
interface ButtonProps {
  title: string;
  callback: () => void;
}
const Button = (props: ButtonProps) => {
  const { title, callback } = props;
  return (
    <>
      <button onClick={callback} className={style.buttonClick}>{title}</button>
    </>
  );
};
export default Button;
