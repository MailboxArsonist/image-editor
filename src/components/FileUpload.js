import React from "react";
import styled from 'styled-components';

const FileUpload = (props) => {

    function uploadImage(e) {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => (props.onUpload(reader.result));
        reader.readAsDataURL(file);
        
    }

    const StyledLabel = styled.label`
        background: transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
        cursor: pointer;
        font-size: 11px;
    `

    return (
        <StyledLabel htmlFor="image-upload">
            Upload an image
            <input style={{display: 'none'}} type="file" id="image-upload" onInput={(e) => uploadImage(e)} />
        </StyledLabel>
    );
};
export default FileUpload;