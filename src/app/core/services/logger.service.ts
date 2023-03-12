import { Injectable } from '@angular/core';
import { LogLevel } from '@core/models/log-level';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  info(msg: string): void {
    this.logWith(LogLevel.Info, msg);
  }

  warn(msg: string): void {
    this.logWith(LogLevel.Warn, msg);
  }

  error(msg: string): void {
    this.logWith(LogLevel.Error, msg);
  }

  private logWith(level: Number, msg: string): void {
    if (level <= LogLevel.Error) {
      switch (level) {
        case LogLevel.None:
          return console.log(msg);
        case LogLevel.Info:
          return console.info('%c' + msg, 'color: #6495ED');
        case LogLevel.Warn:
          return console.warn('%c' + msg, 'color: #FF8C00');
        case LogLevel.Error:
          return console.error('%c' + msg, 'color: #DC143C');
        default:
          console.debug(msg);
      }
    }
  }
}
