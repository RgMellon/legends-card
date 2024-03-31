import { api } from '../../infra/http';

import { IRegisterRate, RateProps } from '../../domain/usecases/RegisterRate';

export class RegisterRatePlayer implements IRegisterRate {
  async register(rate: RateProps) {
    await api.post('rates', rate);
  }
}
