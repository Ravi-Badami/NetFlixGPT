const useCrewData = (crew) => {
  const department = ['Editing', 'Writing', 'Directing'];
  const crewData = department.map(
    (dept) => crew.find((crew) => crew.known_for_department === dept)?.name
  );
  return crewData;
};
export default useCrewData;
