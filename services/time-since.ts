export const timeSince = (date: Date): string => {
  console.log(date);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);

  var interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + "a";
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + "M";
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + "d";
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + "h";
  }

  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + "m";
  }

  return Math.floor(seconds) + "s";
}
