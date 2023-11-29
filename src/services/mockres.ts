export const mockFlight = [
  {
    type: 'flight-offer',
    id: '1',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2023-12-15',
    lastTicketingDateTime: '2023-12-15',
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: 'PT2H10M',
        segments: [
          {
            departure: {
              iataCode: 'HAN',
              terminal: '1',
              at: '2023-12-15T05:00:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T07:10:00',
            },
            carrierCode: 'VJ',
            number: '197',
            aircraft: {
              code: '321',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '58',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'EUR',
      total: '59.59',
      base: '51.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER',
        },
        {
          amount: '0.00',
          type: 'TICKETING',
        },
      ],
      grandTotal: '59.59',
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ['HR'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'EUR',
          total: '59.59',
          base: '51.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '58',
            cabin: 'ECONOMY',
            fareBasis: 'ESP',
            class: 'E',
            includedCheckedBags: {
              weight: 20,
              weightUnit: 'KG',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'flight-offer',
    id: '2',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2023-12-15',
    lastTicketingDateTime: '2023-12-15',
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: 'PT2H10M',
        segments: [
          {
            departure: {
              iataCode: 'HAN',
              terminal: '1',
              at: '2023-12-15T08:05:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T10:15:00',
            },
            carrierCode: 'VJ',
            number: '125',
            aircraft: {
              code: '321',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '61',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'EUR',
      total: '59.59',
      base: '51.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER',
        },
        {
          amount: '0.00',
          type: 'TICKETING',
        },
      ],
      grandTotal: '59.59',
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ['HR'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'EUR',
          total: '59.59',
          base: '51.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '61',
            cabin: 'ECONOMY',
            fareBasis: 'ESP',
            class: 'E',
            includedCheckedBags: {
              weight: 20,
              weightUnit: 'KG',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'flight-offer',
    id: '3',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2023-12-15',
    lastTicketingDateTime: '2023-12-15',
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: 'PT2H10M',
        segments: [
          {
            departure: {
              iataCode: 'HAN',
              terminal: '1',
              at: '2023-12-15T09:00:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T11:10:00',
            },
            carrierCode: 'VJ',
            number: '127',
            aircraft: {
              code: '321',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '64',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'EUR',
      total: '59.59',
      base: '51.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER',
        },
        {
          amount: '0.00',
          type: 'TICKETING',
        },
      ],
      grandTotal: '59.59',
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ['HR'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'EUR',
          total: '59.59',
          base: '51.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '64',
            cabin: 'ECONOMY',
            fareBasis: 'ESP',
            class: 'E',
            includedCheckedBags: {
              weight: 20,
              weightUnit: 'KG',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'flight-offer',
    id: '4',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2023-12-15',
    lastTicketingDateTime: '2023-12-15',
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: 'PT2H10M',
        segments: [
          {
            departure: {
              iataCode: 'HAN',
              terminal: '1',
              at: '2023-12-15T10:10:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T12:20:00',
            },
            carrierCode: 'VJ',
            number: '129',
            aircraft: {
              code: '330',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '67',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'EUR',
      total: '59.59',
      base: '51.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER',
        },
        {
          amount: '0.00',
          type: 'TICKETING',
        },
      ],
      grandTotal: '59.59',
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ['HR'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'EUR',
          total: '59.59',
          base: '51.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '67',
            cabin: 'ECONOMY',
            fareBasis: 'ESP',
            class: 'E',
            includedCheckedBags: {
              weight: 20,
              weightUnit: 'KG',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'flight-offer',
    id: '5',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2023-12-15',
    lastTicketingDateTime: '2023-12-15',
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: 'PT2H10M',
        segments: [
          {
            departure: {
              iataCode: 'HAN',
              terminal: '1',
              at: '2023-12-15T11:05:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T13:15:00',
            },
            carrierCode: 'VJ',
            number: '131',
            aircraft: {
              code: '321',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '71',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'EUR',
      total: '59.59',
      base: '51.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER',
        },
        {
          amount: '0.00',
          type: 'TICKETING',
        },
      ],
      grandTotal: '59.59',
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ['HR'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'EUR',
          total: '59.59',
          base: '51.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '71',
            cabin: 'ECONOMY',
            fareBasis: 'ESP',
            class: 'E',
            includedCheckedBags: {
              weight: 20,
              weightUnit: 'KG',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'flight-offer',
    id: '6',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2023-12-15',
    lastTicketingDateTime: '2023-12-15',
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: 'PT2H10M',
        segments: [
          {
            departure: {
              iataCode: 'HAN',
              terminal: '1',
              at: '2023-12-15T14:50:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T17:00:00',
            },
            carrierCode: 'VJ',
            number: '139',
            aircraft: {
              code: '321',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '75',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'EUR',
      total: '59.59',
      base: '51.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER',
        },
        {
          amount: '0.00',
          type: 'TICKETING',
        },
      ],
      grandTotal: '59.59',
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ['HR'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'EUR',
          total: '59.59',
          base: '51.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '75',
            cabin: 'ECONOMY',
            fareBasis: 'ESP',
            class: 'E',
            includedCheckedBags: {
              weight: 20,
              weightUnit: 'KG',
            },
          },
        ],
      },
    ],
  },
];
