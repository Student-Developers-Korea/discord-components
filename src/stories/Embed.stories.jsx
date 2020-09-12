import React from 'react';
import { Embed, DefaultStyle } from "../components";

export default {
    title: 'Controls/Embed'
}

export const Default = () => <>
    <DefaultStyle dark={true} />
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
</>

export const Light = () => <>
    <DefaultStyle />
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
