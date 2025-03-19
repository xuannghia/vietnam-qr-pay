import { QRPay } from '../src/qr-pay'

test('Test EVN QR', () => {
  const qrContent = '000201010211262400020001140100101114-0195204490053037045802VN5931EVN CONG TY DIEN LUC THANH XUAN6006Ha Noi62450302000613PD000000000000702000812TT tien dien6304DC30'
  const qrPay = new QRPay(qrContent)
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.provider.fieldId).toBe('26')
  expect(qrPay.provider.guid).toBe('00')
  expect(qrPay.additionalData.customerLabel).toBe('PD00000000000')
  expect(qrPay.build()).toBe(qrContent)
})
