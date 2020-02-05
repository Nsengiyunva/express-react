import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

const GlobalStyles = createGlobalStyle`
    import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap')
    *, *::after, *::before{
        margin: 0px;
        padding:0px;
        box-sizing: inherit;
    }
`