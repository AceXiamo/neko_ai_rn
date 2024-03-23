import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Title from './components/Title'
import Today from './components/Today'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Title/>
      <Today/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#10b981',
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 20
  }
});
