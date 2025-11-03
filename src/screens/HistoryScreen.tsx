import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

interface Transaction {
  id: number;
  type: string;
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const HistoryScreen: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      type: 'Airtime',
      description: 'MTN Airtime - 08012345678',
      amount: -500,
      date: 'Today, 10:30 AM',
      status: 'completed',
    },
    {
      id: 2,
      type: 'Data',
      description: 'Glo 5GB Monthly - 08012345678',
      amount: -2000,
      date: 'Yesterday, 3:45 PM',
      status: 'completed',
    },
    {
      id: 3,
      type: 'Bill Payment',
      description: 'Electricity - Meter 12345678',
      amount: -5000,
      date: 'Nov 1, 2025',
      status: 'completed',
    },
    {
      id: 4,
      type: 'Wallet Funding',
      description: 'Bank Transfer',
      amount: 10000,
      date: 'Oct 31, 2025',
      status: 'completed',
    },
    {
      id: 5,
      type: 'Airtime',
      description: 'Airtel Airtime - 08087654321',
      amount: -1000,
      date: 'Oct 30, 2025',
      status: 'completed',
    },
    {
      id: 6,
      type: 'Data',
      description: 'MTN 2GB Monthly - 08012345678',
      amount: -1000,
      date: 'Oct 29, 2025',
      status: 'pending',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#2ecc71';
      case 'pending':
        return '#f39c12';
      case 'failed':
        return '#e74c3c';
      default:
        return '#7f8c8d';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Airtime':
        return '📱';
      case 'Data':
        return '🌐';
      case 'Bill Payment':
        return '💡';
      case 'Wallet Funding':
        return '💰';
      default:
        return '📊';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transaction History</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {transactions.map(transaction => (
          <TouchableOpacity
            key={transaction.id}
            style={styles.transactionCard}>
            <View style={styles.transactionIcon}>
              <Text style={styles.iconText}>
                {getTypeIcon(transaction.type)}
              </Text>
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionType}>{transaction.type}</Text>
              <Text style={styles.transactionDescription}>
                {transaction.description}
              </Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <View style={styles.transactionRight}>
              <Text
                style={[
                  styles.transactionAmount,
                  transaction.amount > 0
                    ? styles.amountPositive
                    : styles.amountNegative,
                ]}>
                {transaction.amount > 0 ? '+' : ''}₦
                {Math.abs(transaction.amount).toLocaleString()}
              </Text>
              <View
                style={[
                  styles.statusBadge,
                  {backgroundColor: getStatusColor(transaction.status)},
                ]}>
                <Text style={styles.statusText}>
                  {transaction.status.charAt(0).toUpperCase() +
                    transaction.status.slice(1)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  scrollContent: {
    padding: 20,
  },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    fontSize: 24,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  transactionDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: '#95a5a6',
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  amountPositive: {
    color: '#2ecc71',
  },
  amountNegative: {
    color: '#e74c3c',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default HistoryScreen;
