# Vietnam QR Pay

Thư viện hỗ trợ encode/decode mã QR của VietQR & VNPayQR

## Install

```bash
npm install vietnam-qr-pay
```

## Decode

### VietQR
```javascript
import { QRPay } from 'vietnam-qr-pay';

const qrContent = '00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA5303704540410005802VN62150811Chuyen tien6304BBB8'
const qrPay = new QRPay(qrContent);
console.log(qrPay.isValid) // true
console.log(qrPay.provider.name) // VIETQR
console.log(qrPay.consumer.bankBin) // 970416
console.log(qrPay.consumer.bankNumber) // 257678859
console.log(qrPay.amount) // 1000
console.log(qrPay.additionalData.purpose) // Chuyen tien

```

### VNPay
```javascript
import { QRPay } from 'vietnam-qr-pay';

const qrContent = '00020101021126280010A0000007750110010531314453037045408210900005802VN5910CELLPHONES62600312CPSHN ONLINE0517021908061613127850705ONLHN0810CellphoneS63047685'
const qrPay = new QRPay(qrContent);
console.log(qrPay.isValid) // true
console.log(qrPay.provider.name) // VNPAY
console.log(qrPay.merchant.merchantId) // 0105313144
console.log(qrPay.amount) // 21090000
console.log(qrPay.additionalData.store) // CPSHN ONLINE
console.log(qrPay.additionalData.terminal) // ONLHN
console.log(qrPay.additionalData.purpose) // CellphoneS
console.log(qrPay.additionalData.reference) // 02190806161312785

```