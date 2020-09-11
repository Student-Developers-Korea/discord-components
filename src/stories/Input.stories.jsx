import React from 'react';
import { Input, DefaultStyle } from "../components";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Controls/Input'
}

export const Default = () => <>
    <DefaultStyle dark={true} />
    <Input onChange={action('change')} />
</>

export const Light = () => <>
    <DefaultStyle />
    <Input onChange={action('change')} />
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
