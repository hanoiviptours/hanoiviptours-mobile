import { useState, useEffect, useCallback } from 'react';
import {
  useDoFlightAvailabilitiesMutation,
  useDoFlightFarePriceMutation,
} from '@/services/modules/flights/flight';
import {
  IFareAvailabilityClasses,
  IFareAvailabilityResponse,
  IFLightFarePricingOffers,
  IFareSearchQueryBody,
  IFlightResponseInfos,
  IAvailableFares,
} from 'types/flight';

type IGetAvailableFares = {
  body: IFareSearchQueryBody;
  currentFlight: IFlightResponseInfos;
};

const useGetAvailableFares = ({ body, currentFlight }: IGetAvailableFares) => {
  const [isLoading, setIsLoading] = useState(false);
  const [availableFares, setAvailableFares] = useState<IAvailableFares[]>([]);
  const [fareDetailsBySegment] = useDoFlightAvailabilitiesMutation();
  const [farePrices] = useDoFlightFarePriceMutation();
  const fetchAvailableFares = useCallback(async () => {
    try {
      setIsLoading(true);
      const fareAvailabilities = await fareDetailsBySegment(body).unwrap();

      const fareDetails = fareAvailabilities?.data?.find(
        (item: IFareAvailabilityResponse) =>
          item.segments[0].carrierCode === body.carrierCode &&
          item.segments[0].number === body.number,
      );
      const availabilityClasses =
        fareDetails?.segments[0].availabilityClasses || [];

      const fareAvailabilitiesPrices = await Promise.all(
        availabilityClasses.map(
          async (availableClassItems: IFareAvailabilityClasses) => {
            const newCurrentFlight = {
              ...currentFlight,
              travelerPricings: [
                {
                  ...currentFlight.travelerPricings[0],
                  fareDetailsBySegment: [
                    {
                      segmentId:
                        currentFlight.travelerPricings[0]
                          .fareDetailsBySegment[0].segmentId,
                      cabin: body?.cabin,
                      class: availableClassItems.class,
                    },
                  ],
                },
              ],
            };

            const getFareAvailabilitiesPrices = await farePrices(
              newCurrentFlight as any,
            ).unwrap();

            const newBody = await getFareAvailabilitiesPrices.find(
              (fareItems: IFLightFarePricingOffers) =>
                fareItems.travelerPricings[0].fareDetailsBySegment[0].class ===
                availableClassItems.class,
            );

            const newFareAvailabilitiesPrices = {
              ...availableClassItems,
              body: newBody,
            };
            return newFareAvailabilitiesPrices;
          },
        ),
      );

      setAvailableFares(fareAvailabilitiesPrices.reverse());
      setIsLoading(false);
    } catch (error) {
      console.log('failed to fetch Amadeus api', error);
    }
  }, [body, currentFlight, fareDetailsBySegment, farePrices]);

  useEffect(() => {
    fetchAvailableFares();
  }, [fetchAvailableFares]);

  return { availableFares, isLoading };
};

export default useGetAvailableFares;
