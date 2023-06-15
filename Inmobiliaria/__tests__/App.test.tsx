/**
 * @format
 */
// jest.mock('@fortawesome/react-native-fontawesome', () => ({
//   FontAwesomeIcon: ''
// }))

import 'react-native';
import React from 'react';
import App from '../App';

// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
jest.mock('react-native-responsive-screen');
// import Icon from 'react-native-vector-icons/FontAwesome';
jest.mock('react-native-vector-icons');
// Note: test renderer must be required after react-native
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

// it('should render FontAwesome icon', () => {
//   const { getByTestId } = render(<App />);
//   const icon = getByTestId('FontAwesome-someIconName');
//   expect(icon).toBeDefined();
// });

it('renders correctly', () => {
  render(<App />);
});
