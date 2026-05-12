export type Vacancy = {
  id: number;
  title: string;
  location: string;
  salary: string;
  unit: string;
  coords: [number, number];
};

export const vacancies: Vacancy[] = [
  {
    id: 1,
    title: "Прикордонник-інспектор",
    location: "Одеса",
    salary: "від 21 000 грн",
    unit: "ВПС ",
    coords: [46.48397152646382, 30.74267694714583],
  },
  {
    id: 2,
    title: "Водій",
    location: "Вилкове",
    salary: "від 23 000 грн",
    unit: "ВПС ",
    coords: [45.39887800410044, 29.591135715936264],
  },
  {
    id: 3,
    title: "Оператор БПЛА",
    location: "Ізмаїл",
    salary: "від 25 000 грн",
    unit: "ВПС ",
    coords: [45.350888410401176, 28.849857169499558],
  },
  {
    id: 4,
    title: "Слюсар-електрик",
    location: "Паланка",
    salary: "від 22 000 грн",
    unit: "ВПС ",
    coords: [46.40922598037708, 30.087526469879194],
  },
];