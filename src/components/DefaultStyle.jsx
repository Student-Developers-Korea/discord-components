import React from 'react'
import { createGlobalStyle, css } from 'styled-components'

const Default = createGlobalStyle`
    ${props => !props.dark ? css`
    :root {
        --input-color: #2e3338;

        --header-primary: #fff;
        --header-secondary: #b9bbbe;
        --text-normal: #dcddde;
        --text-muted: #72767d;
        --text-link: #00b0f4;
        --channels-default: #8e9297;
        --interactive-normal: #b9bbbe;
        --interactive-hover: #dcddde;
        --interactive-active: #fff;
        --interactive-muted: #4f545c;
        --background-primary: #36393f;
        --background-secondary: #2f3136;
        --background-secondary-alt: #292b2f;
        --background-tertiary: #202225;
        --background-accent: #4f545c;
        --background-floating: #18191c;
        --background-mobile-primary: #36393f;
        --background-mobile-secondary: #2f3136;
        --background-modifier-hover: rgba(79,84,92,0.16);
        --background-modifier-active: rgba(79,84,92,0.24);
        --background-modifier-selected: rgba(79,84,92,0.32);
        --background-modifier-accent: hsla(0,0%,100%,0.06);
        --background-mentioned: rgba(250,166,26,0.05);
        --background-mentioned-hover: rgba(250,166,26,0.08);
        --background-message-hover: rgba(4,4,5,0.07);
        --background-help-warning: rgba(250,166,26,0.1);
        --background-help-info: rgba(0,176,244,0.1);
        --scrollbar-thin-thumb: #202225;
        --scrollbar-thin-track: transparent;
        --scrollbar-auto-thumb: #202225;
        --scrollbar-auto-track: #2e3338;
        --scrollbar-auto-scrollbar-color-thumb: #202225;
        --scrollbar-auto-scrollbar-color-track: #2f3136;
        --elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15);
        --elevation-low: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);
        --elevation-medium: 0 4px 4px rgba(0,0,0,0.16);
        --elevation-high: 0 8px 16px rgba(0,0,0,0.24);
        --logo-primary: #fff;
        --focus-primary: #00b0f4;
        --guild-header-text-shadow: 0 1px 1px rgba(0,0,0,0.4);
        --channeltextarea-background: #40444b;
        --activity-card-background: #202225;
        --textbox-markdown-syntax: #8e9297;
        --deprecated-card-bg: rgba(32,34,37,0.6);
        --deprecated-card-editable-bg: rgba(32,34,37,0.3);
        --deprecated-store-bg: #36393f;
        --deprecated-quickswitcher-input-background: #72767d;
        --deprecated-quickswitcher-input-placeholder: hsla(0,0%,100%,0.3);
        --deprecated-text-input-bg: #e3e5e8;
        --deprecated-text-input-border: rgba(0,0,0,0.3);
        --deprecated-text-input-border-hover: #040405;
        --deprecated-text-input-border-disabled: #202225;
        --deprecated-text-input-prefix: #dcddde;
    }
    ` : css`
    :root {
        --input-color: #dcddde;
    
        --header-primary: #060607;
        --header-secondary: #4f5660;
        --text-normal: #2e3338;
        --text-muted: #747f8d;
        --text-link: #0067e0;
        --channels-default: #6a7480;
        --interactive-normal: #4f5660;
        --interactive-hover: #2e3338;
        --interactive-active: #060607;
        --interactive-muted: #c7ccd1;
        --background-primary: #fff;
        --background-secondary: #f2f3f5;
        --background-secondary-alt: #ebedef;
        --background-tertiary: #e3e5e8;
        --background-accent: #747f8d;
        --background-floating: #fff;
        --background-mobile-primary: #f8f9f9;
        --background-mobile-secondary: #fff;
        --background-modifier-hover: rgba(116,127,141,0.08);
        --background-modifier-active: rgba(116,127,141,0.16);
        --background-modifier-selected: rgba(116,127,141,0.24);
        --background-modifier-accent: rgba(6,6,7,0.08);
        --background-mentioned: rgba(250,166,26,0.1);
        --background-mentioned-hover: rgba(250,166,26,0.2);
        --background-message-hover: rgba(6,6,7,0.02);
        --background-help-warning: rgba(250,166,26,0.1);
        --background-help-info: rgba(0,103,224,0.1);
        --scrollbar-thin-thumb: rgba(79,84,92,0.3);
        --scrollbar-thin-track: transparent;
        --scrollbar-auto-thumb: #ccc;
        --scrollbar-auto-track: #f2f2f2;
        --scrollbar-auto-scrollbar-color-thumb: #e3e5e8;
        --scrollbar-auto-scrollbar-color-track: #f2f3f5;
        --elevation-stroke: 0 0 0 1px rgba(6,6,7,0.08);
        --elevation-low: 0 1px 0 rgba(6,6,7,0.1),0 1.5px 0 rgba(6,6,7,0.025),0 2px 0 rgba(6,6,7,0.025);
        --elevation-medium: 0 4px 4px rgba(0,0,0,0.08);
        --elevation-high: 0 8px 16px rgba(0,0,0,0.16);
        --logo-primary: #7289da;
        --focus-primary: #00b0f4;
        --guild-header-text-shadow: 0 1px 1px hsla(0,0%,100%,0.4);
        --channeltextarea-background: #ebedef;
        --activity-card-background: #fff;
        --textbox-markdown-syntax: #6a7480;
        --deprecated-card-bg: #f8f9f9;
        --deprecated-card-editable-bg: rgba(246,246,247,0.6);
        --deprecated-store-bg: #f8f9f9;
        --deprecated-quickswitcher-input-background: #fff;
        --deprecated-quickswitcher-input-placeholder: rgba(79,84,92,0.3);
        --deprecated-text-input-bg: #36393f;
        --deprecated-text-input-border: rgba(79,84,92,0.3);
        --deprecated-text-input-border-hover: #b9bbbe;
        --deprecated-text-input-border-disabled: #dcddde;
        --deprecated-text-input-prefix: #b9bbbe;
    }
    `}

    html:lang(ko) ::placeholder, html:lang(ko) body, html:lang(ko) button, html:lang(ko) input, html:lang(ko) select, html:lang(ko) textarea {
        font-family: Whitney, "Apple SD Gothic Neo", NanumBarunGothic, "맑은 고딕", "Malgun Gothic", Gulim, 굴림, Dotum, 돋움, "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    html:lang(zh-HK) ::placeholder, html:lang(zh-HK) body, html:lang(zh-HK) button, html:lang(zh-HK) input, html:lang(zh-HK) select, html:lang(zh-HK) textarea, html:lang(zh-TW) ::placeholder, html:lang(zh-TW) body, html:lang(zh-TW) button, html:lang(zh-TW) input, html:lang(zh-TW) select, html:lang(zh-TW) textarea {
        font-family: Whitney, "Microsoft JhengHei", 微軟正黑體, "Microsoft JhengHei UI", "Microsoft YaHei", 微軟雅黑, 宋体, SimSun, "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    html:lang(ja) ::placeholder, html:lang(ja) body, html:lang(ja) button, html:lang(ja) input, html:lang(ja) select, html:lang(ja) textarea, html:lang(ja-JP) ::placeholder, html:lang(ja-JP) body, html:lang(ja-JP) button, html:lang(ja-JP) input, html:lang(ja-JP) select, html:lang(ja-JP) textarea {
        font-family: Whitney, "Hiragino Sans", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, Osaka, "MS PGothic", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    html:lang(zh-CN) ::placeholder, html:lang(zh-CN) body, html:lang(zh-CN) button, html:lang(zh-CN) input, html:lang(zh-CN) select, html:lang(zh-CN) textarea {
        font-family: Whitney, "Microsoft YaHei New", 微软雅黑, "Microsoft Yahei", "Microsoft JhengHei", 宋体, SimSun, "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    ::placeholder, body, button, input, select, textarea {
        font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;
        text-rendering: optimizeLegibility;
    }

    html {
        scrollbar-color: var(--scrollbar-auto-scrollbar-color-thumb) var(--scrollbar-auto-scrollbar-color-track);
    }

    ::-webkit-scrollbar {
        width: 16px;
        height: 16px;
    }

    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-auto-thumb);
        min-height: 40px;
    }

    ::-webkit-scrollbar-thumb, ::-webkit-scrollbar-track {
        border: 4px solid transparent;
        background-clip: padding-box;
        border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
        margin-bottom: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--scrollbar-auto-track);
    }
`

function DefaultStyle({ dark }) {
    return <Default dark={dark} />
}

export default DefaultStyle