export enum QRProvider {
  VIETQR = 'VIETQR',
  VNPAY = 'VNPAY'
}

export const FIELD_ID = {
  VERSION: '00',
  INIT_METHOD: '01',
  VNPAY: '26',
  VIETQR: '38',
  CURRENCY: '53',
  AMOUNT: '54',
  TIP_AND_FEE_TYPE: '55',
  TIP_AND_FEE_AMOUNT: '56',
  TIP_AND_FEE_PERCENT: '57',
  NATION: '58',
  ACQUIER: '59',
  CITY: '60',
  ZIP_CODE: '61',
  ADDITION_INFO: '62',
  CRC: '63'
}

export const VIETQR_FIELD_ID = {
  ACQUIER: '00',
  CONSUMER: '01',
  SERVICE: '02'
}

export const VIETQR_SERVICE = {
  BY_ACCOOUNT_NUMBER: 'QRIBFTTA', // Dịch vụ chuyển nhanh đến Tài khoản
  BY_CARD_NUMBER: 'QRIBFTTC' // Dịch vụ chuyển nhanh đến Thẻ
}

export const VIETQR_CONSUMER_FIELD_ID = {
  BANK_BIN: '00',
  BANK_NUMBER: '01'
}

export const ADDITION_INFO_ID = {
  BILL_NUMBER: '01', // Số hóa đơn
  MOBILE_NUMBER: '02', // Số ĐT
  STORE_LABEL: '03', // Mã cửa hàng
  LOYALTY_NUMBER: '04', // Mã khách hàng thân thiết
  REFERENCE_LABEL: '05', // Mã tham chiếu
  CUSTOMER_LABEL: '06', // Mã khách hàng
  TERMINAL_LABEL: '07', // Mã số điểm bán
  PURPOSE_OF_TRANSACTION: '08', // Mục đích giao dịch
  ADDITIONAL_CONSUMER_DATA_REQUEST: '09' // Yêu cầu dữ liệu KH bổ sung
}

export class Prodiver {
  name: QRProvider
  guid?: string
  service?: string
  acquier?: string
}

export class AdditionInfo {
  billNumber?: string
  purpose?: string
  mobileNumber?: string
  reference?: string
  store?: string
  terminal?: string
}

export class Consumer {
  bankBin?: string
  bankNumber?: string
}
