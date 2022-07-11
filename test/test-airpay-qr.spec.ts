
import { QRPay } from '../src/qr-pay'

test('AirPay', () => {
  const qrPay = new QRPay('00020101021126610013vn.airpay.www014000000201010100064185noC4efDjGKq0or5GbeBz5204581253037045910RESTAURANT6009HOCHIMINH5802VN6304DA5C')
  expect(qrPay.isValid).toBe(true)
  expect(qrPay.version).toBe('01')
  expect(qrPay.provider.name).toBeUndefined()
  expect(qrPay.provider.guid).toBe('vn.airpay.www')
})
