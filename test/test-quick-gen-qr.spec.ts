import { BanksObject } from '../src/constants'
import { QRPay } from '../src/qr-pay'

test('VietQR Static', () => {
  const qrPay = QRPay.initVietQR({
    bankBin: BanksObject.acb.bin,
    bankNumber: '257678859',
  })
  const content = qrPay.build()

  expect(qrPay.initMethod).toBe('11')
  expect(content).toBe('00020101021138530010A0000007270123000697041601092576788590208QRIBFTTA53037045802VN6304AE9F')
})

test('VietQR Dynamic', () => {
  const qrPay = QRPay.initVietQR({
    bankBin: BanksObject.acb.bin,
    bankNumber: '257678859',
    amount: '10000',
    purpose: 'Chuyen tien',
  })
  const content = qrPay.build()

  expect(qrPay.initMethod).toBe('12')
  expect(content).toBe('00020101021238530010A0000007270123000697041601092576788590208QRIBFTTA53037045405100005802VN62150811Chuyen tien630453E6')
})

test('VNPayQR', () => {
  const qrPay = QRPay.initVNPayQR({
    merchantId: '0102154778',
    merchantName: 'TUGIACOMPANY',
    store: 'TU GIA COMPUTER',
    terminal: 'TUGIACO1',
  })
  const content = qrPay.build()
  expect(content).toBe('00020101021126280010A0000007750110010215477853037045802VN5912TUGIACOMPANY62310315TU GIA COMPUTER0708TUGIACO16304DF44')
})