import { StyleSheet, View, Text } from "react-native";

export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text>🐱</Text>
      <Text style={{ color: 'white', fontSize: 15, fontFamily: 'TsukuARdGothicStd-D' }}>Neko 记账</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  }
});
