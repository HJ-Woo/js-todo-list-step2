export function checkNull(str) {
  if (str == null || str == "" || str == undefined) {
    return true;
  }
  return false;
}