import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

const BillsScreen: React.FC = () => {
  const [meterNumber, setMeterNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedBillType, setSelectedBillType] = useState('');

  const billTypes = [
    {id: 1, name: 'Electricity', icon: '⚡'},
    {id: 2, name: 'Cable TV', icon: '📺'},
    {id: 3, name: 'Internet', icon: '🌐'},
    {id: 4, name: 'Water', icon: '💧'},
  ];

  const handlePayment = () => {
    if (!selectedBillType) {
      Alert.alert('Error', 'Please select a bill type');
      return;
    }
    if (!meterNumber) {
      Alert.alert('Error', 'Please enter meter/account number');
      return;
    }
    if (!amount) {
      Alert.alert('Error', 'Please enter amount');
      return;
    }

    Alert.alert(
      'Confirm Payment',
      `Pay ₦${amount} for ${selectedBillType}?\nAccount: ${meterNumber}`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Confirm',
          onPress: () => {
            Alert.alert('Success', 'Bill payment successful!');
            setMeterNumber('');
            setAmount('');
            setSelectedBillType('');
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Pay Bills</Text>

          <View style={styles.section}>
            <Text style={styles.label}>Select Bill Type</Text>
            <View style={styles.billTypeGrid}>
              {billTypes.map(type => (
                <TouchableOpacity
                  key={type.id}
                  style={[
                    styles.billTypeCard,
                    selectedBillType === type.name && styles.billTypeCardSelected,
                  ]}
                  onPress={() => setSelectedBillType(type.name)}>
                  <Text style={styles.billTypeIcon}>{type.icon}</Text>
                  <Text
                    style={[
                      styles.billTypeName,
                      selectedBillType === type.name && styles.billTypeNameSelected,
                    ]}>
                    {type.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>
              {selectedBillType === 'Electricity'
                ? 'Meter Number'
                : 'Account Number'}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter number"
              placeholderTextColor="#999"
              value={meterNumber}
              onChangeText={setMeterNumber}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              placeholderTextColor="#999"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
            <Text style={styles.payButtonText}>Pay Bill</Text>
          </TouchableOpacity>

          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              💡 Your bill payment will be processed instantly
            </Text>
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
  content: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
  },
  billTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  billTypeCard: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  billTypeCardSelected: {
    backgroundColor: '#e74c3c',
    borderColor: '#e74c3c',
  },
  billTypeIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  billTypeName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
  },
  billTypeNameSelected: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  payButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#fff3cd',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  infoText: {
    color: '#856404',
    fontSize: 14,
  },
});

export default BillsScreen;
