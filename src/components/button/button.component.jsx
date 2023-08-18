import "./button.styles.scss";

const BUTTON_TYPES = {
	default: 'default',
	chat: 'chat',
	invisible: 'invisible',
	rounded: 'rounded',
	listItem: 'listItem'
}

function utton ({ children, buttonType, ...otherProps }) {
	return (
		<button className={ `button-container ${ BUTTON_TYPES[buttonType] }` }{ ...otherProps }> { children } </button>
	)
}

export default utton;