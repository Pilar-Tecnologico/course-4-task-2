let today = '';
const getTodayDate = () => {
  if (today === '') {
    const _today = new Date();
    let month = _today.getMonth();
    month = month <= 9 ? `0${month}` : month;
    let day = _today.getDate();
    day = day <= 9 ? `0${day}` : day;
    today = `${_today.getFullYear()}-${month}-${day}`;
  }
  return today;
};

module.exports = { getTodayDate };
