import './input.styles.scss';

const INPUT_TYPES = {
	chat: 'chat',
	search: 'search'
}

function Input ({label, inputType, ...otherProps}) {
	return(
		<div className={`input-container ${INPUT_TYPES[inputType]}`}>
			<label>
				{label}
				<input {...otherProps} />
			</label>
		</div>
	)
}

export default Input;