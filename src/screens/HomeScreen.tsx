import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {MainTabParamList, RootStackParamList} from '../navigation/AppNavigator';

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const services = [
    {
      id: 1,
      title: 'Buy Airtime',
      icon: '📱',
      screen: 'Airtime' as const,
      color: '#3498db',
    },
    {
      id: 2,
      title: 'Buy Data',
      icon: '🌐',
      screen: 'Data' as const,
      color: '#2ecc71',
    },
    {
      id: 3,
      title: 'Pay Bills',
      icon: '💡',
      screen: 'Bills' as const,
      color: '#e74c3c',
    },
    {
      id: 4,
      title: 'Transaction History',
      icon: '📊',
      screen: 'History' as const,
      color: '#f39c12',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome Back!</Text>
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Wallet Balance</Text>
            <Text style={styles.balanceAmount}>₦ 50,000.00</Text>
            <TouchableOpacity style={styles.fundButton}>
              <Text style={styles.fundButtonText}>+ Fund Wallet</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <View style={styles.servicesGrid}>
            {services.map(service => (
              <TouchableOpacity
                key={service.id}
                style={[styles.serviceCard, {backgroundColor: service.color}]}
                onPress={() => navigation.navigate(service.screen)}>
                <Text style={styles.serviceIcon}>{service.icon}</Text>
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.recentContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <View style={styles.transactionCard}>
            <View style={styles.transactionRow}>
              <View>
                <Text style={styles.transactionTitle}>Airtime Purchase</Text>
                <Text style={styles.transactionDate}>Today, 10:30 AM</Text>
              </View>
              <Text style={styles.transactionAmount}>-₦500</Text>
            </View>
          </View>
          <View style={styles.transactionCard}>
            <View style={styles.transactionRow}>
              <View>
                <Text style={styles.transactionTitle}>Data Bundle</Text>
                <Text style={styles.transactionDate}>Yesterday, 3:45 PM</Text>
              </View>
              <Text style={styles.transactionAmount}>-₦2,000</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  balanceCard: {
    backgroundColor: '#3498db',
    borderRadius: 15,
    padding: 20,
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  fundButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  fundButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  servicesContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  serviceCard: {
    width: '47%',
    aspectRatio: 1,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  serviceTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  recentContainer: {
    marginBottom: 20,
  },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  transactionDate: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 4,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});

export default HomeScreen;
