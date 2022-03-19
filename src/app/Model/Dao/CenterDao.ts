import { Center } from '../Entity/Center';

export class CenterDao {
  private static Centers: Center[] = [
    new Center('Center 1', 'Sousse 1640', 'From 8h to 18h', { latitude: 34.6113892, longitude: 8.7590835 }),
    new Center('Center 2', 'Tunis 1267', 'From 10h to 16h', { latitude: 10, longitude: 34 }),
    new Center('Center 3', 'Gabes 2235', 'From 7h to 14h', { latitude: 11, longitude: 35 }),
    new Center('Center 4', 'Djerba 2154', 'From 8h to 19h', { latitude: 9, longitude: 22 }),
  ]

  static GetAllCenters() {
    return CenterDao.Centers
  }

  static GetCenterByName(name: string): Center | undefined {
    return this.Centers.find(center => center.name == name);
  }


}
