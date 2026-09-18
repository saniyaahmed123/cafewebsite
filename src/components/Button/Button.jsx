import Style from './Button.module.css'


const Button = (props) => {
    return (
        <>
            <button className={Style.btn}>{props.text}</button>
        </>
    )
}

export default Button