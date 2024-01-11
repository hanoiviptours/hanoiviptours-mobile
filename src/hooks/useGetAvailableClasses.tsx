import { useState, useEffect, useCallback } from 'react';
import { useDoFlightAvailabilitiesMutation } from '@/services/modules/flights/flight';

const classes = ['BUSINESS', 'PREMIUM_ECONOMY', 'ECONOMY'];

type IUseGetAvailableClasses = {
  flightAvailableBody: {
    carrierCode: string;
    number: string;
  };
};
const useGetAvailableClasses = ({
  flightAvailableBody,
}: IUseGetAvailableClasses) => {
  const [isLoading, setIsLoading] = useState(false);
  const [availabilityClasses, setAvailabilityClasses] = useState<any[]>([]);
  const [fareDetailsBySegment] = useDoFlightAvailabilitiesMutation();

  const fetchAvailableClasses = useCallback(async () => {
    try {
      setIsLoading(true);
      const classesAvailabilitiesPromises = classes.map(
        async (classItem: string) => {
          const newFlightAvailableClass = {
            ...flightAvailableBody,
            cabin: classItem,
          };

          const fareAvailabilities = await fareDetailsBySegment(
            newFlightAvailableClass,
          ).unwrap();
          const fareDetails = fareAvailabilities?.data?.find(
            item => item.segments[0].carrierCode ===
                flightAvailableBody.carrierCode &&
              item.segments[0].number === flightAvailableBody.number,
          );
          const availabilityClasses =
            fareDetails?.segments[0]?.availabilityClasses;
          return {
            class: classItem,
            availabilityClasses: availabilityClasses || [],
          };
        },
      );
      const fetchedClasses = await Promise.all(classesAvailabilitiesPromises);
      const availabilityClasses = fetchedClasses.flat();
      setAvailabilityClasses(
        availabilityClasses
          .filter(item => item.availabilityClasses.length > 0)
          .reverse(),
      );
      setIsLoading(false);
    } catch (error) {
      console.log('err', error);
    }
  }, [flightAvailableBody]);

  useEffect(() => {
    fetchAvailableClasses();
  }, [fetchAvailableClasses]);

  return { availabilityClasses, isLoading };
};

export default useGetAvailableClasses;
