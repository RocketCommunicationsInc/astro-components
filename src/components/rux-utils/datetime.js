export default class {
  static formatClockTimeUTC(time = new Date(), timezone = 'UTC', hideTimezone = false) {
    if (hideTimezone) {
      return new Date(time).toLocaleTimeString('us-EN', { hour12: false, timeZone: timezone });
    }
    return new Date(time).toLocaleTimeString('us-EN', { hour12: false, timeZone: timezone, timeZoneName: 'short' });
  }

  static formatMachineTimeUTC(time = new Date()) {
    return `${time.getUTCFullYear()}-${time.getUTCMonth()}-${time.getUTCDate()} 
            ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}:${time.getUTCMilliseconds()}`;
  }
}
