import React from 'react';
import { Selectbox, DefaultStyle } from "../components";

export default {
    title: 'Controls/Selecbox'
}

export const Default = () => <>
    <DefaultStyle dark={true} />
    <Selectbox />
</>

export const Light = () => <>
    <DefaultStyle />
    <Selectbox />
</>

Default.parameters = {
    backgrounds: {
        default: 'dark'
    }
}

Light.parameters = {
    backgrounds: {
        default: 'light'
    }
}