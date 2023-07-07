import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Karla', sans-serif;
    }
`
export const Title = styled.h1`
    font-family: 'Markazi Text', serif;
    font-size: 65pt;
    font-weight: 500;
`
export const Subtitle = styled.h2`
    font-family: 'Markazi Text', serif;
    font-size: 40pt;
    font-weight: 400;
    color: #F4CE14;
`
export const LeadText = styled.p`
    font-family: 'Karla', sans-serif;
    font-size: 18pt;
    font-weight: 500;
`

export default GlobalStyles;