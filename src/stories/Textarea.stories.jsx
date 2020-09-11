import React from 'react';
import { Textarea, DefaultStyle } from "../components";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Controls/Textarea'
}

export const Default = () => <>
    <DefaultStyle dark={true} />
    <Textarea onChange={action('change')} />
</>

export const Light = () => <>
    <DefaultStyle />
    <Textarea onChange={action('change')} />
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
