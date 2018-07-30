

export function formatValidityDate(date, flag = '.') {
  let times = date.substring(0, date.indexOf(' ')).split('-');

  if (flag == '.') {
    return  times[1] + '.' + times[2]
  } else {
    return '未知';
  }
}