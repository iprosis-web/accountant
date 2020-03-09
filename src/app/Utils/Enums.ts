export enum Indications{
    successfull = 1,
    pending,
    //חרג בזמן
    fail
}

export enum Statuses{
    //בעבודה
    working = 1,
    //לא הותחל
    notStarted,
    //הסתיים
    finished
}

export enum CustomerCRUD {
    add = 0,
    edit,
    delete
}

export enum ResultStatus {
    fail = 0,
    successful
}