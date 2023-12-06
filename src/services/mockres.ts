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
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
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
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
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
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
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
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
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
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
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
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
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
  {
    type: 'flight-offer',
    id: '7',
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
              at: '2023-12-15T15:30:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T17:40:00',
            },
            carrierCode: 'VJ',
            number: '143',
            aircraft: {
              code: '330',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '78',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '78',
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
    id: '8',
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
              at: '2023-12-15T16:30:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T18:40:00',
            },
            carrierCode: 'VJ',
            number: '147',
            aircraft: {
              code: '330',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '81',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '81',
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
    id: '9',
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
              at: '2023-12-15T18:00:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T20:10:00',
            },
            carrierCode: 'VJ',
            number: '151',
            aircraft: {
              code: '321',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '85',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '85',
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
    id: '10',
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
              at: '2023-12-15T18:40:00',
            },
            arrival: {
              iataCode: 'SGN',
              terminal: '1',
              at: '2023-12-15T20:50:00',
            },
            carrierCode: 'VJ',
            number: '153',
            aircraft: {
              code: '330',
            },
            operating: {
              carrierCode: 'VJ',
            },
            duration: 'PT2H10M',
            id: '88',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'VND',
      total: '1571000.00',
      base: '1344000.00',
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
      grandTotal: '1571000.00',
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
          currency: 'VND',
          total: '1571000.00',
          base: '1344000.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '88',
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
