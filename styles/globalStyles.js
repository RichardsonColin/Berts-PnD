import { createGlobalStyle } from 'styled-components';

// global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --primary: hsl(44, 36%, 52%);
    --primary-light: hsl(43, 70%, 81%);
    --primary-dark: hsl(43, 58%, 20%);
    --secondary: hsl(220, 56%, 22%);
    --secondary-light: hsl(220, 62%, 80%);
    --secondary-dark: hsl(219, 86%, 9%);

    --color-grey-10: hsl(265, 100%, 99%);
    --color-grey-50: hsl(265, 55%, 96%);
    --color-grey-100: hsl(265, 19%, 88%);
    --color-grey-200: hsl(265, 7%, 70%);
    --color-grey-300: hsl(265, 6%, 66%);
    --color-grey-400: hsl(265, 4%, 57%);
    --color-grey-500: hsl(265, 3%, 53%);
    --color-grey-600: hsl(265, 4%, 42%);
    --color-grey-700: hsl(265, 4%, 31%);
    --color-grey-800: hsl(276, 5%, 20%);
    --color-grey-900: hsl(280, 5%, 13%);
    --color-grey-950: hsl(300, 6%, 6%);
    --color-grey-990: hsl(300, 8%, 3%);

    /* container widths */
    --desktop-width-lg: 2700px;
    --desktop-width-md: 2450px;
    --desktop-width-sm: 2200px;
    --laptop-width-lg: 1350px;
    --laptop-width-md: 1050px;
    --laptop-width-sm: 650px;
    --tablet-width-lg: 850px;
    --tablet-width-md: 650px;
    --tablet-width-sm: 400px;
    --mobile-l-width-lg: 700px;
    --mobile-l-width-md: 525px;
    --mobile-l-width-sm: 350px;
    --mobile-s-width-lg: 400px;
    --mobile-s-width-md: 300px;
    --mobile-s-width-sm: 200px;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--color-grey-10);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.2em;
    margin-bottom: 30px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }

  p,
  a,
  span {
    line-height: 27px;
  }

  button {
    font: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
