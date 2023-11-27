# Setting up
We recommend you use **node version 20**. Use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if you need to switch versions.

- Use `npm install` to install dependencies
- Use `npm run dev` to compile & run the application. It will run on localhost:5173

# Task
- The goal is to get familiar with JavaScript, TypeScript, React, and Material-UI
- You will be working in the `src/` directory. Ignore `public/`, `node_modules/`, `.gitignore`, `package.json`, and `package-lock.json`, and all other files outside `src/`.
- Step 0: Get your dev environment running. Make sure that when you run `npm run dev` you see the landing page with text.
- Step 1: Create a list of all states, and display it on the page. Source file: `src/library/state_data.json`
- Step 2: When a state from the list is clicked, display a list of all counties in *that* state. County source file `src/library/county_data.json`
    - Notice that there is a field called `GISJOIN` associated with each entry in both of these files. You'll want to read the contents of these files into a data structure which you can search. The first 4 characters is a county's `GISJOIN` match it's associated state's `GISJOIN`. For example, Calhoun county's `GISJOIN` is "G0100150". We know this is in Alabama because Alabama's `GISJOIN` is "G010".
    - The selected state can be 'cleared', which causes the County list to disappear.
- Step 3: Allow the user to search for counties by name. This involves a TextField that the user can type into, which filters the displayed counties.
    - This list is conditionally rendered. When no state is selected or when the selected state in cleared, this list does not show up.
- Step 4: When a county is clicked, the map zooms to that county.
    - Use the sendRequest() function
- Step 5: Make 3 charts
    - Pie chart for counties that begin with vowels vs consonants
    - Line chart of number of letters per county
        - x-axis: county names
        - y-axis: number of letters
    - Histograph (bar chart) of number of counties with which number of letters
        - x-axis: numbers of letters in county names
        - y-axis: number of counties with the corresponing number of letters
- Ask Matt any clarifying questions! Reach out on MS Teams, or email `asterix@rams.colostate.edu`
- NOTE: Use good software engineering practices (SRP, generalized components, clean code)

# Read the Docs
- React Hooks
    - `https://reactjs.org/docs/hooks-intro.html`
    - `https://www.w3schools.com/react/react_hooks.asp#:~:text=Hooks%20were%20added%20to%20React,are%20generally%20no%20longer%20needed.`
    - useEffect() `https://reactjs.org/docs/hooks-effect.html`
- MUI components: `https://mui.com/material-ui/`
- Some useful JavaScript functions to know about
    - .map() `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map`
    - .filter() `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter`
- ReCharts Charting: `https://recharts.org/en-US/`
- Deck GL Map: `https://deck.gl/`
