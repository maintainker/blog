import { css, createGlobalStyle } from "styled-components";

const FONT_PRIMARY = css`
  font-family: NotoSansCJK, Helvetica, "Microsoft YaHei", Arial, sans-serif;
`;

export { FONT_PRIMARY };

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: NotoSansCJK;
    font-style: normal;
    font-weight: 400;
    src: local('NotoSansCJK'), url('./fonts/NotoSansCJK/NotoSansKR-Regular.otf'), url('./fonts/NotoSansCJK/NotoSansKR-Regular.woff'), url('./fonts/NotoSansCJK/NotoSansKR-Regular.woff2');
  }
  @font-face {
    font-family: NotoSansCJK;
    font-style: normal;
    font-weight: 500;
    src: local('NotoSansCJK'), url('./fonts/NotoSansCJK/NotoSansKR-Regular.otf'), url('./fonts/NotoSansCJK/NotoSansKR-Regular.woff'), url('./fonts/NotoSansCJK/NotoSansKR-Regular.woff2');
  }
  @font-face {
    font-family: NotoSansCJK;
    font-style: normal;
    font-weight: 800;
    src: local('NotoSansCJK'), url('./fonts/NotoSansCJK/NotoSansKR-Regular.otf'), url('./fonts/NotoSansCJK/NotoSansKR-Regular.woff'), url('./fonts/NotoSansCJK/NotoSansKR-Regular.woff2');
  }
 
  html,
  body,
  #root {
    margin: 0;
    ${FONT_PRIMARY};
    color: ${({ theme }) => theme.COLORS.TEXT_BASIC};
    background-color: ${({ theme }) => theme.COLORS.BG_BODY};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: initial;
  }
  ol,
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .container{
    max-width:1200px;
    width:100%;
    margin:0 auto;
  }
`;

export default GlobalStyle;
