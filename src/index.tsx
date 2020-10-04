import { NativeModules } from 'react-native';

type KhaltiType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Khalti } = NativeModules;

export default Khalti as KhaltiType;
