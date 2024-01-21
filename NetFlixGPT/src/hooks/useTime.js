const useTime = (runtime) => {
  console.log(runtime);
  if (!runtime) return;
  const hour = runtime / 60;
  const rhours = Math.floor(hour);
  const min = (hour - rhours) * 60;
  const rmin = Math.round(min);

  // console.log(rhours, rmin);

  return { rhours, rmin };
};
export default useTime;
