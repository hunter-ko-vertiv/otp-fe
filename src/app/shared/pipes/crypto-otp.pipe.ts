import { Pipe, PipeTransform } from '@angular/core';
import * as crypto from "crypto";
import { of } from "rxjs";

@Pipe({
  name: 'cryptoOtp'
})
export class CryptoOtpPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    const time = args[0] ? args[0]: Math.floor(Math.floor(new Date().getTime() / 1000) / 30);
    const hmac = crypto.createHmac('sha1', value).update(time.toString()).digest();
    const lastByte = hmac[19];
    const offset = lastByte & 0xf;
    let binCode = (
      ((hmac[offset] & 0x7f) << 24 |
      (hmac[offset+1] & 0xff) << 16 |
      (hmac[offset+2] & 0xff) << 8 |
      (hmac[offset+3] & 0xff)) % 1000000).toString(10);
    if (binCode.length < 6) {
      for (let i = binCode.length; i < 6; i++) {
        binCode = '0' + binCode;
      }
    }
    return binCode;
  }

}
