declare module 'currstyles/lib/components/atoms/button/Button' {
    import * as React from 'react';
    export interface ButtonProps {
        handleClick: (...args: any[])=>any;
        type: 'button' | 'submit' | 'reset';
        value?: string;
    }
    export default class Button extends React.Component<ButtonProps, any>{
    }
}
declare module 'currstyles/lib/components/atoms/button/Button' {
    import * as React from 'react';
    export interface ButtonProps {
        handleClick: (...args: any[])=>any;
        type: 'button' | 'submit' | 'reset';
        value?: string;
    }
    export default class Button extends React.Component<ButtonProps, any>{
    }
}
declare module 'currstyles/lib/components/atoms/date/AppDate' {
    import * as React from 'react';
    export interface AppDateProps {
        time: string;
        text?: string;
        component?: string;
    }
    export default class AppDate extends React.Component<AppDateProps, any>{
    }
}
declare module 'currstyles/lib/components/atoms/dropdown/Dropdown' {
    import * as React from 'react';
    export interface DropdownProps {
        name: string;
        handleChange: (...args: any[])=>any;
        options?: any[];
        value?: string;
        selectName?: string;
    }
    export default class Dropdown extends React.Component<DropdownProps, any>{
    }
}
declare module 'currstyles/lib/components/atoms/header/Header' {
    import * as React from 'react';
    export interface HeaderProps {
        children: React.ReactNode;
        src?: string;
        alt?: string;
    }
    export default class Header extends React.Component<HeaderProps, any>{
    }
}
declare module 'currstyles/lib/components/atoms/input/Input' {
    import * as React from 'react';
    export interface InputProps {
        type: string;
        handleChange: (...args: any[])=>any;
        placeholder?: string;
        name?: string;
        value?: string;
        id?: string;
        disabled?: boolean;
    }
    export default class Input extends React.Component<InputProps, any>{
    }
}
declare module 'currstyles/lib/components/atoms/message/Message' {
    import * as React from 'react';
    export interface MessageProps {
        children: React.ReactNode;
    }
    export default class Message extends React.Component<MessageProps, any>{
    }
}
declare module 'currstyles/lib/components/molecules/input_label/InputLabel' {
    import * as React from 'react';
    export interface InputLabelProps {
        id: string;
        labelName: string;
        type: string;
        handleChange: (...args: any[])=>any;
        placeholder?: string;
        disabled?: boolean;
        inputName?: string;
        value?: string;
    }
    export default class InputLabel extends React.Component<InputLabelProps, any>{
    }
}
declare module 'currstyles/lib/components/molecules/input_dropdown/InputDropdown' {
    import * as React from 'react';
    export interface InputDropdownProps {
        id: string;
        labelName: string;
        inputName: string;
        type: string;
        handleInputChange: (...args: any[])=>any;
        handleDropdownChange: (...args: any[])=>any;
        name?: string;
        value?: string;
        disabled?: boolean;
        placeholder?: string;
        inputLabelValue?: string;
        selectName?: string;
        options?: {
            name: string;
            value?: string;
        }[];
    }
    export default class InputDropdown extends React.Component<InputDropdownProps, any>{
    }
}
