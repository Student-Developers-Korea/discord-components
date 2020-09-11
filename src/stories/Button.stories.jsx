import React from 'react';
import {Button, DefaultStyle} from "../components";
import styled from "styled-components";

export default {
  title: 'Controls/Button'
}

const ButtonSpacer = styled.div`
button + button {
  margin-left: 4px;
}
`

export const Default = () => <DefaultStyle>
  <ButtonSpacer>
    <Button>Button</Button>
    <Button color="red">Red Button</Button>
    <Button color="red" hover={true}>Red Btn2</Button>
  </ButtonSpacer>
</DefaultStyle>

export const Light = () => <DefaultStyle dark>
  <ButtonSpacer>
    <Button>Button</Button>
    <Button color="red">Red Button</Button>
    <Button color="red" hover={true}>Red Btn2</Button>
  </ButtonSpacer>
</DefaultStyle>

Default.parameters = {
  backgrounds: {default: 'dark'}
}

Light.parameters = {
  backgrounds: {default: 'light'}
}
