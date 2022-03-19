import { Appointment } from '../Entity/Appointment';

export class AppointmentDao {
    private static Appointments: Appointment[] = [
        new Appointment('19/03/2022 08:30', 14764167, 'Center 1'),
        new Appointment('22/03/2022 10:30', 14852236, 'Center 2'),
        new Appointment('29/03/2022 14:00', 13456977, 'Center 3'),
        new Appointment('26/03/2022 15:30', 14756222, 'Center 4'),
    ]

    static GetAppointmentByCin(cin: number): Appointment | undefined {
        return this.Appointments.find(appointment => appointment.user_cin == cin);
    }
}
