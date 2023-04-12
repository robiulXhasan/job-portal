// add to local storage
const addToDb = (id) => {
  let appliedJobs = getLocalStorage();
  appliedJobs[id] = 1;
  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};
//get local storage
const getLocalStorage = () => {
  let appliedJobs = {};

  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    appliedJobs = JSON.parse(storedCart);
  }
  return appliedJobs;
};

export { addToDb, getLocalStorage };
