import api from './api';

export interface UserUpdateData {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  date_of_birth?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export const userService = {
  /**
   * Get user profile
   */
  getProfile: async (): Promise<any> => {
    try {
      const response = await api.get('/users/profile');
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { success: false, message: 'Failed to fetch profile' };
    }
  },

  /**
   * Update user profile
   */
  updateProfile: async (data: UserUpdateData): Promise<any> => {
    try {
      const response = await api.put('/users/profile', data);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { success: false, message: 'Profile update failed' };
    }
  },

  /**
   * Update password
   */
  updatePassword: async (currentPassword: string, newPassword: string): Promise<any> => {
    try {
      const response = await api.put('/users/password', {
        current_password: currentPassword,
        new_password: newPassword,
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { success: false, message: 'Password update failed' };
    }
  },
};
