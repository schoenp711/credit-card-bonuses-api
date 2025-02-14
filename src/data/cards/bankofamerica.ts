import { z } from "zod";

import { schemas } from "../../generated/api.client";
import { WEIGHTS } from "../weights";
export const BANK_OF_AMERICA_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Air France KLM",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.FLYING_BLUE,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://wwws.airfrance.us/information/flyingblue/carte-bancaire-partenaire",
    imageUrl: "/images/bankofamerica/air-france-klm.webp",
    credits: [],
    offers: [
      {
        amount: [
          { amount: 70_000 },
          { amount: 100, currency: "USD" },
        ],
        spend: 2000,
        days: 90,
        credits: [],
        url: "https://wwws.airfrance.us/information/flyingblue/carte-bancaire-partenaire",
        details: "Extra $100 is possible via dummy booking."
      },
    ],
    historicalOffers: [
      {
        amount: [
          { amount: 70_000 },
          { amount: 100, currency: "USD" },
        ],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Alaska Airlines",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.ALASKA,
    isBusiness: false,
    annualFee: 75,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.alaskaair.com/content/credit-card/visa-signature",
    imageUrl: "/images/bankofamerica/alaska-airlines.png",
    credits: [
      {
        value: 200,
        description: "Companion Fare",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [
          { amount: 70_000 },
          { amount: 100, currency: schemas.CurrenciesEnum.enum.USD },
        ],
        spend: 2000,
        days: 90,
        credits: [],
        url: "https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-card?requesttype=ICAO&campaignid=4062870",
      },
      {
        amount: [{ amount: 72_000 }],
        spend: 2000,
        days: 90,
        credits: [],
        url: "http://alaska72k.com/",
      },
    ],
    historicalOffers: [
      {
        amount: [
          { amount: 70_000 },
          { amount: 100, currency: schemas.CurrenciesEnum.enum.USD },
        ],
        spend: 2000,
        days: 90,
        credits: [],
        url: "https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-card?requesttype=ICAO&campaignid=4062870",
      },
      {
        amount: [{ amount: 72_000 }],
        spend: 2000,
        days: 90,
        credits: [],
        url: "http://alaska72k.com/",
      },
      {
        amount: [{ amount: 80_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Alaska Airlines Business",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.ALASKA,
    isBusiness: true,
    annualFee: 75,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.alaskaair.com/content/credit-card/visa-small-business-card",
    imageUrl: "/images/bankofamerica/alaska-airlines-business.png",
    credits: [
      {
        value: 50,
        description: "Free checked bag",
        weight: 0.5,
      },
      {
        value: 100,
        description: "Companion fee",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 2000,
        days: 90,
        credits: [],
        url: "https://www.alaskaair.com/content/credit-card/visa-small-business-card",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 2000,
        days: 90,
        credits: [],
        url: "https://www.alaskaair.com/content/credit-card/visa-small-business-card",
      },
      {
        amount: [{ amount: 70_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Customized Cash Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.bankofamerica.com/credit-cards/products/cash-back-credit-card/",
    imageUrl: "/images/bankofamerica/customized-cash-rewards.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/credit-cards/products/cash-back-credit-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Premium Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.BANK_OF_AMERICA,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.bankofamerica.com/credit-cards/products/premium-rewards-credit-card/",
    imageUrl: "/images/bankofamerica/_common-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/credit-cards/products/premium-rewards-credit-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Premium Rewards Elite",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.BANK_OF_AMERICA,
    isBusiness: false,
    annualFee: 550,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.bankofamerica.com/credit-cards/products/premium-rewards-elite-credit-card/",
    imageUrl: "/images/bankofamerica/_common-rewards-elite.png",
    credits: [
      {
        value: 300,
        description: "Incidental Airline Statement Credits",
        weight: 0.3,
      },
      {
        value: 150,
        description:
          "Annaul $150 streaming, delivery, fitness, and transit credit",
        weight: 0.8,
      },
      {
        value: 100,
        description: "$100 credit for Global Entry or TSA PreCheck",
        weight: WEIGHTS.PRECHECK,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/credit-cards/products/premium-rewards-elite-credit-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Travel Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.BANK_OF_AMERICA,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/",
    imageUrl: "/images/bankofamerica/travel-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 25_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 25_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Unlimited Cash Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/credit-cards/products/unlimited-cash-back-credit-card/",
    imageUrl: "/images/bankofamerica/unlimited-cash-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/credit-cards/products/unlimited-cash-back-credit-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Business Advantage Customized Cash",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/cash-rewards-business-credit-card/?campaign=4053371~X7~en_US",
    imageUrl: "/images/bankofamerica/business-advantage-customized-cash.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 300 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/cash-rewards-business-credit-card/?campaign=4053371~X7~en_US",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Business Advantage Unlimited Cash",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/unlimited-cash-rewards-business-credit-card/?campaign=4052289~52~en_US",
    imageUrl: "/images/bankofamerica/business-advantage-unlimited-cash.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 1000 }],
        spend: 10_000,
        days: 90,
        credits: [],
        url: "https://www.doctorofcredit.com/bank-of-america-business-advantage-unlimited-cash-rewards-1000-signup-bonus-with-10000-spend/",
      },
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/unlimited-cash-rewards-business-credit-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 1000 }],
        spend: 10_000,
        days: 90,
        credits: [],
        url: "https://www.doctorofcredit.com/bank-of-america-business-advantage-unlimited-cash-rewards-1000-signup-bonus-with-10000-spend/",
      },
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/unlimited-cash-rewards-business-credit-card/",
      },
    ],
  },
  {
    name: "Business Advantage Travel Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BANK_OF_AMERICA,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/travel-rewards-business-credit-card/?campaign=4053417~2P~en_US",
    imageUrl: "/images/bankofamerica/business-advantage-travel-rewards.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/travel-rewards-business-credit-card/?campaign=4053417~2P~en_US",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Platinum Plus",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/platinum-plus-business-credit-card/?campaign=4053445~YT~en_US",
    imageUrl: "/images/bankofamerica/platinum-plus.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 300 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/platinum-plus-business-credit-card/?campaign=4053445~YT~en_US",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Free Spirit",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.SPIRIT,
    isBusiness: false,
    annualFee: 79,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/credit-cards/products/spirit-airlines-credit-card/",
    imageUrl: "/images/bankofamerica/free-spirit.webp",
    credits: [
      {
        value: 100,
        description: "Companion Flight Voucher",
        weight: 0.6,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/credit-cards/products/spirit-airlines-credit-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.bankofamerica.com/credit-cards/products/spirit-airlines-credit-card/",
      },
    ],
  },
];
