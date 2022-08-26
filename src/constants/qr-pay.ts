export enum QRProvider {
  VIETQR = 'VIETQR',
  VNPAY = 'VNPAY',
}

export enum QRProviderGUID {
  VNPAY = 'A000000775',
  VIETQR = 'A000000727'
}

export enum FieldID {
  VERSION = '00',
  INIT_METHOD = '01',
  VNPAYQR = '26',
  VIETQR = '38',
  CATEGORY = '52',
  CURRENCY = '53',
  AMOUNT = '54',
  TIP_AND_FEE_TYPE = '55',
  TIP_AND_FEE_AMOUNT = '56',
  TIP_AND_FEE_PERCENT = '57',
  NATION = '58',
  ACQUIER = '59',
  CITY = '60',
  ZIP_CODE = '61',
  ADDITIONAL_DATA = '62',
  CRC = '63'
}

export enum ProviderFieldID {
  GUID = '00',
  DATA = '01',
  SERVICE = '02'
}

export enum VietQRSevice {
  BY_ACCOUNT_NUMBER = 'QRIBFTTA', // Dịch vụ chuyển nhanh đến Tài khoản
  BY_CARD_NUMBER = 'QRIBFTTC' // Dịch vụ chuyển nhanh đến Thẻ
}

export enum VietQRConsumerFieldID {
  BANK_BIN = '00',
  BANK_NUMBER = '01'
}

export enum AdditionalDataID {
  BILL_NUMBER = '01', // Số hóa đơn
  MOBILE_NUMBER = '02', // Số ĐT
  STORE_LABEL = '03', // Mã cửa hàng
  LOYALTY_NUMBER = '04', // Mã khách hàng thân thiết
  REFERENCE_LABEL = '05', // Mã tham chiếu
  CUSTOMER_LABEL = '06', // Mã khách hàng
  TERMINAL_LABEL = '07', // Mã số điểm bán
  PURPOSE_OF_TRANSACTION = '08', // Mục đích giao dịch
  ADDITIONAL_CONSUMER_DATA_REQUEST = '09' // Yêu cầu dữ liệu KH bổ sung
}

export class Prodiver {
  fieldId?: string
  name?: QRProvider
  guid?: string
  service?: string
}

export class AdditionalData {
  billNumber?: string
  mobileNumber?: string
  store?: string
  loyaltyNumber?: string
  reference?: string
  customerLabel?: string
  terminal?: string
  purpose?: string
  dataRequest?: string
}

export class Consumer {
  bankBin?: string
  bankNumber?: string
}

export class Merchant {
  merchantId?: string
}
