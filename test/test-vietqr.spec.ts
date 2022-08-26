import { QRProvider, QRProviderGUID } from '../src/constants'
import { QRPay } from '../src/qr-pay'

test('VietQR', () => {
  const qrContent = '00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA5303704540410005802VN62150811Chuyen tien6304BBB8'
  const qrPay = new QRPay(qrContent)
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.provider.name).toBe(QRProvider.VIETQR)
  expect(qrPay.provider.guid).toBe(QRProviderGUID.VIETQR)
  expect(qrPay.consumer.bankBin).toBe('970416')
  expect(qrPay.consumer.bankNumber).toBe('257678859')
  expect(qrPay.amount).toBe('1000')
  expect(qrPay.build()).toBe(qrContent)
})

test('CRC with three-byte', () => {
  const qrContent = '00020101021138580010A000000727012800069704070114190304136010180208QRIBFTTA53037045802VN63040283'
  const qrPay = new QRPay(qrContent)
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.provider.name).toBe(QRProvider.VIETQR)
  expect(qrPay.provider.guid).toBe(QRProviderGUID.VIETQR)
  expect(qrPay.consumer.bankBin).toBe('970407')
  expect(qrPay.consumer.bankNumber).toBe('19030413601018')
  expect(qrPay.build()).toBe(qrContent)
})

test('Invalid CRC VietQR ', () => {
  const qrPay = new QRPay('00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA5303704540410005802VN62150811Chuyen tien6304BBB5')
  expect(qrPay.isValid).toBe(false)
})
