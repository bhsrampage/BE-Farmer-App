import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background.js";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from "../utils/validators";
import { useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";
import SubmitButton from "../components/SubmitButton.js";

const SignupScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value, t("NameEmpty"));
    const emailError = emailValidator(
      email.value,
      t("EmailEmpty"),
      t("EmailInValid")
    );
    const passwordError = passwordValidator(password.value, t("PasswordEmpty"));

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
  };

  return (
    <Background>
      <Header title={t("CreateAccount")} />

      <TextInput
        label={t("Name")}
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label={t("Email")}
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label={t("Password")}
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <SubmitButton label={t("SignUp")} onClick={_onSignUpPressed} />

      <View style={styles.row}>
        <Text
          style={{
            color: colors.secondary,
            marginRight: 10,
          }}
        >
          {t("HaveAccount")}?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontWeight: "bold",
              color: colors.primary,
            }}
          >
            {t("Login")}
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
});

export default memo(SignupScreen);
