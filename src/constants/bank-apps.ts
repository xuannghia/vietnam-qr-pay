import { BankKey } from './bank-key'

export interface BankApp {
  bank: BankKey
  scheme?: string
  packageId?: string
  appStoreId?: string
  supportVietQR?: boolean
  supportNapas?: boolean
}

export const BankApps: BankApp[] = [
  {
    bank: BankKey.ABBANK,
    scheme: 'abbankmobile',
    packageId: 'com.vnpay.abbank',
    appStoreId: 'id1137160023',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.ACB,
    scheme: 'acbapp',
    packageId: 'mobile.acb.com.vn',
    appStoreId: 'id950141024',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.AGRIBANK,
    scheme: 'agribankmobile',
    packageId: 'com.vnpay.Agribank3g',
    appStoreId: 'id935944952',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.BAC_A_BANK,
    packageId: 'com.bab.retailUAT',
    appStoreId: 'id1441408786',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.BAOVIET_BANK,
    scheme: 'baovietmobile',
    packageId: 'com.vnpay.bvbank',
    appStoreId: 'id1504422967',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.BIDC,
    scheme: 'bidcvnmobile',
    packageId: 'com.vnpay.bidc',
    appStoreId: 'id1043501726',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.BIDV,
    scheme: 'bidvsmartbanking',
    packageId: 'com.vnpay.bidv',
    appStoreId: 'id1061867449',
    supportVietQR: true,
    supportNapas: true
  },

  {
    bank: BankKey.CAKE,
    scheme: 'cake.vn',
    packageId: 'xyz.be.cake',
    appStoreId: 'id1551907051',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.CBBANK,
    scheme: 'cbbankmobile',
    packageId: 'com.vnpay.cbbank',
    appStoreId: 'id1137160023'
  },
  {
    bank: BankKey.CIMB,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.COOP_BANK,
    scheme: 'coopbankmobile',
    packageId: 'com.vnpay.coopbank',
    appStoreId: 'id1578445811',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.DBS_BANK,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.DONG_A_BANK,
    packageId: 'com.dongabank.mobilenternet',
    appStoreId: 'id993124125',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.EXIMBANK,
    scheme: 'eximbankmobile',
    packageId: 'com.vnpay.eximbank',
    appStoreId: 'id1242260338',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.GPBANK,
    supportVietQR: false,
    supportNapas: false
  },
  {
    bank: BankKey.HDBANK,
    scheme: 'hdbankmobile',
    packageId: 'com.vnpay.hdbank',
    appStoreId: 'id1461658565',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.HONGLEONG_BANK,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.HSBC,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.IBK_HCM,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.INDOVINA_BANK,
    scheme: 'ivbmobilebanking',
    packageId: 'com.vnpay.ivb',
    appStoreId: 'id1096963960',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.KASIKORN_BANK,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.KIENLONG_BANK,
    scheme: 'kienlongbankmobilebanking',
    packageId: 'com.sunshine.ksbank',
    appStoreId: 'id1562823941',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.KOOKMIN_BANK_HCM,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.LIENVIETPOST_BANK,
    scheme: 'lv24h',
    packageId: 'vn.com.lpb.lienviet24h',
    appStoreId: 'id1488794748',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.MBBANK,
    scheme: 'mbmobile',
    packageId: 'com.mbmobile',
    appStoreId: 'id1205807363',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.MSB,
    scheme: 'msbmobile',
    packageId: 'vn.com.msb.smartBanking',
    appStoreId: 'id436134873',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.NAM_A_BANK,
    scheme: 'namabankmobile',
    packageId: 'com.vnpay.namabank',
    appStoreId: 'id1227187853',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.NCB,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.NONGHYUP_BANK_HN,
    supportVietQR: false, // temp
    supportNapas: false
  },
  {
    bank: BankKey.OCB,
    scheme: 'omniapp',
    packageId: 'com.ocb.omniextra',
    appStoreId: 'id1358682577',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.OCEANBANK,
    scheme: 'oceanbankmobilebanking',
    packageId: 'com.vnpay.ocean',
    appStoreId: 'id1469028843',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.PGBANK,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.PUBLIC_BANK,
    scheme: 'publicbankmobile',
    packageId: 'com.vnpay.publicbank',
    appStoreId: 'id1573736472',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.PVCOM_BANK,
    scheme: 'pvcombankapp',
    packageId: 'com.vsii.pvcombank',
    appStoreId: 'id957284067',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.SACOMBANK,
    scheme: 'sacombankmobile',
    packageId: 'src.com.sacombank',
    appStoreId: 'id885814869',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.SAIGONBANK,
    scheme: 'Sgbmobile',
    packageId: 'com.vnpay.sgbank',
    appStoreId: 'id1481832587',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.SCB,
    scheme: 'scbmobilebanking',
    packageId: 'com.vnpay.SCB',
    appStoreId: 'id954973621',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.SEA_BANK,
    scheme: 'seabankmobile',
    packageId: 'vn.com.seabank.mb1',
    appStoreId: 'id846407152',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.SHB,
    scheme: 'shbmobile',
    packageId: 'vn.shb.mbanking',
    appStoreId: 'id538278798',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.SHINHAN_BANK,
    scheme: 'shinhanglbvnbank',
    packageId: 'com.shinhan.global.vn.bank',
    appStoreId: 'id1071033810',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.STANDARD_CHARTERED_BANK,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.TECHCOMBANK,
    scheme: 'tcb',
    packageId: 'vn.com.techcombank.bb.app',
    appStoreId: 'id1548623362',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.TPBANK,
    scheme: 'tpbankmobile',
    packageId: 'com.tpbankquickpay',
    appStoreId: 'id1292194225',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.UBANK,
    packageId: 'vn.vpbank.ubank',
    appStoreId: 'id1529056628',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.UNITED_OVERSEAS_BANK,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.VIB,
    scheme: 'vibmobile',
    packageId: 'com.vn.vib.mobileapp',
    appStoreId: 'id949371011',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.VIET_A_BANK,
    scheme: 'vabmobilebanking',
    packageId: 'phn.com.vn.mb',
    appStoreId: 'id910897337',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.VIET_BANK,
    scheme: 'vietbankmobilebanking',
    packageId: 'com.vnpay.vietbank',
    appStoreId: 'id1461658565',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.VIETCAPITAL_BANK,
    packageId: 'vn.banvietbank.mobilebanking',
    appStoreId: 'id1526444697',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.VIETCOMBANK,
    scheme: 'vietcombankmobile',
    packageId: 'com.VCB',
    appStoreId: 'id561433133',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.VIETINBANK,
    scheme: 'vietinbankmobile',
    packageId: 'com.vietinbank.ipay',
    appStoreId: 'id689963454',
    supportVietQR: true,
    supportNapas: true
  },
  {
    bank: BankKey.VPBANK,
    packageId: 'com.vnpay.vpbankonline',
    appStoreId: 'id1209349510',
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.VRB,
    supportVietQR: true,
    supportNapas: false
  },
  {
    bank: BankKey.WOORI_BANK,
    scheme: 'wvbs',
    packageId: 'vn.com.woori.smart',
    appStoreId: 'id1501785125',
    supportVietQR: true,
    supportNapas: true
  }
]
