import { amadeusApi } from '../../amadeusApi';
import {
  IFlightParams,
  IFLightAvailabilitiesParams,
  IFLightSeatmap,
  IFLightFarePriceResponse,
} from 'types/flight';

export const flightApi = amadeusApi.injectEndpoints({
  endpoints: build => ({
    doFlightSearch: build.mutation<IFlightParams, Partial<IFlightParams>>({
      query: params => ({
        url: `/v2/shopping/flight-offers`,
        method: 'GET',
        params: {
          originLocationCode: params.originLocationCode,
          destinationLocationCode: params.destinationLocationCode,
          departureDate: params.departureDate,
          returnDate: params.returnDate,
          adults: params.adults,
          children: params.children,
          infants: params.infants,
          currencyCode: params.currencyCode,
          max: 40,
          includedAirlineCodes: ['VN', 'QH', 'VJ'],
        },
        overrideExisting: true,
      }),
    }),
    doFlightAvailabilities: build.mutation<
      IFLightAvailabilitiesParams,
      Partial<IFLightAvailabilitiesParams>
    >({
      query: body => ({
        url: `/v1/shopping/availability/flight-availabilities`,
        method: 'POST',
        body: {
          originDestinations: [body.originDestinations],
          travelers: body.travelers,
          sources: ['GDS'],
          searchCriteria: {
            flightFilters: {
              carrierRestrictions: {
                includedCarrierCodes: [body.carrierCode],
              },
              connectionRestriction: {
                maxNumberOfConnections: 2,
              },
              cabinRestrictions: [
                {
                  cabin: body.cabin,
                  originDestinationIds: [1],
                },
              ],
            },
          },
        },
        overrideExisting: true,
      }),
    }),

    doFlightFarePrice: build.mutation<
      IFLightFarePriceResponse,
      Partial<IFLightFarePriceResponse>
    >({
      query: body => ({
        url: `/v1/shopping/flight-offers/pricing`,
        method: 'POST',
        params: {
          forceClass: true,
          include: 'detailed-fare-rules',
        },
        body: {
          data: {
            type: 'flight-offers-pricing',
            flightOffers: [body],
          },
        },
        overrideExisting: true,
      }),
      transformResponse: (response: any) => {
        return response.data.flightOffers;
      },
    }),

    doFlightSeatmap: build.mutation<IFLightSeatmap, Partial<IFLightSeatmap>>({
      query: body => ({
        url: `/v1/shopping/seatmaps`,
        method: 'POST',
        body: {
          data: [body],
        },
        overrideExisting: true,
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
    }),

    doFlightUpsellingSearch: build.mutation<
      IFlightParams,
      Partial<IFlightParams>
    >({
      query: body => ({
        url: `/v1/shopping/flight-offers/upselling`,
        method: 'POST',
        body: {
          data: { type: 'flight-offers-upselling', flightOffers: [body] },
        },
        overrideExisting: true,
      }),
    }),
  }),
});

export const {
  useDoFlightSearchMutation,
  useDoFlightUpsellingSearchMutation,
  useDoFlightAvailabilitiesMutation,
  useDoFlightSeatmapMutation,
  useDoFlightFarePriceMutation,
} = flightApi;
