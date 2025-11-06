import { AlertProvider } from '@/components/AlertContext';
import { ProfileProvider } from '@/components/ProfileContext';
import { ThemeProvider } from '@/components/ThemeContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext';

// Keep splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen after the fonts have loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Don't render anything until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <AlertProvider>
        <ProfileProvider>
          <AuthProvider>
            <StatusBar style="light" />
            <Stack>
              <Stack.Screen 
                name="(tabs)" 
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen 
                name="login" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="signup" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="notifications" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="more" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="buy-airtime" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="buy-data" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="pay-bills" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="add-money" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="edit-profile" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="security" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="notifications-settings" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="help-support" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="about" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="payment-methods" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="settings" 
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen 
                name="modal" 
                options={{
                  presentation: 'modal',
                }}
              />
            </Stack>
          </AuthProvider>
        </ProfileProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}
