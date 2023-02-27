import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Background from "../components/Background.js";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { Text, useTheme } from "react-native-paper";
import { emailValidator, passwordValidator } from "../utils/validators";
import SubmitButton from "../components/SubmitButton";
import { useTranslation } from "react-i18next";

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _onLoginPressed = () => {
    const emailError = emailValidator(
      email.value,
      t("EmailEmpty"),
      t("EmailInValid")
    );
    const passwordError = passwordValidator(password.value, t("PasswordEmpty"));

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate("MainTab");
  };

  return (
    <Background>
      <Header title={t("Welcome")} />

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

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={{ color: colors.secondary }}>
            {t("ForgotPassword")}?
          </Text>
        </TouchableOpacity>
      </View>

      <SubmitButton label={t("Login")} onClick={_onLoginPressed} />

      <View style={styles.row}>
        <Text style={{ color: colors.secondary, marginRight: 10 }}>
          {t("AccountQuestion")}?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontWeight: "bold", color: colors.primary }}>
            {t("SignUp")}
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
});

export default memo(LoginScreen);
