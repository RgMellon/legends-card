import { FetchPlayerProfile } from '../data/usecases/fetch-player-profile';

import { PlayerProfileWithChartValues } from '../domain/usecases/FetchPlayerProfile';

export function useFetchPlayerProfile() {
  async function fetchPlayerProfile(
    id: string
  ): Promise<PlayerProfileWithChartValues> {
    try {
      const fetchResult = await new FetchPlayerProfile().fetch(id);

      const allRates: number[] = [];
      const categorieSlug: string[] = [];

      fetchResult?.rates.forEach((currentRateInfo) => {
        allRates.push(currentRateInfo.rate);
        categorieSlug.push(currentRateInfo.stage.slug);
      });

      return {
        ...fetchResult,
        categorieSlug,
        allRates,
      };
    } catch (err) {
      throw new Error('erro');
    }
  }

  return {
    fetchPlayerProfile,
  };
}
