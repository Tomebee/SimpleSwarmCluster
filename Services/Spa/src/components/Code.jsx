import React from 'react';
import styled from 'styled-components';

const Code = styled.div`
    background: #161b21;
    max-width: 640px;
    margin: 0 auto;
    min-height: 300px;
    border-radius: 4px;
    box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75);
    padding: 15px;
    color: white;
`;
const CodeString = styled.span`
    color: #3fb0ac;
`;

export default ({children}) => {
    const stringified = String(children);
    const first = stringified.indexOf("'");
    const last = stringified.lastIndexOf("'");
    const elements = [];
    elements.push(<span>{stringified.substring(0,first)}</span>)
    elements.push(<CodeString>{stringified.substring(first, last + 1)}</CodeString>);
    elements.push(<span>{stringified.substring(last + 1)}</span>);
    return <Code>{elements}</Code>;
};