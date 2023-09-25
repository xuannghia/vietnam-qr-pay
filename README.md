# Vietnam QR Pay

Thư viện hỗ trợ encode/decode mã QR của VietQR & VNPayQR

## Install

```bash
npm install vietnam-qr-pay
```


## Encode - Tạo mã QR

### VietQR Tĩnh
```javascript

import { QRPay, BanksObject } from 'vietnam-qr-pay';

const qrPay = QRPay.initVietQR({
  bankBin: BanksObject.acb.bin,
  bankNumber: '257678859', // Số tài khoản
})
const content = qrPay.build()

console.log(content)
// 00020101021138530010A0000007270123000697041601092576788590208QRIBFTTA53037045802VN6304AE9F
 
```

### VietQR Động

```javascript
import { QRPay, BanksObject } from 'vietnam-qr-pay';

const qrPay = QRPay.initVietQR({
  bankBin: BanksObject.acb.bin,
  bankNumber: '257678859', // Số tài khoản
  amount: '10000', // Số tiền
  purpose: 'Chuyen tien', // Nội dung chuyển tiền
})
const content = qrPay.build()

console.log(content)
// 00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA53037045405100005802VN62150811Chuyen tien630453E6

```

### VNPay 

```javascript
const qrPay = QRPay.initVNPayQR({
  merchantId: '0102154778',
  merchantName: 'TUGIACOMPANY',
  store: 'TU GIA COMPUTER',
  terminal: 'TUGIACO1',
})
const content = qrPay.build()
console.log(content)
// 00020101021126280010A0000007750110010531314453037045408210900005802VN5910CELLPHONES62600312CPSHN ONLINE0517021908061613127850705ONLHN0810CellphoneS63047685

```


## Decode mã QR

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


## `QRPay` class


```javascript
import { QRPay } from 'vietnam-qr-pay';
```

| Name | Type | Description |
| --- | --- | --- |
| `isValid` | `boolean` | Kiểm tra tính hợp lệ của mã QR |
| `initMethod` | `string` | Phương thức khởi tạo (`11` - QR Tĩnh, `12` - QR động) |
| `provider` | `Provider` | Thông tin nhà cung cấp |
| `merchant` | `Merchant` | Thông tin merchant |
| `consumer` | `Consumer` | Thông tin người thanh toán |
| `amount` | `string` | Số tiền giao dịch |
| `currency` | `string` | Mã tiền tệ (VNĐ: 704) |
| `nation` | `string` | Mã quốc gia |
| `additionalData` | `AdditionalData` | Thông tin bổ sung |
| `crc` | `string` | Mã kiểm tra |
| `build()` | `method` | Tạo lại mã QR mới |

### `Provider` class

Thông tin đơn vị cung cấp mã QR (VietQR, VNPay)


| Name | Type | Description |
| --- | --- | --- |
| `guid` | `string` | Mã định danh toàn cầu |
| `name` | `string` | Tên nhà cung cấp |

### `Merchant` class

Thông tin merchant (Đơn vị chấp nhận thanh toán)

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | Mã định danh đơn vị CNTT |
| `name` | `string` | Tên đơn vị CNTT |

### `Consumer` class

Thông tin người thanh toán

| Name | Type | Description |
| --- | --- | --- |
| `bankBin` | `string` | Mã ngân hàng |
| `bankNumber` | `string` | Số tài khoản |

### `AdditionalData` class

Thông tin bổ sung

| Name | Type | Description |
| --- | --- | --- |
| `billNumber` | `string` | Số hóa đơn |
| `mobileNumber` | `string` | Số điện thoại di động |
| `store` | `string` | Tên cửa hàng |
| `loyaltyNumber` | `string` | Mã khách hàng thân thiết |
| `reference` | `string` | Mã Tham chiếu |
| `customerLabel` | `string` | Mã khách hàng |
| `terminal` | `string` | Tên điểm bản |
| `purpose` | `string` | Nội dung giao dịch |

###  `build()` method

Trả về nội dung mã QR mới

```javascript
import { QRPay } from 'vietnam-qr-pay';


const qrContent = '00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA5303704540410005802VN62150811Chuyen tien6304BBB8'
const qrPay = new QRPay(qrContent);

// qrPay.amount === "10000"
// qrPay.additionalData.purpose === "Chuyen tien"

qrPay.amount = '999999';
qrPay.additionalData.purpose = 'Cam on nhe';

const newQRContent = qrPay.build();
/* 
00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA530370454069999995802VN62140810Cam on nhe6304E786
*/

```
