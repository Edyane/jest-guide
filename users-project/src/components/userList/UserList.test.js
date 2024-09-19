import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('render the correct number of rows', () => {
    //Render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'sam', email: 'sam@sam.com' },
    ];
    render(<UserList users={users} />);

    //Find all the rows in the table

    //Assertion: correct number of rows in the table
});

test('render the email and name of each user', () => {

});