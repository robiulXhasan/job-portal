const jobDetailsLoader = async (id) => {
  let jobDetails;
  const loadedData = await fetch("jobData.json");
  const allJobs = await loadedData.json();
  allJobs.map((jobs) => {
    if (jobs.id === id) {
      jobDetails = jobs;
    }
  });
  return jobDetails;
};
export default jobDetailsLoader;
