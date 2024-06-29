import  { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../components/Input";
import CustomBtn from "../../components/Button";
import { Link } from "expo-router";
import client from "../../services/appwrite";
import { Account } from "react-native-appwrite";

const Signup = () => {
  const [loading, setloading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    const account = new Account(client);
    const promise = account.create(
      "unique()",
      data.email,
      data.password,
      data.name
    );
    promise.then(() => console.log("accout created"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          rules={{
            required: "Name is required",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.name}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.email}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.password}
              secureTextEntry
            />
          )}
          name="password"
        />
        <CustomBtn title="Sign Up" onPress={handleSubmit(handleSignUp)} />
        <Text style={styles.signInText}>
          Already have an Account?{" "}
          <Link href="/sign-in" style={{ color: "#ff0000" }}>
            Sign-In
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    letterSpacing: 1,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
  },
  signInText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
  },
  errorText: {
    color: "red",
  },
});

export default Signup;
