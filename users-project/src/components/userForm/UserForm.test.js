import { render, screen } from 'testing-library/react';
import user from 'testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
    // render the component
    render(<UserForm />);

    // manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    // get all find multiple elements that have a role of textbox 
    const button = screen.getByRole('button');
    // get by role find only just one (we expect to find exactlu one element)

    //assertion = make sure the component is doing
    //what we expect it to do 
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument(user);
});


test('it calls onUserAdd when the form is submitted', async () => {
    // not the best implementation
    // try to render my component
    render(<UserForm onUserAdd={() => {}} />);

    // find the two inputs
    const [nameInput, emailInput] = screen.getAllByRole('textbox');

    // simulate typing in a name
    await user.click(nameInput);
    await user.keyboard('jane');

    // simulate typing in an email 
    await user.click(emailInput);
    await user.keyboard('jane@jane.com');

    // find the button
    const button = screen.getByRole('button');

    // simulate clicking the button 
    user.click(button);

    // asertion to make sure 'onUserAdd' gets called with email/name

});
