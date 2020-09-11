import React from 'react';
import Input from "../components/Input";
import {DefaultStyle} from "../components";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Controls/Text Field'
}


export const Default = () => <React.Fragment>
  <DefaultStyle dark/>
  <Input onChange={action('change')}/>
</React.Fragment>

export const Light = () => <React.Fragment>
  <DefaultStyle/>
  <Input onChange={action('change')}/>
</React.Fragment>

Default.parameters = {
  backgrounds: {default: 'dark'}
}

Light.parameters = {
  backgrounds: {default: 'light'}
}
