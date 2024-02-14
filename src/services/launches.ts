import {type RootObject} from '../types/api'
export const getLauches = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches');
  const launches = await res.json() as RootObject;
  console.log('launches:', launches)
  return launches
}
export const getUncomingLauches = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches/upcoming');
  const launches = await res.json() as RootObject;
  console.log('launches:', launches)
  return launches
}

export const getLauch = async (id) => {
  const res = await fetch(`https://api.spacexdata.com/v3/launches/${id}`);
  const launch = await res.json() as RootObject;
  console.log('launch:', launch)
  return launch
}
