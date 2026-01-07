import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Switch,
  ScrollView,
} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import { Dropdown } from 'react-native-element-dropdown';

const dropdownData = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
  { label: 'Option 6', value: '6' },
  { label: 'Option 7', value: '7' },
];

export default function LearningTopic1() {
  const [name, setName] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState<'yes' | 'no'>('yes');

  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const onPressButton = () => {
    Alert.alert('Button Pressed', `Hello ${name || 'User'} 👋`);
  };

  return (
    <BaseScreen title="Learning Topic 1">
      <ScrollView>
        {/* Text Example */}
        <Text style={styles.title}>1️⃣ Text Example</Text>
        <Text style={styles.description}>
          This is a simple Text component in React Native.
        </Text>

        {/* View Example */}
        <Text style={styles.title}>2️⃣ View Example</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>I am inside a View</Text>
        </View>

        <Text style={styles.title}>3️⃣ TextInput Example</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text style={styles.title}>4️⃣ Button Example</Text>
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
        <Text style={styles.title}>5️⃣ Switch</Text>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />

        <Text style={styles.title}>6️⃣ CheckBox</Text>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsChecked(!isChecked)}
        >
          <View
            style={[styles.checkbox, isChecked && styles.checkboxChecked]}
          />
          <Text>Accept Terms</Text>
        </TouchableOpacity>

        <Text style={styles.title}>7️⃣ Chip</Text>
        <TouchableOpacity style={styles.chip}>
          <Text style={styles.chipText}>React Native</Text>
        </TouchableOpacity>

        <Text style={styles.title}>8️⃣ Card</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
          <Text>This is a simple card component.</Text>
        </View>

        <Text style={styles.title}>9️⃣ Radio Button</Text>
        {['yes', 'no'].map(option => (
          <TouchableOpacity
            key={option}
            style={styles.radioContainer}
            onPress={() => setSelectedRadio(option as 'yes' | 'no')}
          >
            <View style={styles.radioOuter}>
              {selectedRadio === option && <View style={styles.radioInner} />}
            </View>
            <Text>{option.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}

        {/* Dropdown Menu (Simple) 
        /**
        * NOTE: Standard React Native Picker/Dropdown is not used here.
        * We are using 'react-native-element-dropdown' (https://www.npmjs.com/package/react-native-element-dropdown).
        * * WHY: This dependency was chosen because it offers significantly more 
        * flexibility and customization options compared to other dropdown libraries.
        */}
        <Text style={styles.title}>🔟 Dropdown Menu</Text>

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#1976D2' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropdownData}
          search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select option' : '...'}
          searchPlaceholder="Search..."
          value={dropdownValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setDropdownValue(item.value);
            setIsFocus(false);
          }}
          renderRightIcon={visible => (
            <Text style={{ marginRight: 8 }}>{visible ? '▲' : '▼'}</Text>
          )}
        />

        <Text style={styles.description}>
          Selected: {dropdownValue ?? 'None'}
        </Text>
      </ScrollView>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    marginTop: 6,
    color: '#555',
  },
  box: {
    marginTop: 10,
    padding: 16,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
  },
  boxText: {
    fontSize: 16,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#1976D2',
  },
  chip: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
    marginTop: 8,
  },
  chipText: {
    fontSize: 14,
  },
  card: {
    marginTop: 10,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  cardTitle: {
    fontWeight: '700',
    marginBottom: 6,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1976D2',
  },
  dropdownItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    marginTop: 6,
    borderRadius: 6,
  },
  dropdownSelected: {
    backgroundColor: '#BBDEFB',
  },
  sliderContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  sliderButton: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#E3F2FD',
  },
  pickerContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    overflow: 'scroll',
  },
  dropdown: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
