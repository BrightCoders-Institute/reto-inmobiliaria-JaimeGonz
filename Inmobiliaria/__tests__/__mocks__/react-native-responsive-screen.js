export const widthPercentageToDP = jest.fn(() => string);
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

it('should render correctly', () => {
    expect(wp('%50')).toBe(string); // Assuming the mock always returns 100
});
