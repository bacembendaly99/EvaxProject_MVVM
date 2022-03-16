export class Center {
  constructor(
    public name: string,
    public address: string,
    public timesheet: string,
    public Coordinates : {latitude: number, longitude: number},
  ) {
  }
}
