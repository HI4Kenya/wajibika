import { TextInput } from 'react-native';
import {BaseInput} from '../assets/BaseInput.js'
// ...

const AppInput = ({ children, value, onChange, ...props }) => (
  <BaseInput {...props}>
    <TextInput value={value} onChangeText={onChange} />
  </BaseInput>
);