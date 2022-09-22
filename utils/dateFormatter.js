function dateFormat(date) {
  const delta = date - Date.now();
  const weeks = Math.floor(delta / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  if (weeks > 0) {
    return [
      `${twoDigits(weeks)}w ${twoDigits(days)}d`,
      delta % (1000 * 60 * 60 * 24),
    ];
  }
  const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (days > 0) {
    return [
      `${twoDigits(days)}d ${twoDigits(hours)}h`,
      delta % (1000 * 60 * 60),
    ];
  }
  const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
  if (hours > 0) {
    return [`${twoDigits(hours)}h ${twoDigits(minutes)}m`, delta % (1000 * 60)];
  }
  const seconds = Math.floor((delta % (1000 * 60)) / 1000);
  return [`${twoDigits(minutes)}m ${twoDigits(seconds)}s`, 1000];
}

function twoDigits(value) {
  return value < 10 ? `0${value}` : value;
}

// console.log(dateFormat(Date.now() + Math.random() * (1000 * 60 * 1800 * 24)));
// console.log(dateFormat(Date.now() + Math.random() * (1000 * 60 * 60 * 24 * 7)));
// console.log(dateFormat(Date.now() + Math.random() * (1000 * 60 * 60 * 24)));
// console.log(dateFormat(Date.now() + Math.random() * (1000 * 60 * 60)));

// const date = Math.random() * (1000 * 60 * 60 *24 );

// console.log(dateFormat2(Date.now() + date));
// console.log(dateFormat2(Date.now() + (date % (1000 * 60 * 60 * 24))));
// console.log(dateFormat2(Date.now() + (date % (1000 * 60 * 60))));

// console.log(dateFormat(Date.now() + date)[0]);
// console.log(dateFormat(Date.now()+ dateFormat(Date.now() + date)[1])[0]);
// console.log(dateFormat(Date.now() + (date % (1000 * 60 * 60 * 24)))[0]);
// console.log(dateFormat(Date.now() + (date % (1000 * 60 * 60)))[0]);

/**
 * Output:
 * 01w 12d
 * 02d 11h
 * 20h 29m
 * 59m 56s
 */

export default dateFormat;
