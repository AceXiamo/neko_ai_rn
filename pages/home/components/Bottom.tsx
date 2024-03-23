import { View, Text, StyleSheet } from 'react-native';
import { flexRow } from '@/common/style';
import { Iconify } from 'react-native-iconify';

export default function () {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...flexRow,
          gap: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 15 }}>2024-03</Text>
        <Iconify icon="heroicons:calendar-days-solid" color="#fff" size={20} />
      </View>
      <View style={{ ...flexRow, gap: 10 }}>
        <LineEndItem title="总支出" value="¥222" />
        <LineEndItem title="总收入" value="¥222" />
      </View>
    </View>
  );
}

function LineEndItem({ title, value }: { title: string; value: string }) {
  const fontStyles = { color: '#fff', fontSize: 14 };

  return (
    <View style={{ ...flexRow, gap: 2 }}>
      <Text style={fontStyles}>{title}</Text>
      <Text style={fontStyles}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
});
