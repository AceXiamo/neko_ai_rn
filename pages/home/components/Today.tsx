import { Text, View, StyleSheet } from "react-native";
import { globalFont } from "../../../common/style";

export default function () {
  return (
    <View style={styles.statusBar}>
      <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: 'center' }}>
        <Text>🌈</Text>
        <Text style={{ ...globalFont, fontSize: 15 }}>Today</Text>
      </View>
      <View style={styles.threeBar}>
        <View style={{ backgroundColor: '#F3F4F6', display: 'flex', flexDirection: 'column' }}>
          <Text style={{ ...globalFont, }}>支出</Text>
          <Text style={{ ...globalFont, color: '#2EC55E' }}>¥0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  threeBar: {
    display: "flex",
    flexDirection: "row",
    gap: 10
  }
})
