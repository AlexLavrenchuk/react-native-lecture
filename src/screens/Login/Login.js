import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { Formik } from 'formik';
import { ThemedInput, ThemedButton, ThemedErrorText } from "../../components";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >{()=>(

        <Text>Login</Text>
        <ThemedInput value={email} onChangeText={value => setEmail(value)} />

        <ThemedInput
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />

        <ThemedErrorText text={"вот и все"} />

        <ThemedButton
          title="Login"
          onPress={() => navigation.navigate("Dashboard")}
        />

    )}
    </Formik>
  );
};

Login.navigationOptions = {
  title: "Login"
};

export default Login;
