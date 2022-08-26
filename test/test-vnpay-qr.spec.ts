import { QRProvider, QRProviderGUID } from '../src/constants'
import { QRPay } from '../src/qr-pay'

test('VNPayQR', () => {
  const qrContent = '00020101021126280010A000000775011001087990425204597753037045802VN5909MYPHAMHER6005HANOI62260311MY PHAM HER0707MPHER0163041C50'
  const qrPay = new QRPay(qrContent)
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.provider.name).toBe(QRProvider.VNPAY)
  expect(qrPay.provider.guid).toBe(QRProviderGUID.VNPAY)
  expect(qrPay.additionalData?.store).toBe('MY PHAM HER')
  expect(qrPay.additionalData?.terminal).toBe('MPHER01')
  expect(qrPay.crc).toBe('1C50')
  expect(qrPay.build()).toBe(qrContent)
})

test('VNPayQR 2', () => {
  const qrContent = '00020101021126280010A000000775011001A80187905204549953037045802VN5907SUNFLY16005HaNoi62290313SUNFLY ONLINE0708SUNFLY016304AE6F'
  const qrPay = new QRPay(qrContent)
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.provider.name).toBe(QRProvider.VNPAY)
  expect(qrPay.provider.guid).toBe(QRProviderGUID.VNPAY)
  expect(qrPay.additionalData?.store).toBe('SUNFLY ONLINE')
  expect(qrPay.additionalData?.terminal).toBe('SUNFLY01')
  expect(qrPay.crc).toBe('AE6F')
  expect(qrPay.build()).toBe(qrContent)
})

test('Personal VNPayQR', () => {
  const qrPay = new QRPay('00020101021002020103069084010411VNPayWallet071003933571580809Lê Anh Tú09051000010037041107content63042678')
  expect(qrPay.provider).toBeDefined()
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.provider.name).toBeUndefined()
  expect(qrPay.provider.guid).toBeUndefined()
})

test('Invalid CRC VNPayQR', () => {
  const qrPay = new QRPay('00020101021126280010A000000775011001087990425204597753037045802VN5909MYPHAMHER6005HANOI62260311MY PHAM HER0707MPHER0163041C55')
  expect(qrPay.isValid).toBe(false)
})
