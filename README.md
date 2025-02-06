## React Testing Library and Jest: The Complete Guide (Notes)

A super important part of testing is finding the elements that our component has created. 

Need to test form submission? You need to find a button to click!
Need to test navigation? You need to find a link to click!
Need to make sure a header is visible? You need to find aheader! 


### React Testing Library Query System 
Collection of -48 functions that are used to find elements. 

*Partial list*
- screen.getByRole()
- screen.queryByRole()
- screen.findAllByTitle()
- screen.findAllByDisplayValue()
- screen.findByRole()
- screen.findByTitle()
- screen.queryAllByRole()
- screen.queryByLabelText()
- screen.getByLabelText()

You do not need memorize these!

*ARIA Roles*
- ARIA Roles clarify the purpose of an HTML element
- Traditionally used by screen readers - softwares to help people understand the the content of screen;
- Many HTML elements have an 'implicit', or automatically assigned role;
- Elements can be assigned manually assigned a role. Even trained engineers do this incorrectly;

*Matchers from Jest*
- expect(['a', 'b']).toHaveLength(2) - makes sure the value is an an array with a particular lenght;
- expect(5).toEqual(5) - makes sure the value equals another value;
- expect(['a', 'b', 'c']).toContain('b') - makes sure an array contains a value, or make sure a string contains another string;
- expect(fn).toThrow() - makes sure a function throws an error when called;
- expec(mock).toHaveBeenCalled() - makes sure a mock function has been called;

*Matchers from React Testing Library* 
- expect(element).toBeInTheDocument() - makes sure elements is present on the page;
- expect(element).toBeEnabled() - make sure an element (like an input) is not disabled;
- expect(element).toHaveClass() - makes sure an element has a class name;
- expect(element).toHaveTextContent() - makes sure an element has some particular text;
- expect(element).toHaveValue() - makes sure an input, select, or textarea has a value;
- user.click(element) - simulates clicking on the provided element 
- user.keyboard('text') - simulates typing 'text'
- user.keyboard('{Enter}') - simulates pressing the enter key 

*Mock functions*
- In english 'mock' can meal 'not real';
- Fake function that doesn't do anything;
- Records whenever it gets called, and the arguments it was called with;
- User very often when we need to make sure a component calls a callback;

Normal HTML stuff (not React specific)
If a labels 'for' attribute matches an inputs 'id', clicking
on the input will focus the input.

#### Input can be selected with...
screen.getByLabelText( /enter email/i)
screen.getByRole('textBox', { name: /enter email/i })

#### Memorizing all the query functions to find elements + roles is hard
To get help with fiding a particular element, use this helper function:
- screen.logTestingPlaygorundURL()
- Takes the HTML currently rendered by your component and create a link to view tha HTML in the "Testing Playground" tool 
- Testing playground helps you write queries (functions to find elements)

Sometimes finding element by role just doesn't work well 
- Tip - don't obesess over getting the 'right' query
- Two 'escape hatches' ways to find elements when the preferred 'role' approcag doesn't work for work 

### Looking for a single element?
getBy, qyeryBy, findBy

### Looking for multiple elements?
getAllBy, queryAllBy, findAllBy

### When to use these queries
| Goal of test | Use |
| ----- | -----| 
| Prove an element exists | getBy, getAllBy |
| Prove an element does not exist | queryBy, queryAllBy |
| Make sure an element eventually exists |findBy, findAllBy


## Querying for elements with different criteria

React Testing Library provides many differents query functions. Each begins with a name like *getBy*, *findBy*, etc. The names also have common endings. The different name endings indicate how the query for an element will be performed.

| End of Function Name | Search Criteria |
| ------ | ------ |
| ByRole | finds elements based pn their implicit or explicit ARIA role  |
| ByLabelText | find form elements based upon the text their paired labels contain  |
| ByPlaceholderText | find form elements based upon their placeholder text |
| ByText | find elements based upon the text they contain  |
| ByDisplayValue | find elements based upon their current value  |
| ByAllText| find elements based upon their alt attribute |
| ByTitle | find elements based upon their title attribute |
| ByTestId | find elements based upon their daye-testeid attribute|