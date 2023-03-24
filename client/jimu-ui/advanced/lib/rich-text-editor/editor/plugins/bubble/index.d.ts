/** @jsx jsx */
import { React } from 'jimu-core';
import { Sources } from '../../../type';
import { PopperProps } from 'jimu-ui';
import { RichPluginRequiredProps } from '../plugin';
/**
 * The `Bubble` component props.
 */
export interface BubblePluginProps extends RichPluginRequiredProps, Omit<PopperProps, 'children' | 'reference' | 'open' | 'version' | 'onChange'> {
    /**
     * Specify the trigger source when editing through the current component.
     */
    source?: Sources;
    /**
     * `Bubble` will be hidden when version changes.
     */
    version?: number;
}
/**
 * The `Bubble` component is used to provide the user the ability to format the text in a small pop-up,
 * which must be used with component `RichTextEditor`.
 */
export declare const Bubble: (props: BubblePluginProps) => React.ReactElement;
