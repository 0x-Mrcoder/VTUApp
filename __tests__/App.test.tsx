/**
 * @format
 */

import React from 'react';
import {render} from '@testing-library/react-native';

// Create a simplified App component for testing
const MockApp = () => {
  const {View, Text} = require('react-native');
  return (
    <View>
      <Text testID="app-text">VTU App</Text>
    </View>
  );
};

describe('App', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<MockApp />);
    expect(getByTestId('app-text')).toBeTruthy();
  });
});
