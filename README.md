# Setting up
- Use `npm install` to install dependencies
- Use `npm start` to compile & run the application. It will run on localhost:3000

# Task
- The goal is to get familiar with JavaScript, React, and Material-UI
- You will be working in the `src/` directory. Ignore `public/`, `.gitignore`, `package.json`, and `package-lock.json`.
- Step 0: Get your dev environment running. Make sure that when you run `npm start` you see the landing page with text.
- Step 1: Create a list of all states, and display it on the page. Source file: `src/library/state_data.json`
- Step 2: When a state from the list is clicked, display a list of all counties in *that* state. County source file `src/library/county_data.json`
    - Notice that there is a field called `GISJOIN` associated with each entry in both of these files. You'll want to read the contents of these files into a data structure which you can search. The first 4 characters is a county's `GISJOIN` match it's associated state's `GISJOIN`. For example, Calhoun county's `GISJOIN` is "G0100150". We know this is in Alabama because Alabama's `GISJOIN` is "G010".
- Step 3: Allow the user to search for counties by name. This involves a TextField that the user can type into, which filters the displayed counties.
- Ask Matt any clarifying questions! Reach out on MS Teams, or email `asterix@rams.colostate.edu`

# Read the Docs
- React Hooks
    - `https://reactjs.org/docs/hooks-intro.html`
    - `https://www.w3schools.com/react/react_hooks.asp#:~:text=Hooks%20were%20added%20to%20React,are%20generally%20no%20longer%20needed.`
    - useEffect() `https://reactjs.org/docs/hooks-effect.html`
- MUI components: `https://mui.com/material-ui/`
- Some useful JavaScript functions to know about
    - .map() `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map`
    - .filter() `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter`
