import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Login: 'login',
      Singup: 'singup',
      Home: 'home',
      createProduct: 'createproduct',
      productDetails: 'productdetails',
    },
  },
};

export default linking;
