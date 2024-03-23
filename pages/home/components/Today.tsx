import { Text, View, StyleSheet } from "react-native";
import { globalFont } from '@/common/style';

export default function () {
  return (
    <View style={styles.statusBar}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
        }}
      >
        <Text> 🌈</Text>
        <Text style={{ ...globalFont, fontSize: 15 }}>Today</Text>
      </View>
      <View style={styles.threeBar}>
        <Item title="支出" value="0" />
        <Item title="收入" value="0" textColor="#F04444" />
        <Item title="较昨天" secTitle="(支出)" value="0" />
      </View>
    </View>
  );
}

function Item({
  title,
  secTitle,
  value,
  textColor = '#2EC55E',
}: {
  title: string;
  secTitle?: string;
  value: string;
  textColor?: string;
}) {
  return (
    <View
      style={{
        backgroundColor: '#F3F4F6',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'flex-end' }}>
        <Text style={{ ...globalFont }}>{title}</Text>
        {secTitle && <Text style={{ ...globalFont, fontSize: 12, color: textColor }}>{secTitle}</Text>}
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'flex-end' }}>
        <Text style={{ ...globalFont, color: textColor, fontSize: 12 }}>¥</Text>
        <Text style={{ ...globalFont, color: textColor }}>{value}</Text>
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
