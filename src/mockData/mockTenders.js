import dayjs from 'dayjs';

const MOCK_START_DATE = dayjs()
  .add(2, 'day')
  .startOf('day')
  .format('YYYY-MM-DD HH:mm:ss');
const MOCK_END_DATE = dayjs()
  .add(3, 'day')
  .startOf('day')
  .format('YYYY-MM-DD HH:mm:ss');

export const MOCK_TENDERS = [
  {
    id: 'mock-1',
    userId: 'mock-user-1',
    name: 'Доставка на Googleplex',
    transportType: 'Тент',
    price: 15000,
    status: 'publish',
    driverId: null,
    replyId: null,
    startPoints: [
      {
        address: '1600 Amphitheatre Pkwy, Mountain View',
        coords: {latitude: 37.422, longitude: -122.084},
        typeDate: 'single',
        dateMls: MOCK_START_DATE,
      },
    ],
    endPoints: [
      {
        address: 'Shoreline Amphitheatre, Mountain View',
        coords: {latitude: 37.426, longitude: -122.081},
        typeDate: 'single',
        dateMls: MOCK_END_DATE,
      },
    ],
    route: {distance: '3.2'},
  },
  {
    id: 'mock-2',
    userId: 'mock-user-2',
    name: 'Рефрижератор в Palo Alto',
    transportType: 'Рефрижератор',
    price: 10000,
    status: 'publish',
    driverId: null,
    replyId: null,
    startPoints: [
      {
        address: 'Palo Alto, CA',
        coords: {latitude: 37.4419, longitude: -122.143},
        typeDate: 'single',
        dateMls: MOCK_START_DATE,
      },
    ],
    endPoints: [
      {
        address: 'Stanford, CA',
        coords: {latitude: 37.4275, longitude: -122.1697},
        typeDate: 'single',
        dateMls: MOCK_END_DATE,
      },
    ],
    route: {distance: '8.5'},
  },
  {
    id: 'mock-3',
    userId: 'mock-user-3',
    name: 'Контейнер в San Jose',
    transportType: 'Контейнер',
    price: 12000,
    status: 'in_work',
    driverId: null,
    replyId: null,
    startPoints: [
      {
        address: 'San Jose, CA',
        coords: {latitude: 37.3382, longitude: -121.8863},
        typeDate: 'single',
        dateMls: MOCK_START_DATE,
      },
    ],
    endPoints: [
      {
        address: 'Santa Clara, CA',
        coords: {latitude: 37.3541, longitude: -121.9552},
        typeDate: 'single',
        dateMls: MOCK_END_DATE,
      },
    ],
    route: {distance: '15.1'},
  },
  {
    id: 'mock-4',
    userId: 'mock-user-4',
    name: 'Изотерм в Sunnyvale',
    transportType: 'Изотерм',
    price: 11000,
    status: 'publish',
    driverId: null,
    replyId: null,
    startPoints: [
      {
        address: 'Sunnyvale, CA',
        coords: {latitude: 37.3688, longitude: -122.0363},
        typeDate: 'single',
        dateMls: MOCK_START_DATE,
      },
    ],
    endPoints: [
      {
        address: 'Cupertino, CA',
        coords: {latitude: 37.323, longitude: -122.0322},
        typeDate: 'single',
        dateMls: MOCK_END_DATE,
      },
    ],
    route: {distance: '5.4'},
  },
  {
    id: 'mock-5',
    userId: 'mock-user-5',
    name: 'Бортовой в Redwood City',
    transportType: 'Бортовой',
    price: 13000,
    status: 'publish',
    driverId: null,
    replyId: null,
    startPoints: [
      {
        address: 'Redwood City, CA',
        coords: {latitude: 37.4852, longitude: -122.2364},
        typeDate: 'single',
        dateMls: MOCK_START_DATE,
      },
    ],
    endPoints: [
      {
        address: 'Menlo Park, CA',
        coords: {latitude: 37.453, longitude: -122.1817},
        typeDate: 'single',
        dateMls: MOCK_END_DATE,
      },
    ],
    route: {distance: '6.8'},
  },
  {
    id: 'mock-6',
    userId: 'mock-user-6',
    name: 'Самосвал в Fremont',
    transportType: 'Самосвал',
    price: 14000,
    status: 'publish',
    driverId: null,
    replyId: null,
    startPoints: [
      {
        address: 'Fremont, CA',
        coords: {latitude: 37.5485, longitude: -121.9886},
        typeDate: 'single',
        dateMls: MOCK_START_DATE,
      },
    ],
    endPoints: [
      {
        address: 'Hayward, CA',
        coords: {latitude: 37.6688, longitude: -122.0808},
        typeDate: 'single',
        dateMls: MOCK_END_DATE,
      },
    ],
    route: {distance: '12.3'},
  },
];
