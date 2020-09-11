import React from 'react';
import { Button, Checkbox, DefaultStyle, Embed, Input, Select, Selectbox, Textarea } from './components';

import './App.css';

function App() {
    const [dark, setDark] = React.useState(true)

    return (
        <div className="App">
            <DefaultStyle dark={dark} />
            <h1>Discord Components</h1>
            <div>
                <Checkbox checked={!dark} onChange={() => setDark(!dark)} />
                <span>Theme: {dark ? 'Dark' : 'Light'}</span>
            </div>
            <div id="buttons">
                <h2>Button</h2>
                <Button>Button</Button>
                <Button color='red'>Red Button</Button>
                <Button color='red' hover={true}>Red Button2</Button>
            </div>
            <div>
                <h2>Input</h2>
                <Input />
            </div>
            <div>
                <h2>Textarea</h2>
                <Textarea />
            </div>
            <div>
                <h2>Checkbox (Toggle)</h2>
                <Checkbox />
            </div>
            <div>
                <h2>Select (Beta)</h2>
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
            </div>
            <div>
                <h2>Embed (Beta)</h2>
                <Embed
                    author={{
                        img: "https://cdn.discordapp.com/avatars/604617640891121664/1f86839f891456d76a79e50e5c901d6e.png?size=1024",
                        text: "author",
                        url: 'https://discord.com'
                    }}
                    title="제목"
                    description="설명"
                    color="#00ff00"
                    footer={{
                        img: "https://cdn.discordapp.com/avatars/604617640891121664/1f86839f891456d76a79e50e5c901d6e.png?size=1024",
                        text: "푸터"
                    }}
                    fields={[
                        { name: '필드', value: '내용', inline: true },
                        { name: '필드', value: '내용', inline: true },
                        { name: '필드', value: '내용', inline: true },
                        { name: '필드', value: '내용' },
                        { name: '필드', value: '내용', inline: true }
                    ]}
                />
            </div>
            <div>
                <h2>Selectbox (Beta)</h2>
                <Selectbox />
            </div>
        </div>
    );
}

export default App;