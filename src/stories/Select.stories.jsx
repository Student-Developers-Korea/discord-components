import React from 'react';
import { Select, DefaultStyle } from "../components";

export default {
    title: 'Controls/Select'
}

export const Default = () => <>
    <DefaultStyle dark={true} />
    <Select defaultValue={{ value: '10', label: '10 minutes' }} options={[
        { value: '1', label: '1 minute' },
        { value: '2', label: '2 minutes' },
        { value: '3', label: '3 minutes' },
        { value: '4', label: '4 minutes' },
        { value: '5', label: '5 minutes' },
        { value: '6', label: '6 minutes' },
        { value: '7', label: '7 minutes' },
        { value: '8', label: '8 minutes' },
        { value: '9', label: '9 minutes' },
        { value: '10', label: '10 minutes' }
    ]} />
</>

export const Light = () => <>
    <DefaultStyle />
    <Select defaultValue={{ value: '10', label: '10 minutes' }} options={[
        { value: '1', label: '1 minute' },
        { value: '2', label: '2 minutes' },
        { value: '3', label: '3 minutes' },
        { value: '4', label: '4 minutes' },
        { value: '5', label: '5 minutes' },
        { value: '6', label: '6 minutes' },
        { value: '7', label: '7 minutes' },
        { value: '8', label: '8 minutes' },
        { value: '9', label: '9 minutes' },
        { value: '10', label: '10 minutes' }
    ]} />
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
