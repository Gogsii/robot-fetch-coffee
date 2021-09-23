A simple one page site I made to play around with JavaScript's targeting features.

Visit the URL to the right to see it in action:
<a href="gogsii.github.io">Gogsi's Coffee Fetching Robot</a>

**Here are some of the features this very basic page contains**

**img selecting**

- it targets the img element with JS querySelector and and assigns it to a variable.

**img src changing**

- the onclick functionality is then applied to the variable holding the selected img.

- new variable is declared inside this function to get and store the src attribute of the img.

- the function has an if/else statement that checks for the image paths.

- if image path A, then on click set src attribute to image path B, and vice versa.

**button to heading**

- uses JS to select the button element via querySelector, as well as the heading 2 element

- assigns the setUserName() function to the button.onclick function

**setting and displaying user**

- creates function called setUserName, which prompts the user to enter their name

- checks to see if name exists in local storage via getItem(), if not it sets the username to the input using setItem()

- returns the heading 2 element above the img changed to "I will get right on it  ", + nameVariable.
