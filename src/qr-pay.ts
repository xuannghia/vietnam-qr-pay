import { FieldID, QRProvider, VietQRConsumerFieldID, Consumer, AdditionalDataID, Prodiver, AdditionalData, QRProviderGUID } from './constants'
import { crc16ccitt } from './crc16'
export class QRPay {
  private content = ''
  isValid = true
  version: string
  initMethod: string
  provider: Prodiver // Provider/Merchant info
  consumer: Consumer
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
  additionalData: AdditionalData
  crc?: string

  constructor (content?: string) {
    this.provider = new Prodiver()
    this.consumer = new Consumer()
    this.additionalData = new AdditionalData()
    this.parse(content ?? '')
  }

  getContent (): string {
    return this.content
  }

  public parse (content: string): void {
    if (content.length < 4) return this.invalid()
    this.content = content
    // verify CRC
    const crcValid = QRPay.verifyCRC(content)
    if (!crcValid) return this.invalid()
    // parse content
    this.parseRootContent(content)
  }

  private parseRootContent (content: string): void {
    const { id, length, value, nextValue } = QRPay.sliceContent(content)
    if (value.length !== length) return this.invalid()
    switch (id) {
      case FieldID.VERSION:
        this.version = value
        break
      case FieldID.INIT_METHOD:
        this.initMethod = value
        break
      case FieldID.VIETQR:
      case FieldID.PROVIDER_INFO:
        this.parseProviderInfo(value)
        break
      case FieldID.CURRENCY:
        this.currency = value
        break
      case FieldID.AMOUNT:
        this.amount = value
        break
      case FieldID.TIP_AND_FEE_TYPE:
        this.tipAndFeeType = value
        break
      case FieldID.TIP_AND_FEE_AMOUNT:
        this.tipAndFeeAmount = value
        break
      case FieldID.TIP_AND_FEE_PERCENT:
        this.tipAndFeePercent = value
        break
      case FieldID.NATION:
        this.nation = value
        break
      case FieldID.ACQUIER:
        this.acquier = value
        break
      case FieldID.CITY:
        this.city = value
        break
      case FieldID.ZIP_CODE:
        this.zipCode = value
        break
      case FieldID.ADDITIONAL_DATA:
        this.parseAdditionalData(value)
        break
      case FieldID.CRC:
        this.crc = value
        break
      default:
        break
    }
    if (nextValue.length > 4) this.parseRootContent(nextValue)
  }

  private parseProviderInfo (content: string): void {
    const { id, value, nextValue } = QRPay.sliceContent(content)
    switch (id) {
      case '00':
        this.provider.guid = value
        break
      case '01':
        if (this.provider.guid === QRProviderGUID.VNPAY) {
          this.provider.name = QRProvider.VNPAY
        } else if (this.provider.guid === QRProviderGUID.VIETQR) {
          this.provider.name = QRProvider.VIETQR
          this.parseVietQRConsumer(value)
        }
        break
      case '03':
        this.provider.service = value
        break
      default:
        break
    }
    if (nextValue.length > 4) this.parseProviderInfo(nextValue)
  }

  private parseVietQRConsumer (content: string): void {
    const { id, value, nextValue } = QRPay.sliceContent(content)
    switch (id) {
      case VietQRConsumerFieldID.BANK_BIN:
        this.consumer.bankBin = value
        break
      case VietQRConsumerFieldID.BANK_NUMBER:
        this.consumer.bankNumber = value
        break
      default:
        break
    }
    if (nextValue.length > 4) this.parseVietQRConsumer(nextValue)
  }

  private parseAdditionalData (content: string): void {
    const { id, value, nextValue } = QRPay.sliceContent(content)
    switch (id) {
      case AdditionalDataID.PURPOSE_OF_TRANSACTION:
        this.additionalData.purpose = value
        break
      case AdditionalDataID.BILL_NUMBER:
        this.additionalData.billNumber = value
        break
      case AdditionalDataID.MOBILE_NUMBER:
        this.additionalData.mobileNumber = value
        break
      case AdditionalDataID.REFERENCE_LABEL:
        this.additionalData.reference = value
        break
      case AdditionalDataID.STORE_LABEL:
        this.additionalData.store = value
        break
      case AdditionalDataID.TERMINAL_LABEL:
        this.additionalData.terminal = value
        break
      default:
        break
    }
    if (nextValue.length > 4) this.parseAdditionalData(nextValue)
  }

  private static verifyCRC (content: string): boolean {
    const checkContent = content.slice(0, -4)
    const crcCode = content.slice(-4)

    const genCrcCode = QRPay.genCRCCode(checkContent)
    return crcCode === genCrcCode
  }

  public static genCRCCode (content: string): string {
    const crcCode: string = crc16ccitt(content).toString(16).toUpperCase()
    return `0000${crcCode}`.slice(-4)
  }

  private static sliceContent (content: string): { id: string, length: number, value: string, nextValue: string } {
    const id = content.slice(0, 2)
    const length = Number(content.slice(2, 4))
    const value = content.slice(4, 4 + length)
    const nextValue = content.slice(4 + length)
    return { id, length, value, nextValue }
  }

  private invalid (): void {
    this.isValid = false
  }
}
