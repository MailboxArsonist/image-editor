import React from "react";
import styled from 'styled-components';

const PrettyJson = ({data}) => (
    <div><pre>{JSON.stringify(data, null, 2) }</pre></div>
);
export default PrettyJson;