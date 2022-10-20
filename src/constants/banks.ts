import { BankCode } from './bank-code'
import { BankKey } from './bank-key'

export interface Bank {
  key: BankKey
  code: BankCode
  name: string
  shortName: string
  bin: string
  vietQRStatus: number
  lookupSupported?: number
  swiftCode?: string | null
}

export enum VietQRStatus {
  NOT_SUPPORTED = -1,
  RECEIVE_ONLY = 0,
  TRANSFER_SUPPORTED = 1
}

export const Banks: Bank[] = [
  {
    key: BankKey.ABBANK,
    code: BankCode.ABBANK,
    name: 'Ngân hàng TMCP An Bình',
    bin: '970425',
    shortName: 'ABBANK',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'ABBKVNVX'
  },
  {
    key: BankKey.ACB,
    code: BankCode.ACB,
    name: 'Ngân hàng TMCP Á Châu',
    bin: '970416',
    shortName: 'ACB',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'ASCBVNVX'
  },
  {
    key: BankKey.AGRIBANK,
    code: BankCode.AGRIBANK,
    name: 'Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam',
    bin: '970405',
    shortName: 'Agribank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'VBAAVNVX'
  },
  {
    key: BankKey.BAC_A_BANK,
    code: BankCode.BAC_A_BANK,
    name: 'Ngân hàng TMCP Bắc Á',
    bin: '970409',
    shortName: 'BacABank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'NASCVNVX'
  },
  {
    key: BankKey.BAOVIET_BANK,
    code: BankCode.BAOVIET_BANK,
    name: 'Ngân hàng TMCP Bảo Việt',
    bin: '970438',
    shortName: 'BaoVietBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'BVBVVNVX'
  },
  {
    key: BankKey.BIDC,
    code: BankCode.BIDC,
    name: 'Ngân hàng TMCP Đầu tư và Phát triển Campuchia',
    bin: '',
    shortName: 'BIDC',
    vietQRStatus: VietQRStatus.NOT_SUPPORTED
  },
  {
    key: BankKey.BIDV,
    code: BankCode.BIDV,
    name: 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam',
    bin: '970418',
    shortName: 'BIDV',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'BIDVVNVX'
  },
  {
    key: BankKey.CAKE,
    code: BankCode.CAKE,
    name: 'Ngân hàng số CAKE by VPBank - Ngân hàng TMCP Việt Nam Thịnh Vượng',
    bin: '546034',
    shortName: 'CAKE',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: null
  },
  {
    key: BankKey.CBBANK,
    code: BankCode.CBBANK,
    name: 'Ngân hàng Thương mại TNHH MTV Xây dựng Việt Nam',
    bin: '970444',
    shortName: 'CBBank',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 0,
    swiftCode: 'GTBAVNVX'
  },
  {
    key: BankKey.CIMB,
    code: BankCode.CIMB,
    name: 'Ngân hàng TNHH MTV CIMB Việt Nam',
    bin: '422589',
    shortName: 'CIMB',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: 'CIBBVNVN'
  },
  {
    key: BankKey.COOP_BANK,
    code: BankCode.COOP_BANK,
    name: 'Ngân hàng Hợp tác xã Việt Nam',
    bin: '970446',
    shortName: 'COOPBANK',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: null
  },
  {
    key: BankKey.DBS_BANK,
    code: BankCode.DBS_BANK,
    name: 'DBS Bank Ltd - Chi nhánh Thành phố Hồ Chí Minh',
    bin: '796500',
    shortName: 'DBSBank',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 0,
    swiftCode: 'DBSSVNVX'
  },
  {
    key: BankKey.DONG_A_BANK,
    code: BankCode.DONG_A_BANK,
    name: 'Ngân hàng TMCP Đông Á',
    bin: '970406',
    shortName: 'DongABank',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: 'EACBVNVX'
  },
  {
    key: BankKey.EXIMBANK,
    code: BankCode.EXIMBANK,
    name: 'Ngân hàng TMCP Xuất Nhập khẩu Việt Nam',
    bin: '970431',
    shortName: 'Eximbank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'EBVIVNVX'
  },
  {
    key: BankKey.GPBANK,
    code: BankCode.GPBANK,
    name: 'Ngân hàng Thương mại TNHH MTV Dầu Khí Toàn Cầu',
    bin: '970408',
    shortName: 'GPBank',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: 'GBNKVNVX'
  },
  {
    key: BankKey.HDBANK,
    code: BankCode.HDBANK,
    name: 'Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh',
    bin: '970437',
    shortName: 'HDBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'HDBCVNVX'
  },
  {
    key: BankKey.HONGLEONG_BANK,
    code: BankCode.HONGLEONG_BANK,
    name: 'Ngân hàng TNHH MTV Hong Leong Việt Nam',
    bin: '970442',
    shortName: 'HongLeong',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 0,
    swiftCode: 'HLBBVNVX'
  },
  {
    key: BankKey.HSBC,
    code: BankCode.HSBC,
    name: 'Ngân hàng TNHH MTV HSBC (Việt Nam)',
    bin: '458761',
    shortName: 'HSBC',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: 'HSBCVNVX'
  },
  {
    key: BankKey.IBK_HCM,
    code: BankCode.IBK_HCM,
    name: 'Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh TP. Hồ Chí Minh',
    bin: '970456',
    shortName: 'IBK HCM',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 0,
    swiftCode: null
  },
  {
    key: BankKey.IBK_HN,
    code: BankCode.IBK_HN,
    name: 'Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội',
    bin: '970455',
    shortName: 'IBK HN',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 0,
    swiftCode: null
  },
  {
    key: BankKey.INDOVINA_BANK,
    code: BankCode.INDOVINA_BANK,
    name: 'Ngân hàng TNHH Indovina',
    bin: '970434',
    shortName: 'IndovinaBank',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: null
  },
  {
    key: BankKey.KASIKORN_BANK,
    code: BankCode.KASIKORN_BANK,
    name: 'Ngân hàng Đại chúng TNHH Kasikornbank',
    bin: '668888',
    shortName: 'KBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 0,
    swiftCode: 'KASIVNVX'
  },
  {
    key: BankKey.KIENLONG_BANK,
    code: BankCode.KIENLONG_BANK,
    name: 'Ngân hàng TMCP Kiên Long',
    bin: '970452',
    shortName: 'KienLongBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'KLBKVNVX'
  },
  {
    key: BankKey.KOOKMIN_BANK_HCM,
    code: BankCode.KOOKMIN_BANK_HCM,
    name: 'Ngân hàng Kookmin - Chi nhánh Thành phố Hồ Chí Minh',
    bin: '970463',
    shortName: 'KookminHCM',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 0,
    swiftCode: null
  },
  {
    key: BankKey.KOOKMIN_BANK_HN,
    code: BankCode.KOOKMIN_BANK_HN,
    name: 'Ngân hàng Kookmin - Chi nhánh Hà Nội',
    bin: '970462',
    shortName: 'KookminHN',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 0,
    swiftCode: null
  },
  {
    key: BankKey.LIENVIETPOST_BANK,
    code: BankCode.LIENVIETPOST_BANK,
    name: 'Ngân hàng TMCP Bưu Điện Liên Việt',
    bin: '970449',
    shortName: 'LienVietPostBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'LVBKVNVX'
  },
  {
    key: BankKey.MBBANK,
    code: BankCode.MBBANK,
    name: 'Ngân hàng TMCP Quân đội',
    bin: '970422',
    shortName: 'MBBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'MSCBVNVX'
  },
  {
    key: BankKey.MSB,
    code: BankCode.MSB,
    name: 'Ngân hàng TMCP Hàng Hải',
    bin: '970426',
    shortName: 'MSB',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'MCOBVNVX'
  },
  {
    key: BankKey.NAM_A_BANK,
    code: BankCode.NAM_A_BANK,
    name: 'Ngân hàng TMCP Nam Á',
    bin: '970428',
    shortName: 'NamABank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'NAMAVNVX'
  },
  {
    key: BankKey.NCB,
    code: BankCode.NCB,
    name: 'Ngân hàng TMCP Quốc Dân',
    bin: '970419',
    shortName: 'NCB',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'NVBAVNVX'
  },
  {
    key: BankKey.NONGHYUP_BANK_HN,
    code: BankCode.NONGHYUP_BANK_HN,
    name: 'Ngân hàng Nonghyup - Chi nhánh Hà Nội',
    bin: '801011',
    shortName: 'Nonghyup',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 0,
    swiftCode: null
  },
  {
    key: BankKey.OCB,
    code: BankCode.OCB,
    name: 'Ngân hàng TMCP Phương Đông',
    bin: '970448',
    shortName: 'OCB',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'ORCOVNVX'
  },
  {
    key: BankKey.OCEANBANK,
    code: BankCode.OCEANBANK,
    name: 'Ngân hàng Thương mại TNHH MTV Đại Dương',
    bin: '970414',
    shortName: 'Oceanbank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'OCBKUS3M'
  },
  {
    key: BankKey.PGBANK,
    code: BankCode.PGBANK,
    name: 'Ngân hàng TMCP Xăng dầu Petrolimex',
    bin: '970430',
    shortName: 'PGBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'PGBLVNVX'
  },
  {
    key: BankKey.PUBLIC_BANK,
    code: BankCode.PUBLIC_BANK,
    name: 'Ngân hàng TNHH MTV Public Việt Nam',
    bin: '970439',
    shortName: 'PublicBank',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: 'VIDPVNVX'
  },
  {
    key: BankKey.PVCOM_BANK,
    code: BankCode.PVCOM_BANK,
    name: 'Ngân hàng TMCP Đại Chúng Việt Nam',
    bin: '970412',
    shortName: 'PVcomBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'WBVNVNVX'
  },
  {
    key: BankKey.SACOMBANK,
    code: BankCode.SACOMBANK,
    name: 'Ngân hàng TMCP Sài Gòn Thương Tín',
    bin: '970403',
    shortName: 'Sacombank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'SGTTVNVX'
  },
  {
    key: BankKey.SAIGONBANK,
    code: BankCode.SAIGONBANK,
    name: 'Ngân hàng TMCP Sài Gòn Công Thương',
    bin: '970400',
    shortName: 'SaigonBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'SBITVNVX'
  },
  {
    key: BankKey.SCB,
    code: BankCode.SCB,
    name: 'Ngân hàng TMCP Sài Gòn',
    bin: '970429',
    shortName: 'SCB',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'SACLVNVX'
  },
  {
    key: BankKey.SEA_BANK,
    code: BankCode.SEA_BANK,
    name: 'Ngân hàng TMCP Đông Nam á',
    bin: '970440',
    shortName: 'SeABank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'SEAVVNVX'
  },
  {
    key: BankKey.SHB,
    code: BankCode.SHB,
    name: 'Ngân hàng TMCP Sài Gòn - Hà Nội',
    bin: '970443',
    shortName: 'SHB',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'SHBAVNVX'
  },
  {
    key: BankKey.SHINHAN_BANK,
    code: BankCode.SHINHAN_BANK,
    name: 'Ngân hàng TNHH MTV Shinhan Việt Nam',
    bin: '970424',
    shortName: 'ShinhanBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'SHBKVNVX'
  },
  {
    key: BankKey.STANDARD_CHARTERED_BANK,
    code: BankCode.STANDARD_CHARTERED_BANK,
    name: 'Ngân hàng TNHH MTV Standard Chartered Bank Việt Nam',
    bin: '970410',
    shortName: 'StandardChartered',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: 'SCBLVNVX'
  },
  {
    key: BankKey.TECHCOMBANK,
    code: BankCode.TECHCOMBANK,
    name: 'Ngân hàng TMCP Kỹ thương Việt Nam',
    bin: '970407',
    shortName: 'Techcombank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'VTCBVNVX'
  },
  {
    key: BankKey.TPBANK,
    code: BankCode.TPBANK,
    name: 'Ngân hàng TMCP Tiên Phong',
    bin: '970423',
    shortName: 'TPBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'TPBVVNVX'
  },
  {
    key: BankKey.UBANK,
    code: BankCode.UBANK,
    name: 'Ngân hàng số Ubank by VPBank - Ngân hàng TMCP Việt Nam Thịnh Vượng',
    bin: '546035',
    shortName: 'Ubank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: null
  },
  {
    key: BankKey.UNITED_OVERSEAS_BANK,
    code: BankCode.UNITED_OVERSEAS_BANK,
    name: 'Ngân hàng United Overseas - Chi nhánh TP. Hồ Chí Minh',
    bin: '970458',
    shortName: 'UnitedOverseas',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: null
  },
  {
    key: BankKey.VIB,
    code: BankCode.VIB,
    name: 'Ngân hàng TMCP Quốc tế Việt Nam',
    bin: '970441',
    shortName: 'VIB',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'VNIBVNVX'
  },
  {
    key: BankKey.VIET_A_BANK,
    code: BankCode.VIET_A_BANK,
    name: 'Ngân hàng TMCP Việt Á',
    bin: '970427',
    shortName: 'VietABank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'VNACVNVX'
  },
  {
    key: BankKey.VIET_BANK,
    code: BankCode.VIET_BANK,
    name: 'Ngân hàng TMCP Việt Nam Thương Tín',
    bin: '970433',
    shortName: 'VietBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'VNTTVNVX'
  },
  {
    key: BankKey.VIETCAPITAL_BANK,
    code: BankCode.VIETCAPITAL_BANK,
    name: 'Ngân hàng TMCP Bản Việt',
    bin: '970454',
    shortName: 'VietCapitalBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'VCBCVNVX'
  },
  {
    key: BankKey.VIETCOMBANK,
    code: BankCode.VIETCOMBANK,
    name: 'Ngân hàng TMCP Ngoại Thương Việt Nam',
    bin: '970436',
    shortName: 'Vietcombank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'BFTVVNVX'
  },
  {
    key: BankKey.VIETINBANK,
    code: BankCode.VIETINBANK,
    name: 'Ngân hàng TMCP Công thương Việt Nam',
    bin: '970415',
    shortName: 'VietinBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'ICBVVNVX'
  },
  {
    key: BankKey.VPBANK,
    code: BankCode.VPBANK,
    name: 'Ngân hàng TMCP Việt Nam Thịnh Vượng',
    bin: '970432',
    shortName: 'VPBank',
    vietQRStatus: VietQRStatus.TRANSFER_SUPPORTED,
    lookupSupported: 1,
    swiftCode: 'VPBKVNVX'
  },
  {
    key: BankKey.VRB,
    code: BankCode.VRB,
    name: 'Ngân hàng Liên doanh Việt - Nga',
    bin: '970421',
    shortName: 'VRB',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: null
  },
  {
    key: BankKey.WOORI_BANK,
    code: BankCode.WOORI_BANK,
    name: 'Ngân hàng TNHH MTV Woori Việt Nam',
    bin: '970457',
    shortName: 'Woori',
    vietQRStatus: VietQRStatus.RECEIVE_ONLY,
    lookupSupported: 1,
    swiftCode: null
  }
]

export const BanksObject = Banks.reduce((acc, bank) => {
  acc[bank.key] = bank
  return acc
}, {})
