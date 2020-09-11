import React from 'react';
import { Button, DefaultStyle } from "../components";
import styled from "styled-components";

export default {
    title: 'Controls/Button'
}

const ButtonSpacer = styled.div`
    button {
        margin-left: 4px;
    }
`

export const Default = () => <>
    <DefaultStyle />
    <ButtonSpacer>
        <Button>Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="red" hover={true}>Red Button2</Button>
    </ButtonSpacer>
</>

export const Light = () => <>
    <DefaultStyle />
    <ButtonSpacer>
        <Button>Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="red" hover={true}>Red Button2</Button>
    </ButtonSpacer>
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
