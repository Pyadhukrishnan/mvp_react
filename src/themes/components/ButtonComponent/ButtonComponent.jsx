import styles from './Button.module.css';


const ButtonComponent = ({content,onClick,buttonSize="large",theme="default",disabled=false}) => {
    const themeClass = (theme) => {
        switch(theme){
            case "normal":
                return styles.normal;
            default:
                return styles.default;

        }
    }

    const size =(buttonSize) => {
        switch(buttonSize){
            case "large":
                return styles.large;
            case "small":
                return styles.small;
        }
    }
  return (
    <button className={`${size(buttonSize)} ${themeClass(theme)}`} onClick={onClick} disabled={disabled}>
        {content}
    </button>
  )
}

export default ButtonComponent;