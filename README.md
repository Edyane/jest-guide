# 📚 **React Testing Library and Jest: The Complete Guide** 

A super important part of testing is **finding the elements** that our component has created:

- 📝 **Need to test form submission?** You need to find a **button** to click!
- 🔗 **Need to test navigation?** You need to find a **link** to click!
- 🏷️ **Need to ensure a header is visible?** You need to find a **header**!

---

### 🎯 **React Testing Library Query System**

A collection of **48 functions** used to find elements.

**Partial list of functions:**

- `screen.getByRole()`
- `screen.queryByRole()`
- `screen.findAllByTitle()`
- `screen.findAllByDisplayValue()`
- `screen.findByRole()`
- `screen.findByTitle()`
- `screen.queryAllByRole()`
- `screen.queryByLabelText()`
- `screen.getByLabelText()`

**Important:** You do **not** need to **memorize** all of these!

---

### 🦸‍♀️ **ARIA Roles**

- **ARIA Roles** clarify the purpose of an HTML element.
- Traditionally used by **screen readers** (software helping visually impaired users understand content on screen).
- Many HTML elements have an **implicit** role automatically assigned.
- Elements can also be manually assigned a role, but even trained engineers can make mistakes!

---

### ✨ **Matchers from Jest**

Some examples of **Matchers from Jest**:

- `expect(['a', 'b']).toHaveLength(2)` — Ensures the value is an **array** with the correct length.
- `expect(5).toEqual(5)` — Ensures the value equals another value.
- `expect(['a', 'b', 'c']).toContain('b')` — Ensures the array (or string) contains a specific value.
- `expect(fn).toThrow()` — Ensures a function throws an error.
- `expect(mock).toHaveBeenCalled()` — Ensures a **mock** function has been called.

---

### 🧪 **Matchers from React Testing Library**

Examples of **Matchers from React Testing Library**:

- `expect(element).toBeInTheDocument()` — Ensures the element is on the page.
- `expect(element).toBeEnabled()` — Ensures the element (like an input) is **not disabled**.
- `expect(element).toHaveClass()` — Ensures the element has a specific **class**.
- `expect(element).toHaveTextContent()` — Ensures the element has specific **text**.
- `expect(element).toHaveValue()` — Ensures an input, select, or textarea has a specific value.
- `user.click(element)` — Simulates clicking on the element.
- `user.keyboard('text')` — Simulates typing the text **'text'**.
- `user.keyboard('{Enter}')` — Simulates pressing the **Enter** key.

---

### 🔍 **Mock Functions**

- **Mock** can mean **"not real"**: it is a **fake function** that doesn't do anything.
- It **records** whenever it is called and the **arguments** it was called with.
- It's often used when we want to ensure a component **calls a callback function**.

---

### 📝 **Normal HTML Behavior** (Not React Specific)

- If a **label's** `for` attribute matches an **input's** `id`, clicking on the label will **focus** the input.

#### Examples of how to select inputs:

- `screen.getByLabelText(/enter email/i)`
- `screen.getByRole('textBox', { name: /enter email/i })`

---

### 🎯 **Querying for Elements**

Remembering all the query functions and roles can be difficult, right? 😅  
Use this **helper function** to find an element:

```js
screen.logTestingPlaygroundURL()
```

This function creates a link to the **Testing Playground**, where you can view the rendered HTML and write queries to find elements.  
**Tip:** Sometimes, querying by role doesn't work well. Don't obsess over getting the **"perfect" query**. Use these **two escape hatch** methods when needed!

---

### 📍 **Looking for a single element?**  
Use:

- `getBy`, `queryBy`, `findBy`

---

### 📚 **Looking for multiple elements?**  
Use:

- `getAllBy`, `queryAllBy`, `findAllBy`

---

### 📊 **When to use these queries?**

| 🎯 **Goal of the test**                          | ✔️ **Use**                |
| ------------------------------------------------ | ------------------------ |
| Prove that an element exists                    | `getBy`, `getAllBy`       |
| Prove that an element **does not** exist         | `queryBy`, `queryAllBy`   |
| Ensure an element eventually exists             | `findBy`, `findAllBy`     |

---

### 🔎 **Querying for elements with different criteria**  
React Testing Library provides many query functions. Each begins with names like **getBy**, **findBy**, etc., and the suffixes indicate the criteria used to find the element.

| Suffix of Function Name  | **Search Criteria**                                             |
| ------------------------ | --------------------------------------------------------------- |
| **ByRole**               | Finds elements based on their **implicit** or **explicit** ARIA role. |
| **ByLabelText**          | Finds form elements based on the **text** in their associated label. |
| **ByPlaceholderText**    | Finds form elements based on their **placeholder text**.        |
| **ByText**               | Finds elements based on the **text** they contain.              |
| **ByDisplayValue**       | Finds elements based on their **current value**.                |
| **ByAllText**            | Finds elements based on their **alt** attribute.                |
| **ByTitle**              | Finds elements based on their **title** attribute.              |
| **ByTestId**             | Finds elements based on their **data-testid** attribute.        |

---

✨ **Final Tip:** Don't worry about having the **perfect query** every time. The key is to **write clear and functional tests** to ensure the application behaves as expected. 🙌
