import { QRPay } from '../src/qr-pay'

test('VNPayQR', () => {
  const qrPay = new QRPay('00020101021126280010A000000775011001087990425204597753037045802VN5909MYPHAMHER6005HANOI62260311MY PHAM HER0707MPHER0163041C50')
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.additionalData?.store).toBe('MY PHAM HER')
  expect(qrPay.additionalData?.terminal).toBe('MPHER01')
  expect(qrPay.crc).toBe('1C50')
})

test('VNPayQR 2', () => {
  const qrPay = new QRPay('000201010212262200069084050108VNPAY0015204123453037045405500005802VN5904VBAN6005HANOI62820314Adidas Vietnam051901220630112516879110716Vincom Dong Khoi0817Thanh toan Qrcode63048247')
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.additionalData?.store).toBe('Adidas Vietnam')
  expect(qrPay.additionalData?.terminal).toBe('Vincom Dong Khoi')
  expect(qrPay.crc).toBe('8247')
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
