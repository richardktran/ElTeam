export const checkMatchPatternWithCourse = (path, pattern) => {
  const pathArr = path.split('/');
  const patternArr = pattern.split('/');
  if (pathArr.length !== patternArr.length) {
    return false;
  }
  for (let i = 0; i < pathArr.length; i++) {
    if (patternArr[i] === '*') {
      continue;
    }
    if (pathArr[i] !== patternArr[i]) {
      return false;
    }
  }
  return true;
}