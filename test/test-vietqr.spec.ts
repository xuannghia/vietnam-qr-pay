import { QRProvider, QRProviderGUID } from '../src/constants'
import { QRPay } from '../src/qr-pay'

test('VietQR', () => {
  const qrPay = new QRPay('00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA5303704540410005802VN62150811Chuyen tien6304BBB8')
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.provider.name).toBe(QRProvider.VIETQR)
  expect(qrPay.provider.guid).toBe(QRProviderGUID.VIETQR)
  expect(qrPay.consumer.bankBin).toBe('970416')
  expect(qrPay.consumer.bankNumber).toBe('257678859')
  expect(qrPay.amount).toBe('1000')
})

test('Invalid CRC VietQR ', () => {
  const qrPay = new QRPay('00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA5303704540410005802VN62150811Chuyen tien6304BBB5')
  expect(qrPay.isValid).toBe(false)
})
