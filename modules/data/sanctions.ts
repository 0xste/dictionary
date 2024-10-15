export type Sanction = {
  origin: string;
  currency: string;
  sanction_id_uid: string;
  address: string;
  program_list: string[];
  sanction_name: string;
  sanction_uid: string;
};

export const sanctions: Sanction[] = [
  {
    origin: 'OFAC',
    currency: 'ARB',
    sanction_id_uid: '161088',
    address: '0x4f47bc496083c727c5fbe3ce9cdf2b0f6496270c',
    program_list: [
      'NPWMD'
    ],
    sanction_name: 'SIM',
    sanction_uid: '42498'
  },
  {
    origin: 'OFAC',
    currency: 'BCH',
    sanction_id_uid: '138238',
    address: '18M8bJWMzWHDBMxoLqjHHAffdRy4SrzkfB',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'BCH',
    sanction_id_uid: '139646',
    address: 'qpf2cphc5dkuclkqur7lhj2yuqq9pk3hmukle77vhq',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'BCH',
    sanction_id_uid: '144779',
    address: 'qzjv8hrdvz6edu4gkzpnd4w6jc7zf296g5e9kkq4lx',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'BCH',
    sanction_id_uid: '144780',
    address: 'qq3vlashthktqpeppuv7trmw070e3mydgq63zq348v',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'BCH',
    sanction_id_uid: '156436',
    address: 'qpusmp64rajses77x95g9ah825mtyyv74smwwkxhx3',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'BCH',
    sanction_id_uid: '156552',
    address: 'qqyuc9s700plhzr6awzru7g5z2d2p906uyrm6ht0r0',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'BCH',
    sanction_id_uid: '156553',
    address: 'qz9f2vz3033sg5vc5mf7m7xshmj0jugy4ummf05jk8',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'BSC',
    sanction_id_uid: '161089',
    address: '0x4f47bc496083c727c5fbe3ce9cdf2b0f6496270c',
    program_list: [
      'NPWMD'
    ],
    sanction_name: 'SIM',
    sanction_uid: '42498'
  },
  {
    origin: 'OFAC',
    currency: 'BSV',
    sanction_id_uid: '136690',
    address: '12sjrrhoFEsedNRhtgwvvRqjFTh8fZTDX9',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'BTG',
    sanction_id_uid: '136475',
    address: 'GPwg61XoHqQPNmAucFACuQ5H9sGCDv9TpS',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KARASAVIDI',
    sanction_uid: '29585'
  },
  {
    origin: 'OFAC',
    currency: 'DASH',
    sanction_id_uid: '136474',
    address: 'XnPFsRWTaSgiVauosEwQ6dEitGYXgwznz2',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KARASAVIDI',
    sanction_uid: '29585'
  },
  {
    origin: 'OFAC',
    currency: 'DASH',
    sanction_id_uid: '136620',
    address: 'Xs3vzQmNvAxRa3Xo8XzQqUb3BMgb9EogF4',
    program_list: [
      'ELECTION-EO13848',
      'CYBER2'
    ],
    sanction_name: 'LIFSHITS',
    sanction_uid: '29702'
  },
  {
    origin: 'OFAC',
    currency: 'DASH',
    sanction_id_uid: '139589',
    address: 'XyARKoupuArYtToA2S6yMdnoquDCDaBsaT',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'UKRAINE-EO13661'
    ],
    sanction_name: 'ASSOCIATION FOR FREE RESEARCH AND INTERNATIONAL COOPERATION',
    sanction_uid: '31164'
  },
  {
    origin: 'OFAC',
    currency: 'ETC',
    sanction_id_uid: '136472',
    address: '0xd882cfc20f52f2599d84b8e8d58c7fb62cfe344b',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KARASAVIDI',
    sanction_uid: '29585'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '150215',
    address: '0x098B716B8Aaf21512996dC57EB0615e2383E2f96',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'LAZARUS GROUP',
    sanction_uid: '27307'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '150347',
    address: '0xa0e1c89Ef1a489c9C7dE96311eD5Ce5D32c20E4B',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'LAZARUS GROUP',
    sanction_uid: '27307'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '150348',
    address: '0x3Cffd56B47B7b41c56258D9C7731ABaDc360E073',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'LAZARUS GROUP',
    sanction_uid: '27307'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '150529',
    address: '0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'LAZARUS GROUP',
    sanction_uid: '27307'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '151631',
    address: '0x35fB6f6DB4fb05e6A4cE86f2C93691425626d4b1',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'LAZARUS GROUP',
    sanction_uid: '27307'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '151632',
    address: '0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'LAZARUS GROUP',
    sanction_uid: '27307'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '151633',
    address: '0x3e37627dEAA754090fBFbb8bd226c1CE66D255e9',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'LAZARUS GROUP',
    sanction_uid: '27307'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '151647',
    address: '0x08723392Ed15743cc38513C4925f5e6be5c17243',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'LAZARUS GROUP',
    sanction_uid: '27307'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '136447',
    address: '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POTEKHIN',
    sanction_uid: '29584'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '136452',
    address: '0xd882cfc20f52f2599d84b8e8d58c7fb62cfe344b',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KARASAVIDI',
    sanction_uid: '29585'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '136618',
    address: '0x901bb9583b24d97e995513c6778dc6888ab6870e',
    program_list: [
      'ELECTION-EO13848',
      'CYBER2'
    ],
    sanction_name: 'LIFSHITS',
    sanction_uid: '29702'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '136621',
    address: '0xa7e5d5a720f06526557c513402f2e6b5fa20b008',
    program_list: [
      'ELECTION-EO13848',
      'CYBER2'
    ],
    sanction_name: 'LIFSHITS',
    sanction_uid: '29702'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '136631',
    address: '0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '138239',
    address: '0x1da5821544e25c636c1417ba96ade4cf6d2f9b5a',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '138264',
    address: '0x7Db418b5D567A4e0E8c59Ad71BE1FcE48f3E6107',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '138267',
    address: '0x72a5843cc08275C8171E582972Aa4fDa8C397B2A',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '138268',
    address: '0x7F19720A857F834887FC9A7bC0a0fBe7Fc7f8102',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '139647',
    address: '0x9f4cda013e354b8fc285bf4b9a60460cee7f7ea9',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '144778',
    address: '0x3cbded43efdaf0fc77b9c55f6fc9988fcc9b757d',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '143011',
    address: '0x2f389ce8bd8ff92de3402ffce4691d17fc4f6535',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '143014',
    address: '0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '143020',
    address: '0xe7aa314c77f4233c18c6cc84384a9247c0cf367b',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '143063',
    address: '0x308ed4b7b49797e1a98d3818bff6fe5385410370',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '144717',
    address: '0x67d40EE1A85bf4a4Bb7Ffae16De985e8427B6b45',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '144719',
    address: '0x6f1ca141a28907f78ebaa64fb83a9088b02a8352',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '144725',
    address: '0x48549a34ae37b12f6a30566245176994e17c6b4a',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '144727',
    address: '0x5512d943ed1f7c8a43f3435c85f7ab68b30121b0',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '144741',
    address: '0xc455f7fd3e0e12afd51fba5c106909934d8a0e4a',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '149349',
    address: '0x7FF9cFad3877F21d41Da833E2F775dB0569eE3D9',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'GARANTEX EUROPE OU',
    sanction_uid: '36025'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '154508',
    address: '0xc2a3829F459B3Edd87791c74cD45402BA0a20Be3',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'TASK FORCE RUSICH',
    sanction_uid: '38665'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '155029',
    address: '0x3AD9dB589d201A710Ed237c829c7860Ba86510Fc',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'TASK FORCE RUSICH',
    sanction_uid: '38665'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156438',
    address: '0x83E5bC4Ffa856BB84Bb88581f5Dd62A433A25e0D',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156439',
    address: '0x08b2eFdcdB8822EfE5ad0Eae55517cf5DC544251',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156440',
    address: '0x04DBA1194ee10112fE6C3207C0687DEf0e78baCf',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156441',
    address: '0x0Ee5067b06776A89CcC7dC8Ee369984AD7Db5e06',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156442',
    address: '0x502371699497d08D5339c870851898D6D72521Dd',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156443',
    address: '0x5A14E72060c11313E38738009254a90968F58f51',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156444',
    address: '0xEFE301d259F525cA1ba74A7977b80D5b060B3ccA',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156550',
    address: '0xd0975b32cea532eadddfc9c60481976e39db3472',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156551',
    address: '0x1967d8af5bd86a497fb3dd7899a020e47560daaf',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156268',
    address: '0x12D66f87A04A9E220743712cE6d9bB1B5616B8Fc',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156269',
    address: '0x47CE0C6eD5B0Ce3d3A51fdb1C52DC66a7c3c2936',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156270',
    address: '0x910Cbd523D972eb0a6f4cAe4618aD62622b39DbF',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156271',
    address: '0xA160cdAB225685dA1d56aa342Ad8841c3b53f291',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156272',
    address: '0xD4B88Df4D29F5CedD6857912842cff3b20C8Cfa3',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156273',
    address: '0xFD8610d20aA15b7B2E3Be39B396a1bC3516c7144',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156274',
    address: '0x07687e702b410Fa43f4cB4Af7FA097918ffD2730',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156287',
    address: '0x23773E65ed146A459791799d01336DB287f25334',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156288',
    address: '0x22aaA7720ddd5388A3c0A3333430953C68f1849b',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156289',
    address: '0x03893a7c7463AE47D46bc7f091665f1893656003',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156290',
    address: '0x2717c5e28cf931547B621a5dddb772Ab6A35B701',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156291',
    address: '0xD21be7248e0197Ee08E0c20D4a96DEBdaC3D20Af',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156292',
    address: '0x4736dCf1b7A3d580672CcE6E7c65cd5cc9cFBa9D',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156293',
    address: '0xDD4c48C0B24039969fC16D1cdF626eaB821d3384',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156294',
    address: '0xd96f2B1c14Db8458374d9Aca76E26c3D18364307',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156295',
    address: '0x169AD27A470D064DEDE56a2D3ff727986b15D52B',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156296',
    address: '0x0836222F2B2B24A3F36f98668Ed8F0B38D1a872f',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156297',
    address: '0x178169B423a011fff22B9e3F3abeA13414dDD0F1',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156298',
    address: '0x610B717796ad172B316836AC95a2ffad065CeaB4',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156307',
    address: '0xbB93e510BbCD0B7beb5A853875f9eC60275CF498',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156308',
    address: '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156309',
    address: '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156310',
    address: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156311',
    address: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156312',
    address: '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156313',
    address: '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156314',
    address: '0xa5C2254e4253490C54cef0a4347fddb8f75A4998',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156315',
    address: '0xaf8d1839c3c67cf571aa74B5c12398d4901147B3',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156317',
    address: '0x6Bf694a291DF3FeC1f7e69701E3ab6c592435Ae7',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156318',
    address: '0x3aac1cC67c2ec5Db4eA850957b967Ba153aD6279',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156319',
    address: '0x723B78e67497E85279CB204544566F4dC5d2acA0',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156320',
    address: '0x0E3A09dDA6B20aFbB34aC7cD4A6881493f3E7bf7',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156321',
    address: '0x76D85B4C0Fc497EeCc38902397aC608000A06607',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156322',
    address: '0xCC84179FFD19A1627E79F8648d09e095252Bc418',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156323',
    address: '0xD5d6f8D9e784d0e26222ad3834500801a68D027D',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156324',
    address: '0x407CcEeaA7c95d2FE2250Bf9F2c105aA7AAFB512',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156325',
    address: '0x833481186f16Cece3f1Eeea1a694c42034c3a0dB',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156326',
    address: '0xd8D7DE3349ccaA0Fde6298fe6D7b7d0d34586193',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156327',
    address: '0x8281Aa6795aDE17C8973e1aedcA380258Bc124F9',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156328',
    address: '0x57b2B8c82F065de8Ef5573f9730fC1449B403C9f',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156329',
    address: '0x05E0b5B40B7b66098C2161A5EE11C5740A3A7C45',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156330',
    address: '0x23173fE8b96A4Ad8d2E17fB83EA5dcccdCa1Ae52',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156331',
    address: '0x538Ab61E8A9fc1b2f93b3dd9011d662d89bE6FE6',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156332',
    address: '0x94Be88213a387E992Dd87DE56950a9aef34b9448',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156333',
    address: '0x242654336ca2205714071898f67E254EB49ACdCe',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156347',
    address: '0x776198CCF446DFa168347089d7338879273172cF',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156348',
    address: '0xeDC5d01286f99A066559F60a585406f3878a033e',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156349',
    address: '0xD692Fd2D0b2Fbd2e52CFa5B5b9424bC981C30696',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156350',
    address: '0xca0840578f57fe71599d29375e16783424023357',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156351',
    address: '0xDF3A408c53E5078af6e8fb2A85088D46Ee09A61b',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156352',
    address: '0x743494b60097A2230018079c02fe21a7B687EAA5',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156353',
    address: '0x94C92F096437ab9958fC0A37F09348f30389Ae79',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156354',
    address: '0x5efda50f22d34F262c29268506C5Fa42cB56A1Ce',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156355',
    address: '0x2f50508a8a3d323b91336fa3ea6ae50e55f32185',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156356',
    address: '0xCEe71753C9820f063b38FDbE4cFDAf1d3D928A80',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156357',
    address: '0xffbac21a641dcfe4552920138d90f3638b3c9fba',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156358',
    address: '0x179f48c78f57a3a78f0608cc9197b8972921d1d2',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156359',
    address: '0xb04E030140b30C27bcdfaafFFA98C57d80eDa7B4',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156360',
    address: '0x77777feddddffc19ff86db637967013e6c6a116c',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156361',
    address: '0x3efa30704d2b8bbac821307230376556cf8cc39e',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156362',
    address: '0x746aebc06d2ae31b71ac51429a19d54e797878e9',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156363',
    address: '0xd90e2f925DA726b50C4Ed8D0Fb90Ad053324F31b',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156364',
    address: '0x5f6c97C6AD7bdd0AE7E0Dd4ca33A4ED3fDabD4D7',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156365',
    address: '0xf4B067dD14e95Bab89Be928c07Cb22E3c94E0DAA',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156366',
    address: '0x58E8dCC13BE9780fC42E8723D8EaD4CF46943dF2',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156367',
    address: '0x01e2919679362dFBC9ee1644Ba9C6da6D6245BB1',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156368',
    address: '0x2FC93484614a34f26F7970CBB94615bA109BB4bf',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156369',
    address: '0x26903a5a198D571422b2b4EA08b56a37cbD68c89',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156370',
    address: '0xB20c66C4DE72433F3cE747b58B86830c459CA911',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156371',
    address: '0x2573BAc39EBe2901B4389CD468F2872cF7767FAF',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156372',
    address: '0x527653eA119F3E6a1F5BD18fbF4714081D7B31ce',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156373',
    address: '0x653477c392c16b0765603074f157314Cc4f40c32',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156374',
    address: '0x88fd245fEdeC4A936e700f9173454D1931B4C307',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156375',
    address: '0x09193888b3f38C82dEdfda55259A82C0E7De875E',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156376',
    address: '0x5cab7692D4E94096462119ab7bF57319726Eed2A',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156377',
    address: '0x756C4628E57F7e7f8a459EC2752968360Cf4D1AA',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156378',
    address: '0x722122dF12D4e14e13Ac3b6895a86e84145b6967',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156379',
    address: '0x94A1B5CdB22c43faab4AbEb5c74999895464Ddaf',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156380',
    address: '0xb541fc07bC7619fD4062A54d96268525cBC6FfEF',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156381',
    address: '0xD82ed8786D7c69DC7e052F7A542AB047971E73d2',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156382',
    address: '0xF67721A2D8F736E75a49FdD7FAd2e31D8676542a',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156383',
    address: '0x9AD122c22B14202B4490eDAf288FDb3C7cb3ff5E',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156384',
    address: '0xD691F27f38B395864Ea86CfC7253969B409c362d',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156385',
    address: '0xaEaaC358560e11f52454D997AAFF2c5731B6f8a6',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156386',
    address: '0x1356c899D8C9467C7f71C195612F8A395aBf2f0a',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156387',
    address: '0xA60C772958a3eD56c1F15dD055bA37AC8e523a0D',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156388',
    address: '0xBA214C1c1928a32Bffe790263E38B4Af9bFCD659',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156389',
    address: '0xb1C8094B234DcE6e03f10a5b673c1d8C69739A00',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156390',
    address: '0xF60dD140cFf0706bAE9Cd734Ac3ae76AD9eBC32A',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '156391',
    address: '0x8589427373D6D84E98730D7795D8f6f8731FDA16',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TORNADO CASH',
    sanction_uid: '39796'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '157927',
    address: '0x39D908dac893CBCB53Cc86e0ECc369aA4DeF1A29',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'ZIMENKOV',
    sanction_uid: '40488'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '160982',
    address: '0x4f47bc496083c727c5fbe3ce9cdf2b0f6496270c',
    program_list: [
      'NPWMD'
    ],
    sanction_name: 'SIM',
    sanction_uid: '42498'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '162810',
    address: '0x97b1043abd9e6fc31681635166d430a458d14f9c',
    program_list: [
      'DPRK4'
    ],
    sanction_name: 'KIM',
    sanction_uid: '43377'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '162811',
    address: '0xb6f5ec1a0a9cd1526536d3f0426c429529471f40',
    program_list: [
      'DPRK4'
    ],
    sanction_name: 'KIM',
    sanction_uid: '43377'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '162897',
    address: '0xe1d865c3d669dcc8c57c8d023140cb204e672ee4',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '164878',
    address: '0x9c2bc757b66f24d60f016b6237f8cdd414a879fa',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'JIMENEZ CASTRO',
    sanction_uid: '44029'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '164882',
    address: '0xdcbEfFBECcE100cCE9E4b153C4e15cB885643193',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SEMENOV',
    sanction_uid: '44718'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '164883',
    address: '0x5f48c2a71b2cc96e3f0ccae4e39318ff0dc375b2',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SEMENOV',
    sanction_uid: '44718'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '164884',
    address: '0x5a7a51bfb49f190e5a6060a5bc6052ac14a3b59f',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SEMENOV',
    sanction_uid: '44718'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '164885',
    address: '0xed6e0a7e4ac94d976eebfb82ccf777a3c6bad921',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SEMENOV',
    sanction_uid: '44718'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '164886',
    address: '0x797d7ae72ebddcdea2a346c1834e04d1f8df102b',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SEMENOV',
    sanction_uid: '44718'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '164887',
    address: '0x931546D9e66836AbF687d2bc64B30407bAc8C568',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SEMENOV',
    sanction_uid: '44718'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '164888',
    address: '0x43fa21d92141BA9db43052492E0DeEE5aa5f0A93',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SEMENOV',
    sanction_uid: '44718'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '164889',
    address: '0x6be0ae71e6c41f2f9d0d1a3b8d0f75e6f6a0b46e',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SEMENOV',
    sanction_uid: '44718'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '165744',
    address: '0x530a64c0ce595026a4a556b703644228179e2d57',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'SHEN',
    sanction_uid: '45312'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '165751',
    address: '0x983a81ca6FB1e441266D2FbcB7D8E530AC2E05A2',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'VALERIAN LABS, INC.',
    sanction_uid: '45314'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '165869',
    address: '0x961c5be54a2ffc17cf4cb021d863c42dacd47fc1',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'ZHANG',
    sanction_uid: '45391'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '170190',
    address: '0xE950DC316b836e4EeFb8308bf32Bf7C72a1358FF',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'GAZA NOW',
    sanction_uid: '47635'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '170191',
    address: '0x21B8d56BDA776bbE68655A16895afd96F5534feD',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'GAZA NOW',
    sanction_uid: '47635'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '169180',
    address: '0xf3701f445b6bdafedbca97d1e477357839e4120d',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KONDRATIEV',
    sanction_uid: '47682'
  },
  {
    origin: 'OFAC',
    currency: 'ETH',
    sanction_id_uid: '170744',
    address: '0x19F8f2B0915Daa12a3f5C9CF01dF9E24D53794F7',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'OKO DESIGN BUREAU',
    sanction_uid: '48432'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '131739',
    address: 'LaizKtS5DUhPuP1nTQcc83MS7HwK6vk85z',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'ZHENG',
    sanction_uid: '26323'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '136453',
    address: 'LNwgtMxcKUQ51dw7bQL1yPQjBVZh6QEqsd',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KARASAVIDI',
    sanction_uid: '29585'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '136617',
    address: 'Leo3j36nn1JcsUQruytQhFUdCdCH5YHMR3',
    program_list: [
      'ELECTION-EO13848',
      'CYBER2'
    ],
    sanction_name: 'LIFSHITS',
    sanction_uid: '29702'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '136627',
    address: 'LWnbjLYUfqeokfbWM4FcU7uk2FP2DSxuWS',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '136629',
    address: 'LaYUy1DGfVSuSF5KbPhbLrm8kRotqiwUJn',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '138269',
    address: 'LQAhYwwK5AR1JQiQPr7vu8Pu4b6qcxxvNB',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '138270',
    address: 'LgwmgYnraU2uBWHVFUDgAmFCPYj5Yw8C9L',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '138271',
    address: 'LeKvNdNEzgQkzVVnRdV3fAu2DSF1nLsNw6',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '138287',
    address: 'LeKvNdNEzgQkzVVnRdV3fAu2DSF1nLsNw6',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'RAZA',
    sanction_uid: '30520'
  },
  {
    origin: 'OFAC',
    currency: 'LTC',
    sanction_id_uid: '162904',
    address: 'LNf2JDiuunBz7GMDKFYHN4rq5meXWxiwfb',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'TRX',
    sanction_id_uid: '162905',
    address: 'TBHTJqAy4DhHhmT3dNceJYNRz4SdLofLre',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'TRX',
    sanction_id_uid: '165806',
    address: 'TMStbg5fgb4uTV7fK1gEYF9hKAzP3siPsG',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'WANG',
    sanction_uid: '45349'
  },
  {
    origin: 'OFAC',
    currency: 'TRX',
    sanction_id_uid: '165812',
    address: 'TTKnV2S1295UrPr7N67Tp9ykNL7xX2Z4Uj',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'XIA',
    sanction_uid: '45350'
  },
  {
    origin: 'OFAC',
    currency: 'TRX',
    sanction_id_uid: '165868',
    address: 'TRBACioxdrdsYEZHvJWiUDZcMdBPpEe5Ub',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'ZHANG',
    sanction_uid: '45391'
  },
  {
    origin: 'OFAC',
    currency: 'TRX',
    sanction_id_uid: '170745',
    address: 'TFdTr9C3BqQrzKBXqSxJfAZFTh8UwBAfSg',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'OKO DESIGN BUREAU',
    sanction_uid: '48432'
  },
  {
    origin: 'OFAC',
    currency: 'USDC',
    sanction_id_uid: '162813',
    address: '0xb6f5ec1a0a9cd1526536d3f0426c429529471f40',
    program_list: [
      'DPRK4'
    ],
    sanction_name: 'KIM',
    sanction_uid: '43377'
  },
  {
    origin: 'OFAC',
    currency: 'USDC',
    sanction_id_uid: '165753',
    address: '0x983a81ca6FB1e441266D2FbcB7D8E530AC2E05A2',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'VALERIAN LABS, INC.',
    sanction_uid: '45314'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '143100',
    address: '0x2f389ce8bd8ff92de3402ffce4691d17fc4f6535',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '143101',
    address: '0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '143102',
    address: '1KUUJPkyDhamZXgpsyXqNGc3x1QPXtdhgz',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '143103',
    address: '1CF46Rfbp97absrs7zb7dFfZS6qBXUm9EP',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '143104',
    address: '1LrxsRd7zNuxPJcL5rttnoeJFy1y4AffYY',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '143105',
    address: '1Df883c96LVauVsx9FEgnsourD8DELwCUQ',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '143107',
    address: '16iWn2J1McqjToYLHSsAyS6En3QA8YQ91H',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '144718',
    address: '3LtcaPbCj87CwJHnRX3vh7c2y9RZQqeSy8',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '144749',
    address: '0xfec8a60023265364d066a1212fde3930f6ae8da7',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POLYANIN',
    sanction_uid: '33858'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '149350',
    address: '3E6ZCKRrsdPc35chA9Eftp1h3DLW18NFNV',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'GARANTEX EUROPE OU',
    sanction_uid: '36025'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '154509',
    address: 'TX5GV4DyfxNB3rPkzZJhmqZ1efVmL4rEqG',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'TASK FORCE RUSICH',
    sanction_uid: '38665'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '162654',
    address: '0x38735f03b30FbC022DdD06ABED01F0Ca823C6a94',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'HANAFIN',
    sanction_uid: '43085'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '162812',
    address: '0xb6f5ec1a0a9cd1526536d3f0426c429529471f40',
    program_list: [
      'DPRK4'
    ],
    sanction_name: 'KIM',
    sanction_uid: '43377'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '164442',
    address: 'TVacWx7F5wgMgn49L5frDf9KLgdYy8nPHL',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'SHAFIU',
    sanction_uid: '44445'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '170364',
    address: 'TEFph7dZoUN5233cGEzF6XFwRpjPF8fQDS',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'GAMBASHIDZE',
    sanction_uid: '45213'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '170365',
    address: 'TMGLqRQ4twjW8wJhVH1mQR7nUThpGHUsN3',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'GAMBASHIDZE',
    sanction_uid: '45213'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '165745',
    address: 'TEAqwfMhXLaomXhZ8KeMhx3njGmQEDnsUR',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'SHEN',
    sanction_uid: '45312'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '165752',
    address: '0x983a81ca6FB1e441266D2FbcB7D8E530AC2E05A2',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'VALERIAN LABS, INC.',
    sanction_uid: '45314'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '165925',
    address: '0xfac583c0cf07ea434052c49115a4682172ab6b4f',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'WANG',
    sanction_uid: '45404'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '170193',
    address: 'TTgcTTNbNuFdbrhvbjMZVrdU5KALyzDaPw',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'GAZA NOW',
    sanction_uid: '47635'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '170211',
    address: 'TGJVc32ig2u8tQsYMLE7KXHT5NDQroaVNU',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'GAZA NOW',
    sanction_uid: '47635'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '170212',
    address: 'TXEsK1sEsKjZ1xtHitnyAAoqw3WLdYdRNW',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'GAZA NOW',
    sanction_uid: '47635'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '170213',
    address: 'TH96tFMn8KGiYSLiwcV3E2UiaJc8jmcbz3',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'GAZA NOW',
    sanction_uid: '47635'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '170604',
    address: '0x175d44451403Edf28469dF03A9280c1197ADb92c',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'GAZA NOW',
    sanction_uid: '47635'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '170468',
    address: 'TWBAPzpPiZarfVsY2BLXeaLhNHurn4wkWG',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'AL-LAW',
    sanction_uid: '48302'
  },
  {
    origin: 'OFAC',
    currency: 'USDT',
    sanction_id_uid: '177641',
    address: 'TLM3zA3EWycoDX4ZX4gKze7sgfbdkntTum',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'OBSHCHESTVO S OGRANICHENNOI OTVETSTVENNOSTYU KONSTRUKTORSKOE BYURO VOSTOK',
    sanction_uid: '50110'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131723',
    address: '12QtD5BFwRsdNsAZY76UVE1xyCGNTojH9h',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'YAN',
    sanction_uid: '25308'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131724',
    address: '1Kuf2Rd8mDyAViwBozGTNYnvWL8uYFrkVo',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'YAN',
    sanction_uid: '25308'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131725',
    address: '13f59kUM5FU8MfTG7DCEugYarDhSD7XCoC',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'YAN',
    sanction_uid: '25308'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131726',
    address: '1P3ZfGFLezzYGg9k5SVzQmnjyh7nrUmF2y',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'YAN',
    sanction_uid: '25308'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131727',
    address: '1EpMiZkQVekM5ij12nMiEwttFPcDK9XhX6',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'YAN',
    sanction_uid: '25308'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131728',
    address: '1JREJdZupiFhE7ZzQPtASuMCvvpXC7wRsC',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'YAN',
    sanction_uid: '25308'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '130464',
    address: '149w62rY42aZBox8fGcmqNsXUzSStKeq8C',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KHORASHADIZADEH',
    sanction_uid: '26137'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '130476',
    address: '1AjZPMsnmpdK2Rv9KQNfMurTXinscVro9V',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'GHORBANIYAN',
    sanction_uid: '26138'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131685',
    address: '17ezuJoT3XBbdcwFZbkTnrXbup11F4uhiy',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'ZHENG',
    sanction_uid: '26236'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131762',
    address: '1DH2xDH7TngrDU6LXciprKCBKNcPA1xX8A',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'ZHENG',
    sanction_uid: '26236'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131736',
    address: '33Kja69SQVc8kozpoP7Qw6HFtGxHkiWzTz',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'ZHENG',
    sanction_uid: '26323'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131737',
    address: '3MkUNScqf21EcfWq6T4x2MFgBeSTqhB5t6',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'ZHENG',
    sanction_uid: '26323'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '131797',
    address: '18uKfaUjgG52rVeXEi3wxnveww7zZuECtE',
    program_list: [
      'SDNTK'
    ],
    sanction_name: 'ZHENG',
    sanction_uid: '26323'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133689',
    address: '134r8iHv69xdT6p5qVKTsHrcUEuBVZAYak',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TIAN',
    sanction_uid: '28263'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133690',
    address: '15YK647qtoZQDzNrvY6HJL6QwXduLHfT28',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TIAN',
    sanction_uid: '28263'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133691',
    address: '1PfwHNxUnkpfkK9MKjMqzR3Xq3KCtq9u17',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TIAN',
    sanction_uid: '28263'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133692',
    address: '14kqryJUxM3a7aEi117KX9hoLUw592WsMR',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TIAN',
    sanction_uid: '28263'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133693',
    address: '1F2Gdug9ib9NQMhKMGGJczzMk5SuENoqrp',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TIAN',
    sanction_uid: '28263'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133694',
    address: '3F2sZ4jbhvDKQdGbHYPC6ZxFXEau2m5Lqj',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TIAN',
    sanction_uid: '28263'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133695',
    address: '1AXUTu9y3H8w4wYx4BjyFWgRhZKDhmcMrn',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TIAN',
    sanction_uid: '28263'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133696',
    address: '1Hn9ErTCPRP6j5UDBeuXPGuq5RtRjFJxJQ',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'TIAN',
    sanction_uid: '28263'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133699',
    address: '1EfMVkxQQuZfBdocpJu6RUsCJvenQWbQyE',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133700',
    address: '17UVSMegvrzfobKC82dHXpZLtLcqzW9stF',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133701',
    address: '39eboeqYNFe2VoLC3mUGx4dh6GNhLB3D2q',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133702',
    address: '39fhoB2DohisGBbHvvfmkdPdShT75CNHdX',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133703',
    address: '3E6rY4dSCDW6y2bzJNwrjvTtdmMQjB6yeh',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133704',
    address: '3EeR8FbcPbkcGj77D6ttneJxmsr3Nu7KGV',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133705',
    address: '3HQRveQzPifZorZLDXHernc5zjoZax8U9f',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133706',
    address: '3JXKQ81JzBqVbB8VHdV9Jtd7auWokkdPgY',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133707',
    address: '3KHfXU24Bt3YD5Ef4J7uNp2buCuhrxfGen',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133708',
    address: '3LbDu1rUXHNyiz4i8eb3KwkSSBMf7C583D',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133709',
    address: '3MN8nYo1tt5hLxMwMbxDkXWd7Xu522hb9P',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '133710',
    address: '3N6WeZ6i34taX8Ditser6LKWBcXmt2XXL4',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'LI',
    sanction_uid: '28264'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136445',
    address: '1Q9UAQbcDezmyouFrzt94t4dSMxgsUfW1X',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POTEKHIN',
    sanction_uid: '29584'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136446',
    address: '1Kys8fqDen8NGFUJ6AFcXfFW5qquuTH4eh',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POTEKHIN',
    sanction_uid: '29584'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136450',
    address: '1Q6saNmqKkyFB9mFR68Ck8F7Dp7dTopF2W',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KARASAVIDI',
    sanction_uid: '29585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136451',
    address: '1DDA93oZPn7wte2eR1ABwcFoxUFxkKMwCf',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KARASAVIDI',
    sanction_uid: '29585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136616',
    address: '12udabs2TkX7NXCSj6KpqXfakjE52ZPLhz',
    program_list: [
      'ELECTION-EO13848',
      'CYBER2'
    ],
    sanction_name: 'LIFSHITS',
    sanction_uid: '29702'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136619',
    address: '1DT3tenf14cxz9WFNxmYrXFbB6TFiVWA9U',
    program_list: [
      'ELECTION-EO13848',
      'CYBER2'
    ],
    sanction_name: 'LIFSHITS',
    sanction_uid: '29702'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136626',
    address: '1Fz29BQp82pE3vXXcsZoMNQ3KSHfMzfMe3',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136628',
    address: '1AeSq93WDNdLoEJ92sex7T8xQZoYYm8BtS',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136633',
    address: '1AoxtfiBQ22DvbhqAN9Ctb8sULMRhrdwTr',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136634',
    address: '18Qj1THHuETfYhuRDZycXJbWwDMGw73Poa',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136635',
    address: '1MnbhWe5wr7Ut45ReyQsm96PwnM9jD7KaH',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136636',
    address: '1DYFJ6CuBvrxyoQSuBzVsNcetY9tvdsrag',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136637',
    address: '15Pt4NwZaUmMUwS2bQbyyncc7mzgWShtv8',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136638',
    address: '1PhqQpaGCrqSxQ6QDXcv14QCd1U98Zp34E',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136639',
    address: '13YBQr2Cp1YY3xqq2qngaPb7ca1o4ugeq6',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136642',
    address: '1KgudqxMfYaGzqAA7MS4DcsqejtMteqhix',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136645',
    address: '1FRyL9gmFGbzfYDAB4iY9836DJe3KSnjP9',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '136646',
    address: '1DbShx4r8i2XesthoDBf5EkYWz5dsKEusV',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138213',
    address: '1NE2NiGhhbkFPSEyNWwj7hKGhGDedBtSrQ',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138214',
    address: '19D8PHBjZH29uS1uPZ4m3sVyqqfF8UFG9o',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138215',
    address: '1EYitrwBYNWuTBcjZFbEUdqHppe2raLpaF',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138216',
    address: '1G9CKRHA3mx22DoT1QyNYrh85VSQ19Y1em',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138217',
    address: '182NGZbPJXwg2WDrhrPpR7tpiGQkNPF844',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138218',
    address: '1NayLEVF3bEEbDtdF2Cwso1VdEtvVNh2qX',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138219',
    address: '16PhXY3hNNMTo8kpuJx2emh713KbWpkqci',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138220',
    address: '1GqChmWqGtsaLrGbHfgdrV5Nkvahtjjuxr',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138221',
    address: '18Ke1QWE9nQfXuhJijHggZuPJ5ZYxapoBK',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138222',
    address: '1QJUiNsNfji6mR1FjAwf6Eg9NxxHPoxpWL',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138223',
    address: '1DtGgdCi9VPKz2Bpq8GQhUQEPnQ5HwaT9n',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'SECONDEYE SOLUTION',
    sanction_uid: '30518'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138285',
    address: '1KSAbh5trMCTZwhiNsuUQvfTtSSTT8zqRk',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'RAZA',
    sanction_uid: '30520'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '138286',
    address: '1BiUFjzH6wsT73U3tfy4aXHCQsYQHzjk5h',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'RAZA',
    sanction_uid: '30520'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '139645',
    address: '3Gbs4rjcVUtQd8p3CiFUCxPLZwRqurezRZ',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144776',
    address: 'bc1qv7k70u2zynvem59u88ctdlaw7hc735d8xep9rq',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144777',
    address: 'bc1qw4cxpe6sxa5dg6sdwxjph959cw6yztrzl4r54s',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '141945',
    address: '17a5bpKvEp1j1Trs4qTbcNZrby53JbaS9C',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'FAYZIMATOV',
    sanction_uid: '31811'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '158420',
    address: '1JPfVv5cWRLx1js9NWxg46dG2CGbeRz4th',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'HEBEI ATUN TRADING CO., LTD.',
    sanction_uid: '32313'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '142980',
    address: '12HQDsicffSBaYdJ6BhnE22sfjTESmmzKx',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143000',
    address: '1L4ncif9hh9TnUveqWq77HfWWt6CJWtrnb',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143001',
    address: '13mnk8SvDGqsQTHbiGiHBXqtaQCUKfcsnP',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143002',
    address: '1Edue8XZCWNoDBNZgnQkCCivDyr9GEo4x6',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143003',
    address: '1ECeZBxCVJ8Wm2JSN3Cyc6rge2gnvD3W5K',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143005',
    address: '1J9oGoAiHeRfeMZeUnJ9W7RpV55CdKtgYE',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143006',
    address: '1295rkVyNfFpqZpXvKGhDqwhP1jZcNNDMV',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143007',
    address: '1LiNmTUPSJEd92ZgVJjAV3RT9BzUjvUCkx',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143008',
    address: '1LrxsRd7zNuxPJcL5rttnoeJFy1y4AffYY',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143046',
    address: '1KUUJPkyDhamZXgpsyXqNGc3x1QPXtdhgz',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143047',
    address: '1CF46Rfbp97absrs7zb7dFfZS6qBXUm9EP',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143049',
    address: '1Df883c96LVauVsx9FEgnsourD8DELwCUQ',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143060',
    address: 'bc1qdt3gml5z5n50y5hm04u2yjdphefkm0fl2zdj68',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '143106',
    address: '1B64QRxfaa35MVkf7sDjuGUYAP5izQt7Qi',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUEX OTC, S.R.O.',
    sanction_uid: '33151'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144716',
    address: '3E7YbpXuhh3CWFks1jmvWoV8y5DvsfzE6n',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144720',
    address: '3NRJ8aXdUiZdHaiFX9ePX3DhGHzcEi14Fq',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144722',
    address: '3K7PMJyMNVnxqsfpmK9r9nJDtzDw9wNwNV',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144723',
    address: '3H3rh85qPaGLy2w6618yZNaH7i8asHv46B',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144724',
    address: '3MTrJTFhYK9v1C6pjHtuweZSopfZa4b1wb',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144726',
    address: '347QFbejDBdMZFTxpmn6evvvqyXiqZTCd7',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144728',
    address: '33xWfziVZesgo83U5izdNCBVTnrtBpSwK7',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144729',
    address: '32wdqwX3zCEX3DhAVEcKwXCEGdzgBnx1R9',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144730',
    address: '3N9YcPBDky9UsMx1RTk33tL4jDkZfSnsPk',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144731',
    address: 'bc1q90zrdysy4flyacw7hsury3ajs9yzwtwp6guqpypx94w0d3p58hysvz6pde',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144732',
    address: 'bc1qw7vfgv3r5vnehafl0y95sclg3uqsj87wxs9ad628yjjcq33cwessr6ndyw',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144733',
    address: 'bc1q86tl9255vg5wldamfymaaz36uqxzm30gs7fhkljvzdlt9t38s3lqgdwdfq',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144734',
    address: '3M7CGBPUJwXXSroWuZ6H5jiprdKCyf7V5M',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144735',
    address: '34kWCKF2wCbe6uinit2uL4ND6d8yxsuxKM',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144736',
    address: 'bc1qe95l438kzjcvnsm3kn8n5augf9gpctdlhsq7f7hpnkyvlr7rc7cqupapf7',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144737',
    address: '32VgTk8kGvBsqkHhkvtNooGdtqZm46jTVo',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144738',
    address: '3NPognMSbzyA2JYW2fpkVKWyBMi2XTq2Zt',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144739',
    address: '3MzLtBQ4Lz9J6w4Qu55TktgxFKZwxYWrP6',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144740',
    address: '36YGN5dGzqrxMomTHdkT6cYVMnWBw8S7hD',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144742',
    address: 'bc1q4rzdtlt0uslyw86cp29sctl6ct29g9a95cuup7pn5md9ddj7xgmqpp5m73',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144743',
    address: '39KQvziHwUe2vddbpfC5WkQEV72qbQhxuh',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144744',
    address: '3Qw9Fn19gCnga9LfHfpM99aGzuqxBNjR2i',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144748',
    address: '158treVZBGMBThoaympxccPdZPtqUfYrT9',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POLYANIN',
    sanction_uid: '33858'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144750',
    address: '389Sft4nJFkPGhbagk9FN4jXncA9piYTuU',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POLYANIN',
    sanction_uid: '33858'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144751',
    address: '39Te8MbphSgs7npDJPj2hbNzhke61NTcnB',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POLYANIN',
    sanction_uid: '33858'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144752',
    address: '31p6woV4e55HUfC2aGynFhzQnGoJFW26cD',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POLYANIN',
    sanction_uid: '33858'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144753',
    address: '3DNsaQnaUz7wkQny1ZDSmtz6QfbEShxoDD',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POLYANIN',
    sanction_uid: '33858'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144754',
    address: '3AjyprBY5yhijiCjUC5NUJutGbwhd3AQdE',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'POLYANIN',
    sanction_uid: '33858'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144761',
    address: '35QpLWYkvD3ALhjbge5bK2kd7HfHYcDMu3',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'VASINSKYI',
    sanction_uid: '33859'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144762',
    address: '3NQ1aa9ceirMJ1JvRq3eXefvXj1L639fzX',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'VASINSKYI',
    sanction_uid: '33859'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144763',
    address: '3BsyZ7qRFSi3NsaoV1Ff724qAgrEpjVUHm',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'VASINSKYI',
    sanction_uid: '33859'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '144764',
    address: '372Wk9NLrMkJzKgqJdatWJy4bYRfxFjgat',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'VASINSKYI',
    sanction_uid: '33859'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149348',
    address: '3Lpoy53K625zVeE47ZasiG5jGkAxJ27kh1',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'GARANTEX EUROPE OU',
    sanction_uid: '36025'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149687',
    address: '3K4rjdh8A5yi6LWvft2rbmyZvqEbPSSSX4',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149688',
    address: '17mhyeBX617ABZ1ffThhUTJkHUcMvCkfd5',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149689',
    address: '35qwVtMEohWDdBWRiCSR7azoP5cbY8SG1Q',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149690',
    address: '35KAdTa2vqnJzitF2xiUzZn1Gmcas2Y465',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149691',
    address: '35LScRJ8hzDvvWh9t9UA8bHGnGNVz3YEfa',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149692',
    address: '1PJp8diNa89cVHpiT1VPu7EQ8LxYM5HX6v',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149693',
    address: '17V7THwHMiDJmDwZK4unhE5HgKFJKx7VCe',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149694',
    address: '3PiCnZrBvGfWAKQ9hr4cCpfaDjy64yNSpE',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149695',
    address: '14gM1HuLVDELNHaFU22qpabjtiWek4HhV1',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149696',
    address: '1GYuu9d5HPikafbys3k5Q3DRJq6debGsoB',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149697',
    address: '3GXdtA6kbb4M5aqzZm5qqxcFDFRMW8LqdJ',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149698',
    address: '1B11Ezqg3AXjFhMdRq5UpPDpNyriYNVtkn',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149699',
    address: '16SPDQFFzgsoNSPiFFTfS8Dw8LLXqia4oc',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149700',
    address: '19pPbUDvoSBZafkUCYkD2Z9AkuqqV6sWm7',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149701',
    address: '3BQACtiMXYB9JpUMpkEWt9m8BzswpGHq4X',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149702',
    address: '1DGsY4ww3BJnWXTsnmTgWa6UWdoRXgA1pX',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149703',
    address: '1GcKLUUXodTQcLcPD7VLMgvCc4hs5Q775',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149704',
    address: '1EvhBad5wCZYhBoAsGaciV6AvmZ1osLpeJ',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149705',
    address: 'bc1qsmv6lkrw65l30yazdqpdjjtwzpvk9f8gfh0cy7',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149706',
    address: 'bc1qs9u6j78e3utj08mwvqkkmqm9de5xk3g4yh8qtq',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149707',
    address: '12VrYZgS1nmf9KHHped24xBb1aLLRpV2cT',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149708',
    address: 'bc1q202ajnhxgg9d9jjczmg0g4usp6haqldyy2eakl',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149709',
    address: '1NbGwQwt4uEhg2srAKppLf8QaF6fbp3PZG',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149710',
    address: '13LQJQ1oJ9K7PsqsGfjNhoVv6UeU6hgzQz',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149711',
    address: '1CG1aSCxUnbmv9G34ofxTQoHtuVnMLJtQV',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149712',
    address: '3Kp8Qc5z7yevDeoQxhS5RSSKnEi5x7AQ43',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149713',
    address: '331TS6DyASY7iU5CRA8UryBnkPS78fP2B1',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149714',
    address: '1NvJm3jfZxENNyqws5BKQvhkLxg9chLJdo',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149715',
    address: '1Licqjca74n8pmNaoARXLLqcTUTHFpxbXH',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149716',
    address: '175BUqf8JCU1uoG1iTRKTacDa4uvJDUCw2',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149717',
    address: '1ANpca7g93BwptUJg1zV116v49zn9gjDi3',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149718',
    address: '1BCWMwpR4M1nYUuuYe2bmzrNuwGoF9ZAbA',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149719',
    address: '18cFGAdYcvNHkuhXLBE7izQKCyUW8TzCJE',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149720',
    address: '1QHxyuLGRMHfbNPJikV4Dwhfx45HWfUMWB',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149721',
    address: '1GnFTy5F9qi5MfaRZfgdg2jkyT5xtAHvd8',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149722',
    address: 'bc1quyc6j8ca84q9gjej5jjd2n8hra0vfu0j60fefs57p6e5rerkq07q0l5u3w',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149723',
    address: '16p2UWTZwXRyK5bTHNVjdDyy1D3EQGsZf2',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149724',
    address: '1CddRqw7oSPrT4tt5oXKyx2LiHJDPszy7y',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149725',
    address: '1Hhe61Bwxs8Hd2WxzWY9FQyZicBiZGeSNW',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149726',
    address: '1D3GuaS9eqKw8dWj9JFQtNufdRtysjSLxZ',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149727',
    address: '1PWRKxkR5AU7Tc9zPqjdhtu1eGW1QZzs4y',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149728',
    address: '1D1ej7zQzywWBDNXKNYpmH7Hso2U9koDG4',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149729',
    address: '3KGQ3hX6eFYtBjTBFSdvdkzHmwZyYWLRQh',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149730',
    address: '1LKE3XA9bf5JFqtGtCHzWj5QGxKGwMfXZw',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149731',
    address: '1MtsQsw6n2jvJCWhpCw7jifTfD9Q3rBBVg',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149732',
    address: '1KkaKujnqwJf7Cbm7JKAZGF3X9d4685m8n',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149733',
    address: '1Ge8JodC2HiBiEuT7D3MoH6Fak6XrcT9Kf',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149734',
    address: 'bc1qsmqpalp3gtgkltag4x3ygevmhh9y2hzk73t2ug',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149735',
    address: '1E9uUnLbyfToazo95vmM3ysYnzgkrL7GeC',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149736',
    address: '1HH8eiuaTMucTNyvGCUmAvmCZCtdMi8SqK',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149737',
    address: '19FQzHibWDhSP8pKmJS3uagFYoisXtehzw',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149738',
    address: '3DLGfN7hgsWXXSp9euXcnmWXLpFQuswW2t',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149739',
    address: '1PXxwPVtYxZiCRp9LKq7aKMDFrhAQztvUE',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149740',
    address: '1Q4tJjH2aBr3AJrzxqa4Z3jPpf5SDgF4jK',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149741',
    address: '1PYtgFS2t6i57WdDvbRa7kPcsagGMBxzfg',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149742',
    address: '16ZSAEfYpPCj3D94fsNt2okYj9Ue8mxy6T',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149743',
    address: 'bc1qvlzfn6kmezv44d8kw0p5jsmxe6wchv3zc7gsxs',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149744',
    address: '3QVyoH4u3qT88uChAeJVhfB3r6maZt431y',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149745',
    address: '1FFS6pX1TCKTNy668Mbk2Lyoem1qB48kYX',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149746',
    address: '1Dpddb1TMjvmNQeYDqgyd1ww6cmwPJRdSk',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149747',
    address: '3AjiWiUdKB5mcGUSS9mBeoHCeYJw3Zo8r6',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149748',
    address: '1EtMuBPQnPCa3cecerdSH1SzydxnhbTmw',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149749',
    address: '3CCmt5LjQ5yKkaFY1DWC2SbERVEtWRnSRD',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149750',
    address: '1MQBDeRWsiJBf7K1VGjJ7PWEL6GJXMfmLg',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149751',
    address: '1MbtT2ZsTtLp7EKZUV9r74cTyqvsMtTP2M',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149752',
    address: '36yS87PLuW7sErLg1TY26WzaVarTim7AcC',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149753',
    address: '3AYU365Tcjef7j9pdKF9Xe8rWpEpsH196t',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149754',
    address: '148LKmyZT3FGE4x1GjsFN6RsAwcjzk5iuE',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149755',
    address: '16EKTes8ahD8xvwisqjc2xSNLiG3fDHatW',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149756',
    address: '3GuQjr7kkrR5EjpanMgyAuxuLgrjEUwe21',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149757',
    address: '35eanEz5iYg2eYaxCtMrR4SCoypFqrBWUH',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149758',
    address: '3QWUdP5taP4GrRuueVDud1eWetb7hc3wDH',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149759',
    address: '3Czhm6xqn8odwz6jgTcjRrUjog28v6aVS8',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149760',
    address: '1F7UL41qYm6TvnExZzPHBCyeENvX3XDEMS',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149761',
    address: '123WBUDmSJv4GctdVEz6Qq6z8nXSKrJ4KX',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149762',
    address: '3BCN3WgMRJwULTz1vsEQ7NZrBjwaUBf5Ca',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149763',
    address: '35SwVFxosV3AsvnrBfzdXarqavRbvDyyxv',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149764',
    address: '32pCmCWEjwhkLwh5BgLNAeBQFp5Gi1hv81',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149765',
    address: '1G64TFMFVJTjhJXra6x74BBhsfSyiWaFtT',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149766',
    address: '1A3iYY4c3dkgNYGewzYzr7EsqfBuWXibGo',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149767',
    address: '3GAUBtrTtWp1D9yeXgr3wMg8B599QHa5m5',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149768',
    address: '3HJN4jRa4mdfkey9JR9jUhr86yPwL86A3C',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149769',
    address: '1EuUMPBCZtSd5pVVFEqmRqUSfU1qy6ASuL',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149770',
    address: '1Pu1nAW7kCoSMThMs8QcpM8JxuByQDZgH',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149771',
    address: '3QnWE5GVfQu3wVav91RuFkqip4Ti4NWqAY',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149772',
    address: '1CNbhgxGRZvsWnEHotfXge7k2E1UPzBDC7',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149773',
    address: '3HSZc4BLnQBznjSq7JvXgqNCZUUs3M9fZz',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149774',
    address: '37dDBCexFPraKW4jGSqkE3NyG52YeZQbJx',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149775',
    address: '1H8sDTTgJPBKw83EBZDLhXvetCbxZUMMZM',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149776',
    address: '1BvJRBRp9ZZ6zLyuZaZsV7g3xP6JokdZQW',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149777',
    address: 'bc1q237mvl0heyw0r38wd3xz8h5mar96rrwpams8pp',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149778',
    address: '34dxZvijpBM1YkPybczbQ7DuGuKAnULdfS',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149779',
    address: '1GkLN7DbA9mAtHNzQWNPANcdWbefaz4Gzm',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149780',
    address: '13hfsQm6oCaDZehfYBSMFiJVAi1jsL6sQd',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149781',
    address: '1Sf6e4xQv8muMZqYPTdRFf3e5o5eWcg9F',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149782',
    address: 'bc1qj6j6p0jdefl6pvdzx3kx8245yy5mz6q4luhzes',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149783',
    address: '1B3u21itzjgKtm7QsNQNCBpSkwzzeDHqrW',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149784',
    address: '3JhPsVV3KnL9dBYGSZALS9EbrLr97R865a',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149785',
    address: 'bc1qqf8kcc9m57xjqcvsvuf989nnl48ve6d2s24cx3',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149786',
    address: '1HuYfoEwsfHgZiRhbhJrCd5ST3iksa8KEx',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149787',
    address: '1J9wJH2bamZVxscXAvoDH4jvtGKb7sYFDm',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149788',
    address: '34WWXwFKAsXL9zYxbeNPaPV6vDamkjQLUo',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149789',
    address: '3PDmRwotTkRAFRLGTUrucCERp2JdM1q4ar',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149790',
    address: '3AFcE2mbSSndcpYFgHoExSmjUc26ef2gQh',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149791',
    address: '3P6PzdfETr4275Gn3veLkCyDxA1jV8fHKm',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149792',
    address: '3HRExd8GKFskZC5inmVcpiyy9UWG7FVa6o',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149793',
    address: '3MP7yBGSW2gkXVRE8S84T2j4KVgPh3rEzv',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149794',
    address: '1K2fmE9hfhbRNSZoBvCBWZAvsS5idTUxBG',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149795',
    address: '3ES6pqCueDPCnC4hCqhhYuey6gyiRJZw6E',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149796',
    address: '3KvBX3jo69Qn8jHy44M33RYoeYcf8DdRBD',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149797',
    address: '3K26aMKmnrv97Pj6YiFcqiXk2LxeHfhnG3',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149798',
    address: '3BWP6ZQAhc4j5wR1b95zJAthJEFvhdees7',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149799',
    address: '3JuSgFrwnrNfuhvR4GpWAPmeJVot4xrEae',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149800',
    address: '1DKGRGJXGNLAtTeFb9SNPNHtrkZ87q7qKi',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149801',
    address: '361AkMKNNWYwZRsCE8pPNmoh5aQf4V7g4p',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149802',
    address: '33fWcMdmsB2Ey4CEbVWbjGFkuevBSyP9nG',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '149803',
    address: '35aTjkBh4yeTypJsi9nuTdoMKHTsawKVgX',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'HYDRA MARKET',
    sanction_uid: '36216'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151497',
    address: '3K35dyL85fR9ht7UgzPfd1gLRRXQtNTqE3',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151498',
    address: '3Q5dGfLKkWqWSwYtbMUyc8xGjN5LrRviK4',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151499',
    address: '3EPqGUw2q89pwPZ1UF8FJspE2AyojSTjdu',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151500',
    address: '3LhnVMcBq4gsR7aDaRr9XmUo17CuYBV4FN',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151501',
    address: '3F6bbvS1krsc1qR8FsbTDfYQyvkMm3QvmR',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151502',
    address: '3JHMz3mTna1gVCZSPp8NgRFiY7phkv5mA8',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151503',
    address: '32DaxSzUhLBHY2WGSWQYiBSHnRsfQZrrRp',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151504',
    address: '3MTRvM5QrYZHKo8gh5qKcrPK3RLjxcDCZE',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151505',
    address: '34pFGsSYbWEritXncW9unZtQQE9dKSvKku',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151506',
    address: '38ncxqt932N9CcfNfYuHGZgCyR85hDkWBW',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151507',
    address: '3F6bbvS1krsc1qR8FsbTDfYQyvkMm3QvmR',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151508',
    address: '3MD3riFB6U8PykypF6qkvSj8R2SGdUDPn3',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151509',
    address: '3JUwAS7seL3fh5hxWh9fu3HCiEzjuQLTfg',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151510',
    address: '3EUjqe9UpmyXCFd6jeu69hoTzndMRfxw9M',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151511',
    address: '3QEjBiPzw6WZUL4MYMmMU6DY1Y25aVbpQu',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151512',
    address: '3N3YSDvp4cbhEgNGabQxTN39kEzJmwG8Ah',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151513',
    address: '3J19qffPT6mxQUcV6k5yVURGZtdhpdGr4y',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151514',
    address: '33KKjn4exdBJQkTtdWxqpdVsWxrw3LareG',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151515',
    address: '3GSXNXzyCDoQ1Rhsc7F1jjjFe7DGcHHdcM',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151516',
    address: '3QJyT8nThEQakbfqgX86YjCK1Sp9hfNCUW',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151582',
    address: '35hh9dg3wSvUJz9vFk1FsezLE5Fx3Hudk2',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151583',
    address: '3NDzzVxiLBUs1WPvVGRfCYDTAD2Ua2PvW4',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151584',
    address: '3DCCgmyKozcZkFBzYb1A2x8abZCpAUTPPk',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151585',
    address: '3MvQ4gThF4mmuo49p4dBNchcmFHBRZnYfx',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151586',
    address: '3FBgeJdhiBe22UoSpp51Vd8dPHVa2A4wZX',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151587',
    address: '3HQDRyzwm82MFmLWtmyikDM9JQEtVT6vAp',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151588',
    address: '31t4nEpcwyQJT1VuXdAoQZTT5givRDPsNP',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151589',
    address: '39AALn7eTjdPzLb99hHhD6F7J8QWB3R2Rd',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151590',
    address: '3LDbNuDkKmLae5r3a5icPA5CQg2Y8F7ogW',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151591',
    address: '3JLyyLbwciWAC6re87D7mRknXakR4YbnUd',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151592',
    address: '3ANWhUnHujdwbw2jEuGSRH6bvFsD9BqEy9',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151593',
    address: '32fbAZMTaQxNd2fAue1PgsiPgWfcsHBQQt',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151594',
    address: '3HupEUfKmMhvhXqf8TMoPAyqDcRC1kpe65',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151595',
    address: '34kEYgpijvCmjvahRXXQEnBH76UGJVx2wg',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151596',
    address: '3GYbbYkvqvjF5oYhaKCgQYCvcVE1JENk6J',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151597',
    address: '3BazbaTP8ELJUEfPBV9z5HXEdgBziV9p7W',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151598',
    address: '3GMfGEDYMTq9G8dEHet1zLtUFJwYwSNa3Y',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151599',
    address: '38LjCapRrJEW7w2zwbyS15P9D9UGPjWS44',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151600',
    address: '36XqYWGvUQwBrYLRVuegN4pJJJSPWL1WEu',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151601',
    address: '37g6WgqedzZx6nx51tYgssNG8Hnknyj5nL',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151602',
    address: '3QAdoc1rDCt8dii1GVPJXvvK6CEJLzCRZw',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151603',
    address: '32PsiT8itBrEF84ebdaF82yBUEcz5Wc6uY',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151604',
    address: '3B4G1M8eF3cThbeMwhEWkKzczw9QoNTGak',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151605',
    address: '34ETiHfQWEYFCCaXmEeQWVmhFH5vz2JMvd',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151606',
    address: '3PyzSbFj3hbQQjTzDzyLSgvFVDjB7yw4Cj',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '151607',
    address: '15PggTG7YhJKiE6B16vkKzA1YDTZipXEX4',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'BLENDER.IO',
    sanction_uid: '37070'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '153723',
    address: '1H939dom7i4WDLCKyGbXUp3fs9CSTNRzgL',
    program_list: [
      'CYBER2',
      'IFSR',
      'IRGC'
    ],
    sanction_name: 'KHATIBI AGHADA',
    sanction_uid: '38419'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '153724',
    address: 'bc1q3y5v2khlyvemcz042wl98dzflywr8ghglqws6s',
    program_list: [
      'CYBER2',
      'IFSR',
      'IRGC'
    ],
    sanction_name: 'KHATIBI AGHADA',
    sanction_uid: '38419'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '153725',
    address: 'bc1qx3e2axj3wsfn0ndtvlwmkghmmgm4583nqg8ngk',
    program_list: [
      'CYBER2',
      'IFSR',
      'IRGC'
    ],
    sanction_name: 'KHATIBI AGHADA',
    sanction_uid: '38419'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '153731',
    address: '1H939dom7i4WDLCKyGbXUp3fs9CSTNRzgL',
    program_list: [
      'CYBER2',
      'IFSR',
      'IRGC'
    ],
    sanction_name: 'NIKAEEN RAVARI',
    sanction_uid: '38420'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '153732',
    address: 'bc1qsxf77cvwcd6jv6j8d8j3uhh4g0xqw4meswmwuc',
    program_list: [
      'CYBER2',
      'IFSR',
      'IRGC'
    ],
    sanction_name: 'NIKAEEN RAVARI',
    sanction_uid: '38420'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '153733',
    address: 'bc1q9lvynkfpaw330uhqmunzdz6gmafsvapv7y3zty',
    program_list: [
      'CYBER2',
      'IFSR',
      'IRGC'
    ],
    sanction_name: 'NIKAEEN RAVARI',
    sanction_uid: '38420'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '153734',
    address: 'bc1qpaly5nm7pfka9v92d6qvl4fc2l9xzee8a6ys3s',
    program_list: [
      'CYBER2',
      'IFSR',
      'IRGC'
    ],
    sanction_name: 'NIKAEEN RAVARI',
    sanction_uid: '38420'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '154510',
    address: 'bc1ql7dlyh8xz6tpqk92vztrhqh88dmjvcwrmsemrm',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'TASK FORCE RUSICH',
    sanction_uid: '38665'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '155028',
    address: 'bc1q2lpgjntr348pfvxhfy33ehmdzy3gmx8w4052z6',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'TASK FORCE RUSICH',
    sanction_uid: '38665'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156413',
    address: '1DbvK8P6imBuLcwh2Vruis4xsUb8YAwJQF',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156414',
    address: '1G6DuwDKNHiUWqks2Lgu44cesu7ffFbLK7',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156415',
    address: '3AQSmMk5n3c6TKEg9B2WyzYAPm33gJJAA4',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156416',
    address: '129zKFLoVad9JtxSmDKeJoLCsjhGR7b3vr',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156417',
    address: '12YyR9EpvHxBjjKjTWqfKqeyoWnvcraxpW',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156419',
    address: '1KctQENEX5QkQMpnMC3Zh9yRAzkMBLpPcr',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156420',
    address: '3HqA7i3ttECLvgqvq69HNxxUP5BL7Z5YgA',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156421',
    address: '1G9A8WRjGXdnYY4TNEVRrcaHsMtana4ncF',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156422',
    address: '1Js6goCey2NaqPQptiLANLQGuk4d6mowjP',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156423',
    address: '13RH4JaFhaCxDGPyYE9emjp2aDxdX18uBA',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156424',
    address: '1FE2cuvkq8n5VGwj5hi8YYQxskwJpovPyV',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156425',
    address: '1DJoEMvp95yJYWyxAZy8DDBzuvjnrTVrsN',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156426',
    address: '1N6XqSf3ULpNjko9LrJmHudRoLitjwkETN',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156427',
    address: 'bc1qwa6zu6qhl6wqnlxp642vcf89nptsassle25ulf',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156428',
    address: '386wa1UM6nA798AWNh64jdrejZyedeXgUN',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156429',
    address: '15UdZbmGPa2LatD3abtGpphgkHLFWftV4R',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156433',
    address: '16tByCYzxuWiN8kF9FrK9jJy6eQYLVkQ1i',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156435',
    address: '1NpHuti9NSM9fVTXLkvSDU4AnhqGQ5N53d',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'PEIJNENBURG',
    sanction_uid: '39585'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156475',
    address: '1LpYKb3SXZPve9hsH2QEJZFX279wJVGowi',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156478',
    address: '15uqdxqNXQwVf5H7yZPz4TmEGeSccCwdor',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156480',
    address: '1FjubFHV4mpYjBmvjsEhZssyiiA4TNmnm2',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156482',
    address: '1LAh7PQwpd1uGiLHae5C5Xz9QXse3y2phq',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156484',
    address: '15yqWQ4sqr7jzCwDtZ3U1KaCa8WMEy7Mm2',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156485',
    address: '19GrL5jnUkGmHXVcraB1Etv5rXCANeLWpq',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156487',
    address: '39NG2LcGRHXxSr1irpEVnJMw4ydL231sEn',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156489',
    address: '3He6EyDaCUgmdr4GXqhxbeTQukaGLCByU2',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156491',
    address: '12NpCkhddSNiDkD9rRYUCHsTT9ReMNiJjG',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156492',
    address: '32jgFkZsTEjMFaBvxJnYvJEeTNKTmq5b32',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156497',
    address: '1Hpj6qm9i7nMF3VkKfBFtjhEDpEjxHWvgv',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156499',
    address: '194xmrZA53UBsZau2PnJLdmVVW9m5feeS',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156501',
    address: '361NP7YcBPQ4KkLT3Y2QZeDEV4M3yi65Ar',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156504',
    address: '1LuDiMd95Df4i2bcvrfw47t2GKpLLXAQMZ',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156506',
    address: '3A1HH3PseYMkh2nSrBb4kkVt3815kUNVVC',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156507',
    address: '1F317n2eJEMaEMGiwCqtd5XCU3wF7jzPEW',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156508',
    address: '3HWjh69cVQvcPeLWVCyVmXEq72nyDSj5zP',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156509',
    address: '1r6S9vpUZPS5rb6gSdwV2bvSFcN3uSq4q',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156510',
    address: '3Jpf9B5P8cvEKSSGp9cES3Upbms8VRnXUb',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156511',
    address: '3EL5vcYeu1cnivLtR7tnAX3bBirr9ATNAL',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156512',
    address: '1LBQd4ZxtQYYsDWrCzK4uMxHBJVxmyzs3M',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156514',
    address: '1LQV6yUBcfTjAWvFu3XPhdTgjqihss7i1z',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156519',
    address: '1MiQRekg4BatJ12qbiSGnNakLLd8xbLMCG',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156520',
    address: '12mNKr2YP4M3CEQvCvVqZsvxuCG47LHMu1',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156521',
    address: '1J6cgUVEZRKyJhpXJgHWX7YmzkdnHRaLhF',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156524',
    address: '3PUmTuVAW3LkKg53FZ7F97VDBitW4ugwnM',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156525',
    address: '3H4qaWi5DS6FMwyZrG9xRRud3Qc5dUVn2U',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156526',
    address: '13ViCDZyJxxv5cZzpDDsE7aDQ3Y552zpAH',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156527',
    address: '1Juv2Ks3jJFUes8jEGxwgt6T6csBRQmmRw',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156528',
    address: '35vypiSvQsxRiT3YZzGRGVaduUSx67ysZb',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156531',
    address: '3LLUnf3ezw6mCbQ2zCZmGu5rZULzkhxQi7',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156536',
    address: '3QrukkUiBrn23rFUKUgasNd1wYWNk7WdSV',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156540',
    address: '3B3vmabBbeDRnVrjvvq3hm85zVB4v5bWFC',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156544',
    address: '31nadacWrgPeAQxKRMabhn3fPhnhi3hjKa',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156547',
    address: '343w3Xh64q5UpgpvAPqmsUzxrknde8PQHb',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '156549',
    address: '1C7RpJNE19HgefzWVCSaUqRTHAwGAFkbYV',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'GRIMM',
    sanction_uid: '39593'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '157928',
    address: 'bc1qfg4gfg0y6t6xjnpmlhuwx5k0wlw6nmfzxn2psc',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'ZIMENKOV',
    sanction_uid: '40488'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '159339',
    address: '3PKiHs4GY4rFg8dpppNVPXGPqMX6K2cBML',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'WANG',
    sanction_uid: '41297'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161067',
    address: '1986rYHckYbJpGQJy6ornuMyD2N5MTqwDt',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161068',
    address: '125W5ek3DT6Zqy5S2iPt4FHQdNMCbZA3FU',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161069',
    address: '1Kc6egXevyLEaeTxLFA1Zyw7GuhCN8jQtt',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161070',
    address: '12w6v1qAaBc4W8h8C2Cu5SKFaKDSv3erUW',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161071',
    address: '1CPJak9ZyddbawMGJPyEhCiJLXXb4sYv8N',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161072',
    address: '1DJoVLgn1foJHHngduRPJvRbwpaFEKxvxd',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161073',
    address: '15kZobLkD6HZgEECtz4oS2Vz21XHTnNfSg',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161074',
    address: '15qyVrZvvVGvB7GWiAZ82TNcZ6QWMKu3kx',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161075',
    address: '12YCfVAEzkEZXBYhUTyJJaRkgMXiFxJgcu',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161076',
    address: '1MkCnCa9agS5t6V1B15bzusBgYECB4LfWp',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161077',
    address: '1NuBZQXJPyYQGfoBib8wWBDpZmbtkJa5Ba',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161078',
    address: '14rjAD8ZP5xaL571cMRE98qgxxbg1S8mAN',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161079',
    address: '18yWCu6agTxYqAerMxiz9sgHrK3ViezzGa',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161080',
    address: '12jVCWW1ZhTLA5yVnroEJswqKwsfiZKsax',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161081',
    address: '1J378PbmTKn2sEw6NBrSWVfjZLBZW3DZem',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161082',
    address: '18aqbRhHupgvC9K8qEqD78phmTQQWs7B5d',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '161083',
    address: '16ti2EXaae5izfkUZ1Zc59HMcsdnHpP5QJ',
    program_list: [
      'DPRK3'
    ],
    sanction_name: 'WU',
    sanction_uid: '42496'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162809',
    address: '1D6gG9iKEhPitTcWRJiniuj1jYM2hNeAfJ',
    program_list: [
      'DPRK4'
    ],
    sanction_name: 'KIM',
    sanction_uid: '43377'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162814',
    address: '1FCNgfZWpYMeYhy9t18AAkTBu8AsdoAc1Z',
    program_list: [
      'DPRK4'
    ],
    sanction_name: 'KIM',
    sanction_uid: '43377'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162845',
    address: 'bc1q4namcagg5wljs0u20z6h2sqgsq4q5lts8rt2rr',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162846',
    address: 'bc1qdpazd6smrkq5hmw6lupq98za2fqtgmq3azv3av',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162847',
    address: 'bc1qwz0l2ceddckwdy5rh6zyrm3x4ha6gn5f2da5zg',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162848',
    address: 'bc1qw8evftpgc8wsmkemd8yl5fg2husza5z802xaym',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162849',
    address: 'bc1qv4krhj2qmpd9qz9xj9nhvj99fq8s9xsw05d485',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162850',
    address: 'bc1qu5vngdtcx8nc9d68pq8nv7pzcjrswsy87s66gk',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162851',
    address: 'bc1qtsl3ufenrv3zgrgm9z8xarcx22x8mfztuartyn',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162852',
    address: 'bc1qtrrfhr0f3ufsrjxfv8a7p3yuqj0spe4cm6vaws',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162853',
    address: 'bc1qte9ret332gwrk6e7vqc87d807npzvdj5savg4h',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162854',
    address: 'bc1qtdupwe722vcc5e0vh94cgwfs0ep4gzwyfsf75q',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162855',
    address: 'bc1qnykkrlk67f9kdqvzyw2ndu3xmef5z2e52886yl',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162856',
    address: 'bc1qllmlvy5u038yvwywu803p53g8udcm8w7k4qxu9',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162857',
    address: 'bc1qlfpg2xn39u580cmwq6rymt8jdhcmj8520jhgh0',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162858',
    address: 'bc1ql7rnd70aejdxt3f9fzdlfazjlc9hvdmut8ad8s',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162859',
    address: 'bc1ql526s72gycmvq7hek6j3tuwwmcpv4rgs0auxu7',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162860',
    address: 'bc1qh3lw22uqwrywr8lpun20q2ma528a4yqmgf3uqp',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162861',
    address: 'bc1qgffxa65gr579tsz55n87pal2a777ygzg69d2yz',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162862',
    address: 'bc1qedvcgh32dud85yt7fu6s7qavthlh38gtwa7rhx',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162863',
    address: 'bc1qau9pmgc8l6rxpdwwap3fd6zprh5yp9mpe9jl0h',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162864',
    address: 'bc1qakycg2zp8hydg95lc9cheumpa9yfpdeyrqqh5f',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162865',
    address: 'bc1q9ua9ypl4dhj0zut5kzasj5c2kxclhh8v2k9djd',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162866',
    address: 'bc1q8q7z3kt37z6jalv5ujung5lem6pzlk9r3kt66k',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162867',
    address: 'bc1q8pw85s83mdx2f3rfu64mmfd9wexqu2y856arwp',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162868',
    address: 'bc1q7xfqqw9htr88t7vafg80p4qrlpjfyaps452x5g',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162869',
    address: 'bc1q7hhdygx05kyfyzjku2u7lywvx5pgyng6a0nefp',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162870',
    address: 'bc1q6w463k7mhsgguwgqtcratm4vm42rncwhvvkeck',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162871',
    address: 'bc1q68uswkjvu7nj7mhrvfzkx7cm6u5s9puvpm5dc2',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162872',
    address: 'bc1q5zd0cwzd09k9r8xfk68sn5ytqp8f5aae80yfsm',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162873',
    address: 'bc1q49ax787wv0mnn8wjgp3sx772qz7eun822rkv5k',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162874',
    address: 'bc1q3ael5my37nklgnqcrkwmnndfx9qdnp67j0739c',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162875',
    address: 'bc1q362njxy39gnwrvj7zytn84ax39fwnhvk7n2999',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162876',
    address: 'bc1q2jys00x2rgdkm3xnewuucqacytu0a7echupu8y',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162877',
    address: 'bc1q05aktddf9ce4p7hh3stgsf253m4vweu7nkhtmw',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162878',
    address: 'bc1qtywfzxx6snut2mdrum8dyr5nnd5qhqd29wmvqt',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162881',
    address: 'bc1qrc2gchg2fmxua5u7twu4luv5p9twmny4jjmg9x',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162884',
    address: 'bc1q9ws2gcq7uumm4mk3l9xezwve7w5tmcs5js5cup',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162885',
    address: 'bc1qh33xtpjqhgysq5xlmjzkm28uewj08885n95drr',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162886',
    address: 'bc1qe8wclszdtshkjk7gph57crc72vpp9rylujgwa5',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162888',
    address: 'bc1q2q8uxjznmurg363dvd98xjg54mrr7z6mw9t825',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162889',
    address: 'bc1qhvzl5w99m458nm7sc6hwf5qfhxndw28sgtatk8',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162890',
    address: 'bc1qavwamr74qlzj8txy6jaxqnpym9062h090x6kz4',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162891',
    address: 'bc1qe9lz50jq0a5pmtry0h3ekng3kjdg09vejg7355',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162893',
    address: 'bc1qup656lpfqfckhl580kwf62thmn5azmj2pal0sz',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162894',
    address: 'bc1qa2xr7dmz5lztplp9yfp7k382nf4ma8gwrl7zgg',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162895',
    address: 'bc1qrskwdw9unhlkt87ltcqq2d5pn9s6w2f35gz3z6',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '162896',
    address: '1NaRX1GZgtZ7E8iXo8YUdTtnb8rAK5QFJa',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'WANG',
    sanction_uid: '43421'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '164252',
    address: 'bc1qq7p0es3dv5hcynjjf40f2xjjr6qp5py47d2f6n847vduuq9gvnyq7y9ecd',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SINBAD',
    sanction_uid: '44437'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '164253',
    address: '1JHdQHkBZiim1cb4hyUh2PbzEbbg6z2TrF',
    program_list: [
      'CYBER2',
      'DPRK3'
    ],
    sanction_name: 'SINBAD',
    sanction_uid: '44437'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165597',
    address: '1Ljk8RNNabkZ9bfDYQBn98XfFozJhTjqcZ',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'ZHDANOVA',
    sanction_uid: '45188'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165598',
    address: '3685sEusmTwZBiKJ4cgV73EAhpVD1nbgbe',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'ZHDANOVA',
    sanction_uid: '45188'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165599',
    address: '39p8qWp1bkBNhi4vPpFTetKPtH7goqNDZf',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'ZHDANOVA',
    sanction_uid: '45188'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165742',
    address: '3B7S6zrgxQVQUHTU8wstM23tB9afE7ojuX',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'SHEN',
    sanction_uid: '45312'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165750',
    address: 'bc1qardcxz845jw83vgfvcmewhuxa0ag9gchjwmcfd',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'VALERIAN LABS, INC.',
    sanction_uid: '45314'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165805',
    address: '3NNcbBcMZokPB2JC2dxYuZrpgcetvyGeJn',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'WANG',
    sanction_uid: '45349'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165810',
    address: '38TftW1heYPqvKbiAhT4ttNBqkUPpooXad',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'XIA',
    sanction_uid: '45350'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165811',
    address: 'bc1qkfqh5p2qsakseg5gnwen6zh5xf3elmku2xaup29mw3l0wnncy3es880dss',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'XIA',
    sanction_uid: '45350'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165867',
    address: '3NU9zkD8CCVGVmYnNNSN7PbU9sSFQBm5UV',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'ZHANG',
    sanction_uid: '45391'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165920',
    address: '1MLPqwaFFUBZePTjpR3nxRoK19Cv9mPCc7',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'WANG',
    sanction_uid: '45404'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165923',
    address: '3HePkztPU6UsdENxnyQHFrdZA6eVKeMtvz',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'WANG',
    sanction_uid: '45404'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '165924',
    address: 'TUCsTq7TofTCJRRoHk6RvhMoS2mJLm5Yzq',
    program_list: [
      'ILLICIT-DRUGS-EO14059'
    ],
    sanction_name: 'WANG',
    sanction_uid: '45404'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '166233',
    address: '19D1iGzDr7FyAdiy3ZZdxMd6ttHj1kj6WW',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'BUY CASH MONEY AND MONEY TRANSFER COMPANY',
    sanction_uid: '45678'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '170192',
    address: '3Q8H2ZWMtc4R1M3mkmhnTjCoYKTeCFigDP',
    program_list: [
      'SDGT'
    ],
    sanction_name: 'GAZA NOW',
    sanction_uid: '47635'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '169149',
    address: '18gaXypKj9M23S2zT9qZfL9iPbLFM372Q5',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'SUNGATOV',
    sanction_uid: '47680'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '169173',
    address: 'bc1q5jqgm7nvrhaw2rh2vk0dk8e4gg5g373g0vz07r',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KONDRATIEV',
    sanction_uid: '47682'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '169174',
    address: '32pTjxTNi7snk8sodrgfmdKao3DEn1nVJM',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KONDRATIEV',
    sanction_uid: '47682'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '169175',
    address: '15cRqR3TXS1JehBGWERuxFE8NhWZzfoeeU',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KONDRATIEV',
    sanction_uid: '47682'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '169176',
    address: '1A7SKE2dQtezLktCY8peLsdAtkqxV9r1dC',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KONDRATIEV',
    sanction_uid: '47682'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '169177',
    address: 'bc1q8ew45w2agdffrnwp6adt2gqrc9n4mkev9ns29c',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KONDRATIEV',
    sanction_uid: '47682'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '169178',
    address: 'bc1qagp0gy58v8hqvw4p2wsphcxg067rrppp45hexr',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KONDRATIEV',
    sanction_uid: '47682'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '169179',
    address: 'bc1qn6segn8km4nfdp9vueu6msfjsaxaqgun9h60n9',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KONDRATIEV',
    sanction_uid: '47682'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '169181',
    address: 'bc1qx9upga7f09tsetqf78wa3qrmcjar58mkwz6ng6',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KONDRATIEV',
    sanction_uid: '47682'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '170746',
    address: '13fhnkmpBBWXUQucJd6efWvXdEj78DKavk',
    program_list: [
      'RUSSIA-EO14024'
    ],
    sanction_name: 'OKO DESIGN BUREAU',
    sanction_uid: '48432'
  },
  {
    origin: 'OFAC',
    currency: 'XBT',
    sanction_id_uid: '170896',
    address: 'bc1qvhnfknw852ephxyc5hm4q520zmvf9maphetc9z',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KHOROSHEV',
    sanction_uid: '48603'
  },
  {
    origin: 'OFAC',
    currency: 'XMR',
    sanction_id_uid: '136454',
    address: '5be5543ff73456ab9f2d207887e2af87322c651ea1a873c5b25b7ffae456c320',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KARASAVIDI',
    sanction_uid: '29585'
  },
  {
    origin: 'OFAC',
    currency: 'XMR',
    sanction_id_uid: '144781',
    address: '884Bz8UH63aYsjVdkfWfScRYWZGGNbjFL7pztqvWNSrtYT4reFSwyvkCj9KEGUtheHhhMUj87ciTBFyzoesrMJ4L1FvSoxL',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'XMR',
    sanction_id_uid: '144782',
    address: '49HqitRzdnhYjgTEAhgGpCfsjdTeMbUTU6cyR4JV1R7k2Eej9rGT8JpFiYDa4tZM6RZiFrHmMzgSrhHEqpDYKBe5B2ufNsL',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'NPWMD'
    ],
    sanction_name: 'SOUTHFRONT',
    sanction_uid: '31212'
  },
  {
    origin: 'OFAC',
    currency: 'XRP',
    sanction_id_uid: '144746',
    address: 'rnXyVQzgxZe7TR1EPzTkGj2jxH4LMJYh66',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'CHATEX',
    sanction_uid: '33854'
  },
  {
    origin: 'OFAC',
    currency: 'XVG',
    sanction_id_uid: '138294',
    address: 'DFFJhnQNZf8rf67tYnesPu7MuGUpYtzv7Z',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'RAZA',
    sanction_uid: '30520'
  },
  {
    origin: 'OFAC',
    currency: 'ZEC',
    sanction_id_uid: '136473',
    address: 't1g7wowvQ8gn2v8jrU1biyJ26sieNqNsBJy',
    program_list: [
      'CYBER2'
    ],
    sanction_name: 'KARASAVIDI',
    sanction_uid: '29585'
  },
  {
    origin: 'OFAC',
    currency: 'ZEC',
    sanction_id_uid: '136632',
    address: 't1WSKwCDL1QYRRUrCCknEs5tDLhtGVYu9KM',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848'
    ],
    sanction_name: 'ANDREYEV',
    sanction_uid: '29703'
  },
  {
    origin: 'OFAC',
    currency: 'ZEC',
    sanction_id_uid: '139590',
    address: 't1MMXtBrSp1XG38Lx9cePcNUCJj5vdWfUWL',
    program_list: [
      'CYBER2',
      'ELECTION-EO13848',
      'UKRAINE-EO13661'
    ],
    sanction_name: 'ASSOCIATION FOR FREE RESEARCH AND INTERNATIONAL COOPERATION',
    sanction_uid: '31164'
  }
];
