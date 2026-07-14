class Cohort {
    constructor(cohortCode,
        startDate,
        technology,
        trainerName,
        coachName,
        currentStatus) {
        this.cohortCode = cohortCode;
        this.coachName = coachName;
        this.trainerName = trainerName;
        this.technology = technology;
        this.startDate = startDate;
        this.currentStatus = currentStatus;
    }
}
const CohortsData = [
    new Cohort('INTADMDF10', '22-Feb-2026', '.NET FSD', 'Jais joyee', 'Aathma', 'Scheduled'),
    new Cohort('ADM21JF014', '10-Sep-2026', 'Java FSD', 'Elina', 'Apoorv', 'Ongoing'),
    new Cohort('CDBJF21025', '24-Dec-2026', 'Java FSD', 'jemmi', 'Aathma', 'Ongoing'),
    new Cohort('INTADMJF12', '22-Feb-2025', 'Java FSD', 'To Be Assigned', 'Ibrahim', 'Scheduled'),
    new Cohort('CDE22JF011', '24-Dec-2026', 'Java FSD', 'Emmastone', 'Apoorv', 'Ongoing'),
    new Cohort('INTADMDF09', '22-Feb-2025', 'Dataware Housing', 'Babjee Rao', 'Aathma', 'Scheduled'),
    new Cohort('ADM22DF001', '10-Sep-2026', '.NET FSD', 'Marie', 'Ibrahim', 'Ongoing'),
];
export { Cohort, CohortsData };
