import { reports } from '../models/report';
import { Statuses, Indications } from '../Utils/Enums';


export class reportsData {
    reports: reports[] = 
    [
        {
            id: 1,
            customerId: "318854125",
            reportDate: new Date('2019-01-16'),
            createDateNum: new Date('2019-01-16').getTime(),
            status: +Statuses.working,
            indication: Indications.fail,
            comment: "חסרים דיווחי משכורות",
            isActive: true
          },
          // {
          //   id: 2,
          //   customerId: "318854125",
          //   reportDate: new Date('2019-02-16'),
          //   creatDate: new Date('2019-02-16'),
          //   status: +Statuses.working,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 3,
          //   customerId: "318854125",
          //   reportDate: new Date('2019-03-16'),
          //   creatDate: new Date('2019-03-16'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 4,
          //   customerId: "582938451",
          //   reportDate: new Date('2019-01-14'),
          //   creatDate: new Date('2019-01-14'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 5,
          //   customerId: "582938451",
          //   reportDate: new Date('2019-02-14'),
          //   creatDate: new Date('2019-02-14'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 6,
          //   customerId: "582938451",
          //   reportDate: new Date('2019-03-14'),
          //   creatDate: new Date('2019-03-14'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 7,
          //   customerId: "591824958",
          //   reportDate: new Date('2019-01-10'),
          //   creatDate: new Date('2019-01-10'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 8,
          //   customerId: "591824958",
          //   reportDate: new Date('2019-02-10'),
          //   creatDate: new Date('2019-02-10'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 9,
          //   customerId: "591824958",
          //   reportDate: new Date('2019-03-10'),
          //   creatDate: new Date('2019-03-10'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 10,
          //   customerId: "958473134",
          //   reportDate: new Date('2019-02-15'),
          //   creatDate: new Date('2019-02-15'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 11,
          //   customerId: "958473134",
          //   reportDate: new Date('2019-03-15'),
          //   creatDate: new Date('2019-03-15'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות",
          //   isActive: true
          // },
          // {
          //   id: 12,
          //   customerId: "958473134",
          //   reportDate: new Date('2019-04-15'),
          //   creatDate: new Date('2019-04-15'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 13,
          //   customerId: "954858149",
          //   reportDate: new Date('2019-02-19'),
          //   creatDate: new Date('2019-02-19'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 14,
          //   customerId: "954858149",
          //   reportDate: new Date('2019-03-19'),
          //   creatDate: new Date('2019-03-19'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 15,
          //   customerId: "954858149",
          //   reportDate: new Date('2019-04-19'),
          //   creatDate: new Date('2019-04-19'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 16,
          //   customerId: "994123451",
          //   reportDate: new Date('2019-03-05'),
          //   creatDate: new Date('2019-03-05'),
          //   status: +Statuses.finished,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 17,
          //   customerId: "994123451",
          //   reportDate: new Date('2019-04-05'),
          //   creatDate: new Date('2019-04-05'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 18,
          //   customerId: "2994123451",
          //   reportDate: new Date('2019-05-05'),
          //   creatDate: new Date('2019-05-05'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 19,
          //   customerId: "234184726",
          //   reportDate: new Date('2019-04-14'),
          //   creatDate: new Date('2019-04-14'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 20,
          //   customerId: "234184726",
          //   reportDate: new Date('2019-05-14'),
          //   creatDate: new Date('2019-05-14'),
          //   status: +Statuses.finished,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 21,
          //   customerId: "234184726",
          //   reportDate: new Date('2019-06-14'),
          //   creatDate: new Date('2019-06-14'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 22,
          //   customerId: "315867374",
          //   reportDate: new Date('2019-04-10'),
          //   creatDate: new Date('2019-04-10'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 23,
          //   customerId: "315867374",
          //   reportDate: new Date('2019-05-10'),
          //   creatDate: new Date('2019-05-10'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 24,
          //   customerId: "315867374",
          //   reportDate: new Date('2019-06-10'),
          //   creatDate: new Date('2019-06-10'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 25,
          //   customerId: "481726451",
          //   reportDate: new Date('2019-01-15'),
          //   creatDate: new Date('2019-01-15'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 26,
          //   customerId: "481726451",
          //   reportDate: new Date('2019-02-15'),
          //   creatDate: new Date('2019-02-15'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 27,
          //   customerId: "481726451",
          //   reportDate: new Date('2019-03-15'),
          //   creatDate: new Date('2019-03-15'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 28,
          //   customerId: "591857245",
          //   reportDate: new Date('2019-07-14'),
          //   creatDate: new Date('2019-07-14'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 29,
          //   customerId: "591857245",
          //   reportDate: new Date('2019-08-14'),
          //   creatDate: new Date('2019-08-14'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 30,
          //   customerId: "591857245",
          //   reportDate: new Date('2019-09-14'),
          //   creatDate: new Date('2019-09-14'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 31,
          //   customerId: "182948571",
          //   reportDate: new Date('2019-10-11'),
          //   creatDate: new Date('2019-10-11'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 32,
          //   customerId: "182948571",
          //   reportDate: new Date('2019-11-11'),
          //   creatDate: new Date('2019-11-11'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 33,
          //   customerId: "182948571",
          //   reportDate: new Date('2019-12-11'),
          //   creatDate: new Date('2019-12-11'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 34,
          //   customerId: "498274612",
          //   reportDate: new Date('2019-09-20'),
          //   creatDate: new Date('2019-09-20'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 35,
          //   customerId: "498274612",
          //   reportDate: new Date('2019-10-20'),
          //   creatDate: new Date('2019-10-20'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 36,
          //   customerId: "498274612",
          //   reportDate: new Date('2019-11-20'),
          //   creatDate: new Date('2019-11-20'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 37,
          //   customerId: "918276472",
          //   reportDate: new Date('2019-08-02'),
          //   creatDate: new Date('2019-08-02'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 38,
          //   customerId: "918276472",
          //   reportDate: new Date('2019-09-02'),
          //   creatDate: new Date('2019-09-02'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 39,
          //   customerId: "918276472",
          //   reportDate: new Date('2019-10-02'),
          //   creatDate: new Date('2019-10-02'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 40,
          //   customerId: "182739485",
          //   reportDate: new Date('2019-03-11'),
          //   creatDate: new Date('2019-03-11'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 41,
          //   customerId: "182739485",
          //   reportDate: new Date('2019-04-11'),
          //   creatDate: new Date('2019-04-11'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 42,
          //   customerId: "182739485",
          //   reportDate: new Date('2019-05-11'),
          //   creatDate: new Date('2019-05-11'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 43,
          //   customerId: "192837465",
          //   reportDate: new Date('2019-05-05'),
          //   creatDate: new Date('2019-05-05'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 44,
          //   customerId: "192837465",
          //   reportDate: new Date('2019-06-05'),
          //   creatDate: new Date('2019-06-05'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 45,
          //   customerId: "192837465",
          //   reportDate: new Date('2019-07-05'),
          //   creatDate: new Date('2019-07-05'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 46,
          //   customerId: "273647561",
          //   reportDate: new Date('2019-12-10'),
          //   creatDate: new Date('2019-12-10'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 47,
          //   customerId: "273647561",
          //   reportDate: new Date('2020-01-10'),
          //   creatDate: new Date('2020-01-10'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 48,
          //   customerId: "273647561",
          //   reportDate: new Date('2020-02-10'),
          //   creatDate: new Date('2020-02-10'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 49,
          //   customerId: "181726374",
          //   reportDate: new Date('2019-12-11'),
          //   creatDate: new Date('2019-12-11'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 50,
          //   customerId: "181726374",
          //   reportDate: new Date('2020-01-11'),
          //   creatDate: new Date('2020-01-11'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 51,
          //   customerId: "181726374",
          //   reportDate: new Date('2020-02-11'),
          //   creatDate: new Date('2020-02-11'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 52,
          //   customerId: "448572634",
          //   reportDate: new Date('2019-11-15'),
          //   creatDate: new Date('2019-11-15'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 53,
          //   customerId: "448572634",
          //   reportDate: new Date('2019-12-15'),
          //   creatDate: new Date('2019-12-15'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 54,
          //   customerId: "448572634",
          //   reportDate: new Date('2020-01-15'),
          //   creatDate: new Date('2020-01-15'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 55,
          //   customerId: "184255667",
          //   reportDate: new Date('2020-01-11'),
          //   creatDate: new Date('2020-01-11'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 56,
          //   customerId: "184255667",
          //   reportDate: new Date('2020-02-11'),
          //   creatDate: new Date('2020-02-11'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 57,
          //   customerId: "184255667",
          //   reportDate: new Date('2020-03-01'),
          //   creatDate: new Date('2020-03-01'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 58,
          //   customerId: "485544234",
          //   reportDate: new Date('2020-01-12'),
          //   creatDate: new Date('2020-01-12'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 59,
          //   customerId: "485544234",
          //   reportDate: new Date('2020-02-12'),
          //   creatDate: new Date('2020-02-12'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 60,
          //   customerId: "485544234",
          //   reportDate: new Date('2020-03-01'),
          //   creatDate: new Date('2020-03-01'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 61,
          //   customerId: "194857263",
          //   reportDate: new Date('2020-01-04'),
          //   creatDate: new Date('2020-01-04'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 62,
          //   customerId: "194857263",
          //   reportDate: new Date('2020-02-04'),
          //   creatDate: new Date('2020-02-04'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 63,
          //   customerId: "194857263",
          //   reportDate: new Date('2020-03-04'),
          //   creatDate: new Date('2020-03-04'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 64,
          //   customerId: "968374621",
          //   reportDate: new Date('2020-01-01'),
          //   creatDate: new Date('2020-01-01'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 65,
          //   customerId: "968374621",
          //   reportDate: new Date('2020-02-01'),
          //   creatDate: new Date('2020-02-01'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 66,
          //   customerId: "968374621",
          //   reportDate: new Date('2020-03-01'),
          //   creatDate: new Date('2020-03-01'),
          //   status: +Statuses.finished,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 67,
          //   customerId: "574328198",
          //   reportDate: new Date('2019-07-19'),
          //   creatDate: new Date('2019-07-19'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 68,
          //   customerId: "574328198",
          //   reportDate: new Date('2019-08-19'),
          //   creatDate: new Date('2019-08-19'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 69,
          //   customerId: "574328198",
          //   reportDate: new Date('2019-09-19'),
          //   creatDate: new Date('2019-09-19'),
          //   status: +Statuses.notStarted,
          //   indication: 1,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 70,
          //   customerId: "118475627",
          //   reportDate: new Date('2019-06-24'),
          //   creatDate: new Date('2019-06-24'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 71,
          //   customerId: "118475627",
          //   reportDate: new Date('2019-07-24'),
          //   creatDate: new Date('2019-07-24'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 72,
          //   customerId: "118475627",
          //   reportDate: new Date('2019-08-24'),
          //   creatDate: new Date('2019-08-24'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 73,
          //   customerId: "557841723",
          //   reportDate: new Date('2020-02-13'),
          //   creatDate: new Date('2020-02-13'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 74,
          //   customerId: "557841723",
          //   reportDate: new Date('2020-03-13'),
          //   creatDate: new Date('2020-03-13'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 75,
          //   customerId: "557841723",
          //   reportDate: new Date('2020-04-13'),
          //   creatDate: new Date('2020-04-13'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 76,
          //   customerId: "337214657",
          //   reportDate: new Date('2020-01-23'),
          //   creatDate: new Date('2020-01-23'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 77,
          //   customerId: "337214657",
          //   reportDate: new Date('2020-02-23'),
          //   creatDate: new Date('2020-02-23'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 78,
          //   customerId: "337214657",
          //   reportDate: new Date('2020-03-23'),
          //   creatDate: new Date('2020-03-23'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 79,
          //   customerId: "991827334",
          //   reportDate: new Date('2020-02-01'),
          //   creatDate: new Date('2020-02-01'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 80,
          //   customerId: "991827334",
          //   reportDate: new Date('2020-03-01'),
          //   creatDate: new Date('2020-03-01'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 81,
          //   customerId: "991827334",
          //   reportDate: new Date('2020-04-01'),
          //   creatDate: new Date('2020-04-01'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 82,
          //   customerId: "517566345",
          //   reportDate: new Date('2019-09-08'),
          //   creatDate: new Date('2019-09-08'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },{
          //   id: 83,
          //   customerId: "517566345",
          //   reportDate: new Date('2019-10-08'),
          //   creatDate: new Date('2019-10-08'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 84,
          //   customerId: "517566345",
          //   reportDate: new Date('2019-11-08'),
          //   creatDate: new Date('2019-11-08'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 85,
          //   customerId: "214475744",
          //   reportDate: new Date('2019-04-05'),
          //   creatDate: new Date('2019-04-05'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 86,
          //   customerId: "214475744",
          //   reportDate: new Date('2019-03-05'),
          //   creatDate: new Date('2019-03-05'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 87,
          //   customerId: "214475744",
          //   reportDate: new Date('2019-03-05'),
          //   creatDate: new Date('2019-03-05'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 88,
          //   customerId: "112457742",
          //   reportDate: new Date('2019-07-02'),
          //   creatDate: new Date('2019-07-02'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 89,
          //   customerId: "112457742",
          //   reportDate: new Date('2019-08-02'),
          //   creatDate: new Date('2019-08-02'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.fail,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 90,
          //   customerId: "112457742",
          //   reportDate: new Date('2019-09-02'),
          //   creatDate: new Date('2019-09-02'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 91,
          //   customerId: "112457742",
          //   reportDate: new Date('2019-10-02'),
          //   creatDate: new Date('2019-10-02'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 92,
          //   customerId: "112457742",
          //   reportDate: new Date('2019-11-02'),
          //   creatDate: new Date('2019-11-02'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 93,
          //   customerId: "112457742",
          //   reportDate: new Date('2019-12-02'),
          //   creatDate: new Date('2019-12-02'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 94,
          //   customerId: "112457742",
          //   reportDate: new Date('2020-01-02'),
          //   creatDate: new Date('2020-01-02'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 95,
          //   customerId: "112457742",
          //   reportDate: new Date('2020-02-02'),
          //   creatDate: new Date('2020-02-02'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 96,
          //   customerId: "112457742",
          //   reportDate: new Date('2020-03-02'),
          //   creatDate: new Date('2020-03-02'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 97,
          //   customerId: "112457742",
          //   reportDate: new Date('2020-04-02'),
          //   creatDate: new Date('2020-04-02'),
          //   status: +Statuses.notStarted,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 98,
          //   customerId: "112457742",
          //   reportDate: new Date('2020-05-02'),
          //   creatDate: new Date('2020-05-02'),
          //   status: +Statuses.finished,
          //   indication: Indications.successfull,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 99,
          //   customerId: "112457742",
          //   reportDate: new Date('2020-06-02'),
          //   creatDate: new Date('2020-06-02'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // },
          // {
          //   id: 100,
          //   customerId: "112457742",
          //   reportDate: new Date('2020-07-02'),
          //   creatDate: new Date('2020-07-02'),
          //   status: +Statuses.working,
          //   indication: Indications.pending,
          //   comment: "חסרים דיווחי משכורות"
          // }
    ];

