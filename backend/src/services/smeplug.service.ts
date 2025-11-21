import axios, { AxiosInstance } from 'axios';
import ProviderConfig from '../models/provider.model.js';
import logger from '../utils/logger.js';

interface SMEPlugDataPurchase {
  network_id: number;
  plan_id: number;
  phone: string;
  customer_reference?: string;
}

interface SMEPlugAirtimePurchase {
  network_id: number;
  amount: number;
  phone: string;
  customer_reference?: string;
}

class SMEPlugService {
  private api: AxiosInstance | null = null;
  
  private async ensureClient() {
    if (this.api) return this.api;
    const cfg = await ProviderConfig.findOne({ code: 'smeplug' });
    const baseURL = cfg?.base_url || 'https://smeplug.ng/api';
    const apiKey = (cfg?.metadata as any)?.env?.SMEPLUG_API_KEY || cfg?.api_key || '';
    
    if (!apiKey) {
      throw new Error('SMEPlug API key not configured');
    }
    
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      timeout: 30000,
    });
    
    return this.api;
  }

  /**
   * Get wallet balance
   * GET /v1/account/balance
   */
  async getWalletBalance() {
    try {
      const api = await this.ensureClient();
      const res = await api.get('/v1/account/balance');
      logger.info('SMEPlug wallet balance retrieved', { balance: res.data });
      return res.data;
    } catch (error: any) {
      logger.error('SMEPlug getWalletBalance error:', error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Get available networks
   * GET /v1/networks
   */
  async getNetworks() {
    try {
      const api = await this.ensureClient();
      const res = await api.get('/v1/networks');
      logger.info('SMEPlug networks retrieved', { count: res.data?.data?.length || 0 });
      return res.data;
    } catch (error: any) {
      logger.error('SMEPlug getNetworks error:', error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Get data plans
   * GET /v1/data/plans
   */
  async getDataPlans() {
    try {
      const api = await this.ensureClient();
      const res = await api.get('/v1/data/plans');
      logger.info('SMEPlug data plans retrieved', { count: res.data?.data?.length || 0 });
      return res.data;
    } catch (error: any) {
      logger.error('SMEPlug getDataPlans error:', error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Purchase airtime
   * POST /v1/airtime/purchase
   */
  async purchaseAirtime(data: SMEPlugAirtimePurchase) {
    try {
      const api = await this.ensureClient();
      const res = await api.post('/v1/airtime/purchase', data);
      logger.info('SMEPlug airtime purchased', { 
        phone: data.phone, 
        amount: data.amount,
        reference: res.data?.data?.reference 
      });
      return res.data;
    } catch (error: any) {
      logger.error('SMEPlug purchaseAirtime error:', error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Purchase data plan
   * POST /v1/data/purchase
   * Payload: { network_id, plan_id, phone, customer_reference }
   */
  async purchaseData(data: SMEPlugDataPurchase) {
    try {
      const api = await this.ensureClient();
      const res = await api.post('/v1/data/purchase', data);
      logger.info('SMEPlug data purchased', { 
        phone: data.phone, 
        plan_id: data.plan_id,
        reference: res.data?.data?.reference 
      });
      return res.data;
    } catch (error: any) {
      logger.error('SMEPlug purchaseData error:', error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Get transaction status
   * GET /v1/transactions/:reference
   */
  async getTransactionStatus(reference: string) {
    try {
      const api = await this.ensureClient();
      const res = await api.get(`/v1/transactions/${encodeURIComponent(reference)}`);
      logger.info('SMEPlug transaction status retrieved', { reference, status: res.data?.data?.status });
      return res.data;
    } catch (error: any) {
      logger.error('SMEPlug getTransactionStatus error:', error.response?.data || error.message);
      throw error;
    }
  }
}

export default new SMEPlugService();
