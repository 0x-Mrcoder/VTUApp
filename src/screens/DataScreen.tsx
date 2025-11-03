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

const DataScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const networks = [
    {id: 'mtn', name: 'MTN', color: '#ffcc00'},
    {id: 'glo', name: 'Glo', color: '#00a85a'},
    {id: 'airtel', name: 'Airtel', color: '#ff0000'},
    {id: '9mobile', name: '9mobile', color: '#006f3c'},
  ];

  const dataPlans = [
    {id: 1, name: '500MB - Daily', price: 200},
    {id: 2, name: '1GB - Weekly', price: 500},
    {id: 3, name: '2GB - Monthly', price: 1000},
    {id: 4, name: '5GB - Monthly', price: 2000},
    {id: 5, name: '10GB - Monthly', price: 3500},
    {id: 6, name: '20GB - Monthly', price: 6000},
  ];

  const handlePurchase = () => {
    if (!selectedNetwork) {
      Alert.alert('Error', 'Please select a network');
      return;
    }
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter phone number');
      return;
    }
    if (!selectedPlan) {
      Alert.alert('Error', 'Please select a data plan');
      return;
    }

    const plan = dataPlans.find(p => p.name === selectedPlan);
    Alert.alert(
      'Confirm Purchase',
      `Buy ${selectedPlan} for ${phoneNumber} on ${selectedNetwork}?\nAmount: ₦${plan?.price}`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Confirm',
          onPress: () => {
            Alert.alert('Success', 'Data purchase successful!');
            setPhoneNumber('');
            setSelectedPlan('');
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
          <Text style={styles.title}>Buy Data Bundle</Text>

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
            <Text style={styles.label}>Select Data Plan</Text>
            <View style={styles.plansList}>
              {dataPlans.map(plan => (
                <TouchableOpacity
                  key={plan.id}
                  style={[
                    styles.planCard,
                    selectedPlan === plan.name && styles.planCardSelected,
                  ]}
                  onPress={() => setSelectedPlan(plan.name)}>
                  <View style={styles.planInfo}>
                    <Text style={[
                      styles.planName,
                      selectedPlan === plan.name && styles.planNameSelected,
                    ]}>
                      {plan.name}
                    </Text>
                    <Text style={[
                      styles.planPrice,
                      selectedPlan === plan.name && styles.planPriceSelected,
                    ]}>
                      ₦{plan.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
            <Text style={styles.purchaseButtonText}>Purchase Data</Text>
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
  plansList: {
    gap: 10,
  },
  planCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  planCardSelected: {
    backgroundColor: '#2ecc71',
    borderColor: '#2ecc71',
  },
  planInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  planNameSelected: {
    color: '#fff',
  },
  planPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },
  planPriceSelected: {
    color: '#fff',
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

export default DataScreen;
