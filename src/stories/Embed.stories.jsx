import React from 'react';
import { Embed, DefaultStyle } from "../components";

export default {
    title: 'Controls/Embed'
}

export const Default = () => <>
    <DefaultStyle dark={true} />
    <Embed title="존경" />
</>

export const Light = () => <>
    <DefaultStyle />
    <Embed title="존경" />
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
