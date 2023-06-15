import React from 'react';
import { View } from 'react-native';

export const FontAwesome = jest.fn(({ name }) => (
    <View testID={`FontAwesome-${name}`} />
));

it('should render FontAwesome icon', () => {
    const { getByTestId } = render(<YourComponent />);
    const icon = getByTestId('FontAwesome-someIconName');
    expect(icon).toBeDefined();
});
