import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ValidationUtil } from '../../../utils/ValidationUtil';
import { RouteNames } from '../../../services/navigation/RouteNames';

export const useLearningTopic24Form = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState('email@gmail.com');
  const [password, setPassword] = useState('Test@123');
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (ValidationUtil.isEmpty(email)) {
      newErrors.email = 'Email is required';
    } else if (!ValidationUtil.isEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (ValidationUtil.isEmpty(password)) {
      newErrors.password = 'Password is required';
    } else if (!ValidationUtil.isStrongPassword(password)) {
      newErrors.password =
        'Password must be 6+ chars with Uppercase, Number, and Symbol';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (errors.email) setErrors({ ...errors, email: undefined });
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (errors.password) setErrors({ ...errors, password: undefined });
  };

  const handleSignIn = () => {
    if (!validate()) return;

    console.log('Form is valid! Submitting...', { email, password });

    navigation.navigate(RouteNames.TAMAGUI_UI, {
      userEmail: email,
      password: password,
    });
  };

  return {
    email,
    password,
    errors,
    handleEmailChange,
    handlePasswordChange,
    handleSignIn,
  };
};
