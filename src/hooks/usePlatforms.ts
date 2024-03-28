import useData from "./useData";

export interface Plateform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Plateform>("/platforms/lists/parents");

export default usePlatforms;
