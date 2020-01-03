/// <reference types="react" />
import { Component } from 'react';
import './HTMLEditor.css';
export interface OwnProps {
    value: string;
    onChange(value: string): void;
    readonly?: boolean;
}
export interface OwnState {
    value: string;
}
declare class HTMLEditor extends Component<OwnProps, OwnState> {
    render(): JSX.Element;
}
export default HTMLEditor;
