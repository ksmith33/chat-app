import './form-input.styles.scss';

function FormInput ({label, ...otherProps}) {
	return(
		<div className='form-input-container'>
			<label>
				{label}
				<input {...otherProps} />
			</label>
		</div>
	);
}

export default FormInput;