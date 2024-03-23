import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import Today from './components/Today';
import Bottom from './components/Bottom';
import { flexCol } from '@/common/style';
import RecordCard from './components/RecordCard';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          ...flexCol,
          gap: 15,
          backgroundColor: '#10b981',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.15,
          paddingBottom: 15,
          zIndex: 2,
        }}
      >
        <Title />
        <Today />
        <Bottom />
      </View>
      <View
        style={{
          backgroundColor: '#E5E7EB',
          flex: 1,
          zIndex: 1,
        }}
      >
        <RecordCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#10b981',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});
