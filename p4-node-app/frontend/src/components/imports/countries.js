// some countries are still missing
let countries = [
  { country: 'Select Country', value: '' },
  { country: 'Afghanistan', value: 'AF' },
  { country: 'Åland Islands', value: 'AX' },
  { country: 'Albania', value: 'AL' },
  { country: 'Algeria', value: 'DZ' },
  { country: 'American Samoa', value: 'AS' },
  { country: 'Andorra', value: 'AD' },
  { country: 'Angola', value: 'AO' },
  { country: 'Anguilla', value: 'AI' },
  { country: 'Antarctica', value: 'AQ' },
  { country: 'Antigua and Barbuda', value: 'AG' },
  { country: 'Argentina', value: 'AR' },
  { country: 'Armenia', value: 'AM' },
  { country: 'Aruba', value: 'AW' },
  { country: 'Australia', value: 'AU' },
  { country: 'Austria', value: 'AT' },
  { country: 'Azerbaijan', value: 'AZ' },
  { country: 'Bahamas', value: 'BS' },
  { country: 'Bangladesh', value: 'BD' },
  { country: 'Barbados', value: 'BB' },
  { country: 'Belarus', value: 'BY' },
  { country: 'Bahrain', value: 'BH' },
  { country: 'British Indian Ocean Territory', value: 'IO' },
  { country: 'Cocos (Keeling) Islands', value: 'CC' },
  { country: 'Christmas Island', value: 'CX' },
  { country: 'Falkland Islands (Malvinas)', value: 'FK' },
  { country: 'Faroe Islands', value: 'FO' },
  { country: 'French Guiana', value: 'GF' },
  { country: 'French Polynesia', value: 'PF' },
  { country: 'French Southern Territories', value: 'TF' },
  { country: 'Gibraltar', value: 'GI' },
  { country: 'Greenland', value: 'GL' },
  { country: 'Guadeloupe', value: 'GP' },
  { country: 'Guam', value: 'GU' },
  { country: 'Guernsey', value: 'GG' },
  { country: 'Heard Island and McDonald Islands', value: 'HM' },
  { country: 'Holy See', value: 'VA' },
  { country: 'Hong Kong', value: 'HK' },
  { country: 'Macao', value: 'MO' },
  { country: 'Martinique', value: 'MQ' },
  { country: 'Mayotte', value: 'YT' },
  { country: 'Montserrat', value: 'MS' },
  { country: 'New Caledonia', value: 'NC' },
  { country: 'Niue', value: 'NU' },
  { country: 'Norfolk Island', value: 'NF' },
  { country: 'Northern Mariana Islands', value: 'MP' },
  { country: 'Pitcairn', value: 'PN' },
  { country: 'Réunion', value: 'RE' },
  { country: 'Saint Barthélemy', value: 'BL' },
  { country: 'Saint Helena, Ascension and Tristan da Cunha', value: 'SH' },
  { country: 'Saint Martin (French part)', value: 'MF' },
  { country: 'Saint Pierre and Miquelon', value: 'PM' },
  { country: 'Sint Maarten (Dutch part)', value: 'SX' },
  { country: 'Tokelau', value: 'TK' },
  { country: 'Turks and Caicos Islands', value: 'TC' },
  { country: 'Virgin Islands (British)', value: 'VG' },
  { country: 'Virgin Islands (U.S.)', value: 'VI' },
  { country: 'Wallis and Futuna', value: 'WF' },
  { country: 'Western Sahara', value: 'EH' },
  { country: 'Ireland', value: 'IE' },
  { country: 'Isle of Man', value: 'IM' },
  { country: 'Israel', value: 'IL' },
  { country: 'Italy', value: 'IT' },
  { country: 'Jamaica', value: 'JM' },
  { country: 'Japan', value: 'JP' },
  { country: 'Jersey', value: 'JE' },
  { country: 'Jordan', value: 'JO' },
  { country: 'Kazakhstan', value: 'KZ' },
  { country: 'Kenya', value: 'KE' },
  { country: 'Kiribati', value: 'KI' },
  { country: "Korea (Democratic People's Republic of)", value: 'KP' },
  { country: 'Korea, Republic of', value: 'KR' },
  { country: 'Kuwait', value: 'KW' },
  { country: 'Kyrgyzstan', value: 'KG' },
  { country: "Lao People's Democratic Republic", value: 'LA' },
  { country: 'Latvia', value: 'LV' },
  { country: 'Lebanon', value: 'LB' },
  { country: 'Lesotho', value: 'LS' },
  { country: 'Liberia', value: 'LR' },
  { country: 'Libya', value: 'LY' },
  { country: 'Liechtenstein', value: 'LI' },
  { country: 'Lithuania', value: 'LT' },
  { country: 'Luxembourg', value: 'LU' },
  { country: 'Macao', value: 'MO' },
  { country: 'Madagascar', value: 'MG' },
  { country: 'Malawi', value: 'MW' },
  { country: 'Malaysia', value: 'MY' },
  { country: 'Maldives', value: 'MV' },
  { country: 'Mali', value: 'ML' },
  { country: 'Malta', value: 'MT' },
  { country: 'Marshall Islands', value: 'MH' },
  { country: 'Martinique', value: 'MQ' },
  { country: 'Mauritania', value: 'MR' },
  { country: 'Mauritius', value: 'MU' },
  { country: 'Mayotte', value: 'YT' },
  { country: 'Mexico', value: 'MX' },
  { country: 'Micronesia (Federated States of)', value: 'FM' },
  { country: 'Moldova, Republic of', value: 'MD' },
  { country: 'Monaco', value: 'MC' },
  { country: 'Mongolia', value: 'MN' },
  { country: 'Montenegro', value: 'ME' },
  { country: 'Montserrat', value: 'MS' },
  { country: 'Morocco', value: 'MA' },
  { country: 'Mozambique', value: 'MZ' },
  { country: 'Myanmar', value: 'MM' },
  { country: 'Namibia', value: 'NA' },
  { country: 'Nauru', value: 'NR' },
  { country: 'Nepal', value: 'NP' },
  { country: 'Netherlands', value: 'NL' },
  { country: 'New Caledonia', value: 'NC' },
  { country: 'New Zealand', value: 'NZ' },
  { country: 'Nicaragua', value: 'NI' },
  { country: 'Niger', value: 'NE' },
  { country: 'Nigeria', value: 'NG' },
  { country: 'Niue', value: 'NU' },
  { country: 'Norfolk Island', value: 'NF' },
  { country: 'North Macedonia', value: 'MK' },
  { country: 'Northern Mariana Islands', value: 'MP' },
  { country: 'Norway', value: 'NO' },
  { country: 'Oman', value: 'OM' },
  { country: 'Pakistan', value: 'PK' },
  { country: 'Palau', value: 'PW' },
  { country: 'Palestine, State of', value: 'PS' },
  { country: 'Panama', value: 'PA' },
  { country: 'Papua New Guinea', value: 'PG' },
  { country: 'Paraguay', value: 'PY' },
  { country: 'Peru', value: 'PE' },
  { country: 'Philippines', value: 'PH' },
  { country: 'Pitcairn', value: 'PN' },
  { country: 'Poland', value: 'PL' },
  { country: 'Portugal', value: 'PT' },
  { country: 'Puerto Rico', value: 'PR' },
  { country: 'Qatar', value: 'QA' },
  { country: 'Réunion', value: 'RE' },
  { country: 'Romania', value: 'RO' },
  { country: 'Russian Federation', value: 'RU' },
  { country: 'Rwanda', value: 'RW' },
  { country: 'Saint Barthélemy', value: 'BL' },
  { country: 'Saint Helena, Ascension and Tristan da Cunha', value: 'SH' },
  { country: 'Saint Kitts and Nevis', value: 'KN' },
  { country: 'Saint Lucia', value: 'LC' },
  { country: 'Saint Martin (French part)', value: 'MF' },
  { country: 'Saint Pierre and Miquelon', value: 'PM' },
  { country: 'Saint Vincent and the Grenadines', value: 'VC' },
  { country: 'Samoa', value: 'WS' },
  { country: 'San Marino', value: 'SM' },
  { country: 'Sao Tome and Principe', value: 'ST' },
  { country: 'Saudi Arabia', value: 'SA' },
  { country: 'Senegal', value: 'SN' },
  { country: 'Serbia', value: 'RS' },
  { country: 'Seychelles', value: 'SC' },
  { country: 'Sierra Leone', value: 'SL' },
  { country: 'Singapore', value: 'SG' },
  { country: 'Sint Maarten (Dutch part)', value: 'SX' },
  { country: 'Slovakia', value: 'SK' },
  { country: 'Slovenia', value: 'SI' },
  { country: 'Solomon Islands', value: 'SB' },
  { country: 'Somalia', value: 'SO' },
  { country: 'South Africa', value: 'ZA' },
  { country: 'South Georgia and the South Sandwich Islands', value: 'GS' },
  { country: 'South Sudan', value: 'SS' },
  { country: 'Spain', value: 'ES' },
  { country: 'Sri Lanka', value: 'LK' },
  { country: 'Sudan', value: 'SD' },
  { country: 'Suriname', value: 'SR' },
  { country: 'Svalbard and Jan Mayen', value: 'SJ' },
  { country: 'Sweden', value: 'SE' },
  { country: 'Switzerland', value: 'CH' },
  { country: 'Syrian Arab Republic', value: 'SY' },
  { country: 'Taiwan, Province of China', value: 'TW' },
  { country: 'Tajikistan', value: 'TJ' },
  { country: 'Tanzania, United Republic of', value: 'TZ' },
  { country: 'Thailand', value: 'TH' },
  { country: 'Timor-Leste', value: 'TL' },
  { country: 'Togo', value: 'TG' },
  { country: 'Tokelau', value: 'TK' },
  { country: 'Tonga', value: 'TO' },
  { country: 'Trinidad and Tobago', value: 'TT' },
  { country: 'Tunisia', value: 'TN' },
  { country: 'Turkey', value: 'TR' },
  { country: 'Turkmenistan', value: 'TM' },
  { country: 'Turks and Caicos Islands', value: 'TC' },
  { country: 'Tuvalu', value: 'TV' },
  { country: 'Uganda', value: 'UG' },
  { country: 'Ukraine', value: 'UA' },
  { country: 'United Arab Emirates', value: 'AE' },
  {
    country: 'United Kingdom of Great Britain and Northern Ireland',
    value: 'GB',
  },
  { country: 'United States of America', value: 'US' },
  { country: 'Uruguay', value: 'UY' },
  { country: 'Uzbekistan', value: 'UZ' },
  { country: 'Vanuatu', value: 'VU' },
  { country: 'Venezuela (Bolivarian Republic of)', value: 'VE' },
  { country: 'Viet Nam', value: 'VN' },
  { country: 'Virgin Islands (British)', value: 'VG' },
  { country: 'Virgin Islands (U.S.)', value: 'VI' },
  { country: 'Wallis and Futuna', value: 'WF' },
  { country: 'Western Sahara', value: 'EH' },
  { country: 'Yemen', value: 'YE' },
  { country: 'Zambia', value: 'ZM' },
  { country: 'Zimbabwe', value: 'ZW' },
];

export default countries;
