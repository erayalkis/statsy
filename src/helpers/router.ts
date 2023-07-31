export const getValFromFuncs = (funcs: Record<string, any>) => {
  const vals: Record<string, any> = {};

  Object.entries(funcs).forEach(([key, val]) => {
    vals[key] = val();
  });

  return vals;
};
