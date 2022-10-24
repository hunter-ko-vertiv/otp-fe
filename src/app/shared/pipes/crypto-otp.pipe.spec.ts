import { CryptoOtpPipe } from './crypto-otp.pipe';

describe('CryptoOtpPipe', () => {
  it('create an instance', () => {
    const pipe = new CryptoOtpPipe();
    expect(pipe).toBeTruthy();
  });
});
