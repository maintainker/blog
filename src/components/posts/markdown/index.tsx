// export { default as InlineCode } from "./inlineCode";

import React from "react";
import * as Style from "./style";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { qtcreatorDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
export const Pre: React.FC = ({ children }) => {
  return <Style.Pre>{children}</Style.Pre>;
};
export const Code: React.FC<{ inline?: boolean }> = (props) => {
  if (!props.inline) {
    return (
      <SyntaxHighlighter language={"javascript"} style={qtcreatorDark}>
        {props.children}
      </SyntaxHighlighter>
    );
  }
  return <Style.Code>{props.children}</Style.Code>;
};
/**
 * 
 * 
 * 
 * 
 * import PropTypes from 'prop-types';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeBlock({ language = null, value }) {
  return (
    <SyntaxHighlighter language={language} style={solarizedLight}>
      {value}
    </SyntaxHighlighter>
  );
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
}
 */
