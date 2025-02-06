import { render, screen } from "@testing-library/react";
import InputTexto from "./Input";

test('render the input and button correctly', () => {
    // Renderiza o componente 
    render(<InputTexto />);

    // Verifica se o botão está no documento e se o texto está correto
    const button = screen.getByRole('button', { name: /enviar/i });
    expect(button).toBeInTheDocument();

    // Verifica se o rótulo está no documento
    const label = screen.getByLabelText(/digite algo/i);
    expect(label).toBeInTheDocument();
});
