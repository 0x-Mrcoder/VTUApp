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

const AirtimeScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');

  const networks = [
    {id: 'mtn', name: 'MTN', color: '#ffcc00'},
    {id: 'glo', name: 'Glo', color: '#00a85a'},
    {id: 'airtel', name: 'Airtel', color: '#ff0000'},
    {id: '9mobile', name: '9mobile', color: '#006f3c'},
  ];

  const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

  const handlePurchase = () => {
    if (!selectedNetwork) {
      Alert.alert('Error', 'Please select a network');
      return;
    }
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter phone number');
      return;
    }
    if (!amount) {
      Alert.alert('Error', 'Please enter amount');
      return;
    }

    Alert.alert(
      'Confirm Purchase',
      `Buy ₦${amount} ${selectedNetwork} airtime for ${phoneNumber}?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Confirm',
          onPress: () => {
            Alert.alert('Success', 'Airtime purchase successful!');
            setPhoneNumber('');
            setAmount('');
            setSelectedNetwork('');
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Buy Airtime</Text>

          <View style={styles.section}>
            <Text style={styles.label}>Select Network</Text>
            <View style={styles.networkGrid}>
              {networks.map(network => (
                <TouchableOpacity
                  key={network.id}
                  style={[
                    styles.networkCard,
                    {borderColor: network.color},
                    selectedNetwork === network.name && {
                      backgroundColor: network.color,
                    },
                  ]}
                  onPress={() => setSelectedNetwork(network.name)}>
                  <Text
                    style={[
                      styles.networkName,
                      selectedNetwork === network.name && styles.networkNameSelected,
                    ]}>
                    {network.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="080XXXXXXXX"
              placeholderTextColor="#999"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              maxLength={11}
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

            <Text style={styles.quickAmountLabel}>Quick Select</Text>
            <View style={styles.quickAmountGrid}>
              {quickAmounts.map(amt => (
                <TouchableOpacity
                  key={amt}
                  style={styles.quickAmountButton}
                  onPress={() => setAmount(amt.toString())}>
                  <Text style={styles.quickAmountText}>₦{amt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
            <Text style={styles.purchaseButtonText}>Purchase Airtime</Text>
          </TouchableOpacity>
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
  networkGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  networkCard: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  networkName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  networkNameSelected: {
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
  quickAmountLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 15,
    marginBottom: 10,
  },
  quickAmountGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  quickAmountButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  quickAmountText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  purchaseButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  purchaseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AirtimeScreen;
