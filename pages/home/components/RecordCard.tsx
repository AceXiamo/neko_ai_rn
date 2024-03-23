import { flexCol, flexRow, globalFont } from '@/common/style';
import { View, StyleSheet, Text } from 'react-native';

export default function ({}: {}) {
  return (
    <View style={styles.container}>
      <Item />
    </View>
  );
}

function Item() {
  return (
    <View style={{ ...flexCol, padding: 20 }}>
      <TopBar />
    </View>
  );
}

function TopBar({}: {}) {
  return (
    <View
      style={{
        ...flexRow,
        backgroundColor: '#F3F4F6',
        borderTopStartRadius: 4,
        borderTopEndRadius: 4,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text style={{ ...globalFont }}>2024-02-01</Text>
      <View style={{ ...flexRow, gap: 10, alignItems: 'center' }}>
        <View style={{ ...flexRow, gap: 5, alignItems: 'center' }}>
          <FontWithBorder text="出" color="#2EC55E" />
          <PriceItem value={233} />
        </View>
        <View style={{ ...flexRow, gap: 5, alignItems: 'center' }}>
          <FontWithBorder text="入" color="#F04444" />
          <PriceItem value={233} />
        </View>
      </View>
    </View>
  );
}

function FontWithBorder({ text, color }: { text: string; color: string }) {
  return (
    <View
      style={{
        borderColor: color,
        borderWidth: 1,
        padding: 1,
        borderRadius: 3,
      }}
    >
      <Text style={{ ...globalFont, color: color, fontSize: 10 }}>{text}</Text>
    </View>
  );
}

function PriceItem({ value }: { value: number }) {
  return (
    <View style={{ ...flexRow, alignItems: 'flex-end', gap: 2 }}>
      <Text style={{ ...globalFont, fontSize: 12 }}>¥</Text>
      <Text style={{ ...globalFont, fontSize: 15 }}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});
