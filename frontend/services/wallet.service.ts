import api from './api';

export interface WalletData {
  _id: string;
  user_id: string;
  balance: number;
  currency: string;
  last_transaction_at?: string;
  created_at: string;
  updated_at: string;
}

export interface WalletResponse {
  success: boolean;
  data: WalletData;
  message: string;
}

export const walletService = {
  /**
   * Get user wallet balance
   */
  getWallet: async (): Promise<WalletResponse> => {
    try {
      const response = await api.get<WalletResponse>('/wallet');
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { success: false, message: 'Failed to fetch wallet' };
    }
  },

  /**
   * Top up wallet
   */
  topUp: async (amount: number, payment_method: string): Promise<any> => {
    try {
      const response = await api.post('/wallet/topup', {
        amount,
        payment_method,
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { success: false, message: 'Wallet top-up failed' };
    }
  },
};
