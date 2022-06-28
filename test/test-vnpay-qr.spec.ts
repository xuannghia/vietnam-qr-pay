import { QRPay } from '../src/qr-pay'

test('VNPayQR', () => {
  const qrPay = new QRPay('00020101021126280010A000000775011001087990425204597753037045802VN5909MYPHAMHER6005HANOI62260311MY PHAM HER0707MPHER0163041C50')
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.crc).toBe('1C50')
})

test('Personal VNPayQR', () => {
  const qrPay = new QRPay('00020101021002020103069084010411VNPayWallet071003933571580809Lê Anh Tú09051000010037041107content63042678')
  expect(qrPay.provider).toBeDefined()
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
})

test('Invalid CRC VNPayQR', () => {
  const qrPay = new QRPay('00020101021126280010A000000775011001087990425204597753037045802VN5909MYPHAMHER6005HANOI62260311MY PHAM HER0707MPHER0163041C55')
  expect(qrPay.isValid).toBe(false)
})
