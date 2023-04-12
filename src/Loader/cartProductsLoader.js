import { getLocalStorage } from "../Utilities/LocalStorage";

const cartProductsLoader = async () => {
  const loadedJobs = await fetch("jobData.json");
  const jobs = await loadedJobs.json();
  const storedCart = getLocalStorage();
  const savedCart = [];
  for (const id in storedCart) {
    const appliedJobs = jobs.find((job) => job.id === id);
    if (appliedJobs) {
      savedCart.push(appliedJobs);
    }
  }
  return savedCart;
};
export default cartProductsLoader;
