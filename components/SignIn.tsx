import React from 'react';
import { Pressable, TextInput, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/UseSignIn';

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    width: 320,
    margin: 5,
    padding: 10, 
  },
  submitButton: {
    backgroundColor: '#0366d6',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  },
});

const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

const handleSubmit = async (values, signIn) => {
  const { email, password } = values;

  try {
    await signIn({ email, password });
  } catch (e) {
    console.log(e);
  }
};

export const SignInContainer = ({ handleSubmit }) => {
  const [signIn, { data, loading, error }] = useSignIn();

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => handleSubmit(values, signIn)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="E-mail..."
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
          <TextInput
            style={styles.inputBox}
            placeholder="Password..."
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={true}
          />
          {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const SignIn = () => {
  return <SignInContainer handleSubmit={handleSubmit} />;
};

export default SignIn;