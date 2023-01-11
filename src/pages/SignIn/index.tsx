import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export const SignIn: React.FC = () => {
  const { signIn, loading } = useAuth();

  function handleSign() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button
        title={loading + " Sign In"}
        onPress={handleSign}
        disabled={loading}
      />
    </View>
  );
};
