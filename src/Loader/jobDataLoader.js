const jobDataLoader = async () => {
  const loadedData = await fetch("jobData.json");
  const data = await loadedData.json();
  return data;
};
export default jobDataLoader;
