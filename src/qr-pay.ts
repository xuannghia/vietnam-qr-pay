import crc16ccitt from 'crc/crc16ccitt'
import { FIELD_ID, VIETQR_FIELD_ID, QRProvider, AdditionInfo, VIETQR_CONSUMER_FIELD_ID, Consumer, ADDITION_INFO_ID, Prodiver } from './constants'

export class QRPay {
  private content = ''
  isValid = false
  version: string
  initMethod: string
  provider: Prodiver
  providerGuid?: string
  currency?: string
  amount?: string
  tipAndFeeType?: string
  tipAndFeeAmount?: string
  tipAndFeePercent?: string
  nation?: string
  acquier?: string
  city?: string
  zipCode?: string
  additionInfo?: AdditionInfo
  consumer: Consumer
  crc?: string

  constructor (content?: string) {
    this.parse(content ?? '')
  }

  getContent (): string {
    return this.content
  }

  public parse (content: string): void {
    if (content.length < 4) return
    this.content = content
    // verify CRC
    this.isValid = QRPay.verifyCRC(content)
    if (!this.isValid) return
    // parse content
    this.parseRootContent(content)
  }

  private parseRootContent (content: string): void {
    const { id, length, value, nextValue } = QRPay.sliceContent(content)
    if (value.length !== length) {
      this.isValid = false
    }
    switch (id) {
      case FIELD_ID.VERSION:
        this.version = value
        break
      case FIELD_ID.INIT_METHOD:
        this.initMethod = value
        break
      case FIELD_ID.VIETQR:
        this.provider = new Prodiver()
        this.provider.name = QRProvider.VIETQR
        this.provider.guid = value.slice(4, 14)
        this.parseVietQRContent(value.slice(14))
        break
      case FIELD_ID.VNPAY:
        this.provider = new Prodiver()
        this.provider.name = QRProvider.VNPAY
        break
      case FIELD_ID.CURRENCY:
        this.currency = value
        break
      case FIELD_ID.AMOUNT:
        this.amount = value
        break
      case FIELD_ID.TIP_AND_FEE_TYPE:
        this.tipAndFeeType = value
        break
      case FIELD_ID.TIP_AND_FEE_AMOUNT:
        this.tipAndFeeAmount = value
        break
      case FIELD_ID.TIP_AND_FEE_PERCENT:
        this.tipAndFeePercent = value
        break
      case FIELD_ID.NATION:
        this.nation = value
        break
      case FIELD_ID.ACQUIER:
        this.acquier = value
        break
      case FIELD_ID.CITY:
        this.city = value
        break
      case FIELD_ID.ZIP_CODE:
        this.zipCode = value
        break
      case FIELD_ID.ADDITION_INFO:
        this.parseAdditionInfo(value)
        break
      case FIELD_ID.CRC:
        this.crc = value
        break
      default:
        break
    }
    if (nextValue.length > 4) this.parseRootContent(nextValue)
  }

  private parseVietQRContent (content: string): void {
    const { id, value, nextValue } = QRPay.sliceContent(content)
    switch (id) {
      case VIETQR_FIELD_ID.ACQUIER:
        this.provider.acquier = value
        break
      case VIETQR_FIELD_ID.CONSUMER:
        this.consumer = new Consumer()
        this.parseVietQRConsumer(value)
        break
      case VIETQR_FIELD_ID.SERVICE:
        if (this.provider != null) this.provider.service = value
        break
      default:
        break
    }
    if (nextValue.length > 4) this.parseVietQRContent(nextValue)
  }

  private parseVietQRConsumer (content: string): void {
    const { id, value, nextValue } = QRPay.sliceContent(content)
    switch (id) {
      case VIETQR_CONSUMER_FIELD_ID.BANK_BIN:
        this.consumer.bankBin = value
        break
      case VIETQR_CONSUMER_FIELD_ID.BANK_NUMBER:
        this.consumer.bankNumber = value
        break
      default:
        break
    }
    if (nextValue.length > 4) this.parseVietQRConsumer(nextValue)
  }

  private parseAdditionInfo (content: string): void {
    const { id, value, nextValue } = QRPay.sliceContent(content)
    this.additionInfo = new AdditionInfo()
    switch (id) {
      case ADDITION_INFO_ID.PURPOSE_OF_TRANSACTION:
        this.additionInfo.purpose = value
        break
      case ADDITION_INFO_ID.BILL_NUMBER:
        this.additionInfo.billNumber = value
        break
      case ADDITION_INFO_ID.MOBILE_NUMBER:
        this.additionInfo.mobileNumber = value
        break
      case ADDITION_INFO_ID.REFERENCE_LABEL:
        this.additionInfo.reference = value
        break
      case ADDITION_INFO_ID.STORE_LABEL:
        this.additionInfo.store = value
        break
      case ADDITION_INFO_ID.TERMINAL_LABEL:
        this.additionInfo.terminal = value
        break
      default:
        break
    }
    if (nextValue.length > 4) this.parseAdditionInfo(nextValue)
  }

  private static verifyCRC (content: string): boolean {
    const checkContent = content.slice(0, -4)
    const crcCode = content.slice(-4)

    const genCrcCode = QRPay.genCRCCode(checkContent)
    return crcCode === genCrcCode
  }

  private static genCRCCode (content: string): string {
    const crcCode: string = crc16ccitt(content).toString(16).toUpperCase()
    return crcCode.length === 4 ? crcCode : `0${crcCode}`
  }

  private static sliceContent (content: string): { id: string, length: number, value: string, nextValue: string } {
    const id = content.slice(0, 2)
    const length = Number(content.slice(2, 4))
    const value = content.slice(4, 4 + length)
    const nextValue = content.slice(4 + length)
    return { id, length, value, nextValue }
  }
}
