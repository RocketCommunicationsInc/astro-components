export default class {
  static get properties() {
    return {
      oneDay: 86400000,
    };
  }

  static dayOfYear(timezone = 'utc') {
    const now = timezone === 'utc' ? this.utcDate() : new Date();
    const year =
      timezone === 'utc' ? new Date(now.getFullYear(), 0, 1) : new Date(now.getUTCFullYear(), 0, 1);

    const day = Math.ceil((now - year) / this.properties.oneDay);

    return day.toString().padStart(3, '000');
  }

  static utcDate(date = new Date()) {
    return new Date(
      date.getFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    );
  }

  static formatTime(
    time = new Date(),
    locale = 'us-en',
    options = { hour12: false, timeZone: 'UTC', timeZoneName: 'short' },
  ) {
    return new Date(time).toLocaleTimeString(locale, options);
  }
}
