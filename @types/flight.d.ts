export type IFlightParams = {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate?: string;
  returnDate?: string;
  adults?: number;
  children?: number;
  infants?: number;
  currencyCode: string;
  travelClass?: string;
};

export type IFareAvailabilityClasses = {
  numberOfBookableSeats: number;
  class: string;
};

// export type IFareSegment = {
//   carrierCode: string;
//   number: string;
//   availabilityClasses: IFareAvailabilityClasses[];
//   aircraft: { code: string };
//   departure: {
//     iataCode: 'SYD';
//     terminal: '1';
//     at: '2021-11-01T11:35:00';
//   };
// };
export type IFareAvailabilityResponse = {
  id: string;
  duration: string;
  instantTicketingRequired: boolean;
  originDestinationIds: number;
  paymentCardRequired: boolean;
  segmentIds: number[];
  segments: IFareSegment[];
  source: string;
  type: string;
  dictionaries: any;
};

export type IFLightAvailabilitiesParams = {
  data: IFareAvailabilityResponse[];
  originDestinations: {
    id: string;
    originLocationCode: string;
    destinationLocationCode: string;
    departureDateTime: {
      date: string;
      time: string;
    };
  };
  travelers: { id: string; travelerType: 'ADULTS' | 'CHILDREN' | 'INFANTS' }[];
  carrierCode: string;
  cabin: string;
};
export type IFLightPriceTaxes = {
  amount: string;
  code: string;
};
export type IFlightPrice = {
  currency: string;
  total: string;
  base: string;
  fees: {
    amout: string;
    type: string;
  };
  grandTotal: string;
  billingCurrency: string;
};

export type IFareDetailsBySegment = {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  class: string;
  includedCheckedBags: {
    quantity: number;
  };
};

export type ITravelerPricing = {
  travelerId: string;
  travelerType: 'ADULTS' | 'CHILDREN' | 'INFANTS';
  fareOption: string;
  price: {
    currency: string;
    total: string;
    base: string;
    taxes: IFLightPriceTaxes[];
  };
  fareDetailsBySegment: IFlightSegment[];
};
export type IFlightSegment = {
  class: string;
  segmentId: string;
  departure: {
    iataCode: string;
    terminal: string;
    at: string;
  };
  arrival: {
    iataCode: string;
    terminal: string;
    at: string;
  };
  carrierCode: string;
  number: string;
  aircraft: {
    code: string;
  };
  operating: {
    carrierCode: string;
  };
  id: string;
  numberOfStops: number;
  duration: string;
  cabin: string;
};

export type IFLightFarePricingOffers = {
  itineraries: IFlightSegment[];
  price: IFlightPrice;
  travelerPricings: ITravelerPricing[];
  fareDetailsBySegment: IFareDetailsBySegment[];
  class: string;
};

export type IFLightFarePriceResponse = {
  find(arg0: (fareItems: IFLightFarePricingOffers) => boolean): unknown;
  data: {
    flightOffers: IFLightFarePricingOffers[];
    tye: string;
  };
};

export type IFareSearchQueryBody = {
  cabin: string;
  carrierCode: string;
  number: string;
  originDestinations: {
    departureDateTime: { date: string; time: string };
    destinationLocationCode: string;
    id: string;
    originLocationCode: string;
  };
  travelers: { id: string; travelerType: 'ADULTS' | 'CHILDREN' | 'INFANTS' }[];
};

export type IFlightResponseInfos = {
  id: string;
  instantTicketingRequired: boolean;
  itineraries: {
    duration: string;
    segments: IFlightSegment[];
  }[];
  lastTicketingDate: string;
  lastTicketingDateTime: string;
  nonHomogeneous: boolean;
  numberOfBookableSeats: number;
  oneWay: boolean;
  price: IFlightPrice;
  pricingOptions: {
    fareType: string[];
    includedCheckedBagsOnly: boolean;
  };
  source: string;
  travelerPricings: ITravelerPricing[];
  type: string;
  validatingAirlineCodes: string[];
  class: string;
};

export type IFLightSeatmap = {
  body: any;
  data: any;
};

export interface ICustomerInfomations {
  id: number;
  gender: 'MALE' | 'FEMALE';
  firstName: string;
  lastName: string;
  key: 'adults' | 'children' | 'infants';
  seat?: string;
}

export interface IFlightState {
  customers: ICustomerInfomations[];
  availableFares: IFareAvailabilityClasses[];
}

export interface IAvailableFares extends IFlightResponseInfos {
  body: IFLightFarePricingOffers;
}
