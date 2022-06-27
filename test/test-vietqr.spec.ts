import { QRPay } from '../src/qr-pay'

test('VietQR 1', () => {
  const qrPay = new QRPay('00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA5303704540410005802VN62150811Chuyen tien6304BBB8')
  expect(qrPay.version).toBe('01')
  expect(qrPay.consumer.bankBin).toBe('970416')
  expect(qrPay.consumer.bankNumber).toBe('257678859')
  expect(qrPay.amount).toBe('1000')
})
