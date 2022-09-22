import { THEME } from '@/theme';
import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';

interface LoaderProps extends React.ComponentProps<typeof ActivityIndicator> {}

const Loader = (props: LoaderProps) => {
  return <ActivityIndicator animating color={THEME.MAIN} {...props} />;
};

export default Loader;
