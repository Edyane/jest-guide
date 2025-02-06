import React, { useState } from "react";

const InputTexto = () => {
	const [texto, setTexto] = useState("");

	const handleChange = (e) => {
		setTexto(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Você digitou: ${texto}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Digite algo:
				<input type="text" value={texto} onChange={handleChange} />
			</label>
			<button type="submit">Enviar</button>
		</form>
	);
};

export default InputTexto;
