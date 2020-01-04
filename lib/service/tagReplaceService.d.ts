import React, { Component } from 'react';
interface ChildNodeProps {
    value?: string;
    uniq_key: string;
}
export declare const ChildNodes: React.SFC<ChildNodeProps>;
interface HTMLEditorProps {
    value: string;
    onChange(value: string): void;
    readonly?: boolean;
}
export declare class ArticleDOMNode extends Component<HTMLEditorProps> {
    private articleRef;
    componentDidMount(): void;
    onDomeNodeChange: (value: string) => void;
    shouldComponentUpdate(nextProps: HTMLEditorProps): boolean;
    render(): JSX.Element;
}
export {};
