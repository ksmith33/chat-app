import "./button.styles.scss";

const BUTTON_TYPES = {
	chat: 'chat',
	invisible: 'invisible',
	rounded: 'rounded'
}

function Button ({ children, buttonType, ...otherProps }) {
	return (
		<button className={`button-container ${BUTTON_TYPES[buttonType]}`}{...otherProps}> { children } </button>
	)
}

export default Button;