    fillReportsNullableValues(){
      for(let report of this.reports){
        report.isActive = true;
        report.lease = null;
        report.actualDownPaymentsFee = null;
        report.salariesVat = null;
        report.deductions = null;
        report.deductionsFee = null;
        report.downPaymentPercentage = null;
        report.downPaymentsCycleFee = null;
        report.addedValueFee = null;
        report.addedValueKFee = null;
        report.arrivedToOffice = null;
        report.workers = null;
        report.exemptCapitalCycleFee = null;
        report.exemptCycleFee = null;
        report.reportHandler = null;
        report.reportEndDate = null;
        report.reportLastChangeDate = null;
        report.reportNumber = null;
        report.reportStartDate = null;
        report.requiredCapitalCycleFee = null;
        report.requiredCycleVal = null;
        report.totalContractors = null;
        report.totalDeductions = null;
        report.incomeTaxDeductions = null;
        report.incomeTaxDeductionsDate = null;
        report.incomeTaxDeductionsPeriodType = null;
        report.incomeTaxDeductionsVal = null;
        report.incomeTaxDownPaymentAppointedDate = null;
        report.incomeTaxDownPaymentsPeriodType = null;
        report.incomeTaxDownPaymentsVal = null;
        report.incomeTaxSalaries = null;
        report.incomeTaxWorkers = null;
        report.generalCycleVat = null;
        report.generalRequiredCycleFee = null;
        report.leasePaymentPeriodType = null;
        report.leaseVal = null;
        report.leaseVat = null;
        report.calculatedDownPayment = null;
        report.contractors = null;
        report.contractorsEmployerPeriodType = null;
        report.contractorsVal = null;
        report.contractorsVat = null;
        report.vatAppointedDate = null;
        report.vatPayment = null;
        report.vatReportPeriodType = null;
        report.vatValue = null;
        report.nationalInsuranceDeductionsPeriodType = null;
        report.nationalInsuranceDeductionsVal = null;
        report.nationalInsuranceDownPaymentsPeriodType = null;
        report.nationalInsuranceDownPaymentsVal = null;
      }
      return this.reports;
    }
}