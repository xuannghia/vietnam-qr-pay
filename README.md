# Vietnam QR Pay

Thư viện hỗ trợ encode/decode mã QR của VietQR (QR Ngân hàng, QR Đa năng Momo/ZaloPay) & VNPayQR

[![npm](https://img.shields.io/npm/v/vietnam-qr-pay.svg)](https://www.npmjs.com/package/vietnam-qr-pay)
[![download](https://img.shields.io/npm/dt/vietnam-qr-pay.svg)](https://www.npmjs.com/package/vietnam-qr-pay)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/vietnam-qr-pay.svg)](https://bundlephobia.com/package/vietnam-qr-pay)

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

### QR Đa năng của MoMo và ZaloPay

Hiện tại, QR Đa năng của MoMo và ZaloPay đang thông qua Ngân hàng Bản Việt (BVBank) để nhận tiền.

Mỗi tài khoản MoMo/ZaloPay sẽ được gán một STK tương ứng tại BVBank. Tiền chuyển đến STK này sẽ được chuyển tiếp đến ví MoMo/ZaloPay.

Bạn có thể lấy STK này tại trang chi tiết của QR Nhận tiền trong ứng dụng MoMo/ZaloPay.

#### MoMo

##### 1. Dành cho các tài khoản MỚI (Số tài khoản bắt đầu bằng `PSP`)

> [!NOTE] Lưu ý
> Với các tài khoản mới, MoMo đã thay đổi cấu trúc mã tham chiếu. Bạn có thể lấy mã này như sau:
> 1. Vào app MoMo tạo/lưu mã QR Nhận Tiền của bạn (Số tài khoản: Tài khoản nhận tiền mặc định).
> 2. Upload mã QR này lên công cụ debug (https://xuannghia.dev/tools/qr-pay) hoặc quét bằng camera mặc định của máy.
> 3. Mã tham chiếu sẽ có dạng MOMOW2W[dãy số] (ví dụ: ...MOMOW2W123456786304...). 
> Nếu quét bằng camera, hãy sao chép phần kí tự từ "MOMOW2W" cho đến khi gặp cụm "6304" hoặc "80" (thường bao gồm 8 chữ số).

```javascript
import { QRPay, BanksObject } from 'vietnam-qr-pay';

// Số tài khoản trong ví MoMo
const accountNumber = 'PSP123456789000000'
const referenceId = 'MOMOW2W12345678' 

const momoQR = QRPay.initVietQR({
  bankBin: BanksObject.momo.bin,
  bankNumber: accountNumber,
  // amount: '10000', // Số tiền (không bắt buộc)
  // purpose: 'Chuyen tien', // Nội dung (không bắt buộc)
  // initMethod: '12', // Tự động: Có amount thì '12' (Động), không có thì '11' (Tĩnh). Có thể truyền thêm để ghi đè hành vi mặc định.
})

// Gán mã đối chiếu bí mật cho tài khoản MoMo
momoQR.additionalData.reference = referenceId

const content = momoQR.build()

// 00020101021138620010A000000727013200069710250118PSP1234567890000000208QRIBFTTA53037045802VN62190515MOMOW2W123456786304821F
```

##### 2. Dành cho các tài khoản CŨ (Không bắt đầu bằng `PSP` - có thể đã lỗi thời)

```javascript
import { QRPay, BanksObject } from 'vietnam-qr-pay';

// Số tài khoản trong ví MoMo
const accountNumber = '99MM24011M34875080'

const momoQR = QRPay.initVietQR({
  bankBin: BanksObject.banviet.bin,
  bankNumber: accountNumber,
  // amount: '10000', // Số tiền (không bắt buộc)
  // purpose: 'Chuyen tien', // Nội dung (không bắt buộc)
})

// Trong mã QR của MoMo có chứa thêm 1 mã tham chiếu tương ứng với STK
momoQR.additionalData.reference = 'MOMOW2W' + accountNumber.slice(10)

// Mã QR của MoMo có thêm 1 trường ID 80 với giá trị là 3 số cuối của SỐ ĐIỆN THOẠI của tài khoản nhận tiền
momoQR.setUnreservedField('80', '046')

const content = momoQR.build()

// 00020101021138620010A00000072701320006970454011899MM24011M348750800208QRIBFTTA53037045802VN62190515MOMOW2W3487508080030466304EBC8

```

<img src="test/momo.svg" width="160">

#### ZaloPay

> Trong mã QR của ZaloPay có chứa một số thông tin bổ sung ở trường ID 26. Tuy nhiên chưa rõ chức năng của các thông tin này (có thể là dùng để định danh từng mã QR đc tạo trên hệ thống của ZaloPay). Trong ví dụ dưới sẽ bỏ qua các thông tin này.

```javascript
import { QRPay, BanksObject } from 'vietnam-qr-pay';

// Số tài khoản trong ví ZaloPay
const accountNumber = '99ZP24009M07248267'
  
const zaloPayQR = QRPay.initVietQR({
  bankBin: BanksObject.banviet.bin,
  bankNumber: accountNumber,
  // amount: '10000', // Số tiền (không bắt buộc)
  // purpose: 'Chuyen tien', // Nội dung (không bắt buộc)
})

const content = zaloPayQR.build()
// 00020101021138620010A00000072701320006970454011899ZP24009M072482670208QRIBFTTA53037045802VN6304073C
```

<img src="test/zalopay.svg" width="160">


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
