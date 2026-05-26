import * as React from 'react';
import {Text} from 'ink';

export type Props = {
	readonly isSelected?: boolean;
	readonly label: string;
	readonly highlightColor?: string;
};

function Item({isSelected = false, label, highlightColor = 'cyan'}: Props) {
	return <Text color={isSelected ? highlightColor : undefined}>{label}</Text>;
}

export default Item;
