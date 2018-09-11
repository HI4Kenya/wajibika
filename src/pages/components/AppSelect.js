import { Picker } from 'react-native';
// ...

const AppSelect = ({ children, value, onChange, items, ...props }) => (
  <BaseInput {...props}>
    <Picker selectedValue={value} onValueChange={onChange}>
      {items.map(item => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Picker>
  </BaseInput>
);
