import { reports } from '../models/report';
import { Statuses, Indications } from '../Utils/Enums';


export class reportsData {
    customers: reports[] = 
    [
        {
            id: 1,
            customerId: "318854125",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: Indications.fail,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 2,
            customerId: "318854125",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 3,
            customerId: "318854125",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 4,
            customerId: "582938451",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 5,
            customerId: "582938451",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 6,
            customerId: "582938451",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 7,
            customerId: "591824958",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 8,
            customerId: "591824958",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 9,
            customerId: "591824958",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 10,
            customerId: "958473134",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 11,
            customerId: "958473134",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 12,
            customerId: "958473134",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 13,
            customerId: "954858149",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 14,
            customerId: "954858149",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 15,
            customerId: "954858149",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 16,
            customerId: "994123451",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 17,
            customerId: "994123451",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 18,
            customerId: "2994123451",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 19,
            customerId: "234184726",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 20,
            customerId: "234184726",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 21,
            customerId: "234184726",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 22,
            customerId: "315867374",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 23,
            customerId: "315867374",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 24,
            customerId: "315867374",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 25,
            customerId: "481726451",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 26,
            customerId: "481726451",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 27,
            customerId: "481726451",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 28,
            customerId: "591857245",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 29,
            customerId: "591857245",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 30,
            customerId: "591857245",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 31,
            customerId: "182948571",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 32,
            customerId: "182948571",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 33,
            customerId: "182948571",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 34,
            customerId: "498274612",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 35,
            customerId: "498274612",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 36,
            customerId: "498274612",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 37,
            customerId: "918276472",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 38,
            customerId: "918276472",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 39,
            customerId: "918276472",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 40,
            customerId: "182739485",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 41,
            customerId: "182739485",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 42,
            customerId: "182739485",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 43,
            customerId: "192837465",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 44,
            customerId: "192837465",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 45,
            customerId: "192837465",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 46,
            customerId: "273647561",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 47,
            customerId: "273647561",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 48,
            customerId: "273647561",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 49,
            customerId: "181726374",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 50,
            customerId: "181726374",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 51,
            customerId: "181726374",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 52,
            customerId: "448572634",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 53,
            customerId: "448572634",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 54,
            customerId: "448572634",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 55,
            customerId: "184255667",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 56,
            customerId: "184255667",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 57,
            customerId: "184255667",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 58,
            customerId: "485544234",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 59,
            customerId: "485544234",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 60,
            customerId: "485544234",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 61,
            customerId: "194857263",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 62,
            customerId: "194857263",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 63,
            customerId: "194857263",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 64,
            customerId: "968374621",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 65,
            customerId: "968374621",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 66,
            customerId: "968374621",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 67,
            customerId: "574328198",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 68,
            customerId: "574328198",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 69,
            customerId: "574328198",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 70,
            customerId: "118475627",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 71,
            customerId: "118475627",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 72,
            customerId: "118475627",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 73,
            customerId: "557841723",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 74,
            customerId: "557841723",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 75,
            customerId: "557841723",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 76,
            customerId: "337214657",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 77,
            customerId: "337214657",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 78,
            customerId: "337214657",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 79,
            customerId: "991827334",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 80,
            customerId: "991827334",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 81,
            customerId: "991827334",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 82,
            customerId: "517566345",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },{
            id: 83,
            customerId: "517566345",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 84,
            customerId: "517566345",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 85,
            customerId: "214475744",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 86,
            customerId: "214475744",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 87,
            customerId: "214475744",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 88,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 89,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 90,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 91,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 92,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 93,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 94,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 95,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 96,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 97,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.notStarted,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 98,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.finished,
            indication: 3,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 99,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          },
          {
            id: 100,
            customerId: "112457742",
            reportDate: new Date,
            creatDate: new Date,
            status: +Statuses.working,
            indication: 1,
            comment: "חסרים דיווחי משכורות"
          }
    ];
}