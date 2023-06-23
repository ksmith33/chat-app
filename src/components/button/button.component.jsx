import "./button.styles.scss";

const BUTTON_TYPES = {
	rounded: 'rounded',
	invisible: 'invisible'
}

function Button ({ children, buttonType, ...otherProps }) {
	return (
		<button className={`button-container ${BUTTON_TYPES[buttonType]}`}{...otherProps}> { children } </button>
	)
}

export default Button;