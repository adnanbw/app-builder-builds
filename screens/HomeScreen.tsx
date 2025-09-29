

import React, { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity 
          style={[styles.button, styles.buttonprimary]} 
          disabled={false}
          onPress={() => console.log('Button pressed')}
        >
          <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
      
        
        <TextInput
          style={styles.input}
          placeholder="dfadfa"
          secureTextEntry={false}
          keyboardType="default"
        />
      
        
        <TouchableOpacity 
          style={[styles.button, styles.buttonprimary]} 
          disabled={false}
          onPress={() => console.log('Button pressed')}
        >
          <Text style={styles.buttonText}>adfasd</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF'
  },
  
        button: {
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center'
        },
        buttonprimary: {
          backgroundColor: '#3B82F6'
        },
        buttonsecondary: {
          backgroundColor: '#6B7280'
        },
        buttonText: {
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: '600'
        },
  
        input: {
          borderWidth: 1,
          borderColor: '#D1D5DB',
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 8,
          fontSize: 16,
          backgroundColor: '#FFFFFF'
        }
      
});
    