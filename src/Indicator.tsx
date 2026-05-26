import React from 'react';
import {Box, Text} from 'ink';
import figures from 'figures';

export type Props = {
	readonly isSelected?: boolean;
	readonly highlightColor?: string;
};

function Indicator({isSelected = false, highlightColor = 'cyan'}: Props) {
	return (
		<Box marginRight={1}>
			{isSelected ? (
				<Text color={highlightColor}>{figures.pointer}</Text>
			) : (
				<Text> </Text>
			)}
		</Box>
	);
}

export default Indicator;
