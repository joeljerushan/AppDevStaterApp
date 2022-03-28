import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, Button, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.push('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={styles.container}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        
        <Layout style={styles.layout} level='4'>
            <Layout style={styles.containerInner} level='4'>
                <Layout style={styles.layout} level='1'>
                    <Text>1/2</Text>
                </Layout>
                <Layout style={styles.layout} level='2'>
                    <Text>1/2</Text>
                </Layout>
            </Layout>
        </Layout>
        <Layout style={styles.layout} level='3'>
            <Text>3</Text>
        </Layout>
        <Layout style={styles.layout} level='2'>
            <Text>2</Text>
        </Layout>

        <Layout style={styles.layout} level='1'>
            <Text>1</Text>
        </Layout>

      </Layout>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    containerInner: {
        flex: 1,
        flexDirection: 'row',
    },
    layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});