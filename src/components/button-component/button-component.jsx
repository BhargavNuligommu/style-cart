import './button.styles.scss'

/*

Botton Types:

default - black to white

inverted - white to black

google -sign-in button
*/

const BUTTON_TYPE_CLASSES = {

    google : 'google-sign-in',
    inverted : 'inverted',
};

const Button = ({children, buttonType, ...otherProps}) => {

    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    );
};

export default Button;