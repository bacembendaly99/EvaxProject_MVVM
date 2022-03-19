import { Appointment } from '../Entity/Appointment';

export class AppointmentDao {
    private static Appointments: Appointment[] = [
        new Appointment('19/03/2022 08:30', 14764167, 'Centre 1'),
        new Appointment('22/03/2022 10:30', 14852236, 'Centre 2'),
        new Appointment('29/03/2022 14:00', 13456977, 'Centre 3'),
        new Appointment('26/03/2022 15:30', 14756222, 'Centre 4'),
    ]

    static GetAppointmentByCin(cin: number): Appointment | undefined {
        return this.Appointments.find(appointment => appointment.user_cin == cin);
    }
}
