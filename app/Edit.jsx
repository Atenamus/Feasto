import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EditableInput from "@components/EditableInput";
import { useUser } from "@context/userContextProvider";
import authService from "@services/auth";
const Edit = () => {
  const { userData } = useUser();
  const updateName = async (name) => {
    try {
      await authService.updateName(name);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <EditableInput
        label="Name"
        initialValue={userData.name}
        updateHandler={updateName}
      />
      <EditableInput label="Email" initialValue={userData.email} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
export default Edit;
