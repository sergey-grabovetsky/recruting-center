export type Vacancy = {
  id: number;
  title: string;
  location: string;
  salary: string;
  unit: string;
  category: string;
  source: string;
  coords: [number, number];
};

export const vacancies: Vacancy[] = [
  {
    id: 1,
    title: "Молодша медична сестра",
    location: "Одеська область",
    salary: "за умовами підрозділу",
    unit: "4 прикордонний загін ДПСУ",
    category: "Медицина",
    source: "https://lobbyx.army/?sector=bordercontrol",
    coords: [46.48397152646382, 30.74267694714583],
  },
  {
    id: 2,
    title: "Молодший інспектор прикордонної служби",
    location: "Одеська область",
    salary: "за умовами підрозділу",
    unit: "Державна прикордонна служба України",
    category: "Інспекторська служба",
    source: "https://lobbyx.army/?sector=bordercontrol",
    coords: [46.40922598037708, 30.087526469879194],
  },
  {
    id: 3,
    title: "Водій автомобільного відділення",
    location: "Одеська область",
    salary: "за умовами підрозділу",
    unit: "17 прикордонний загін ДПСУ",
    category: "Водії та логістика",
    source: "https://lobbyx.army/?sector=bordercontrol",
    coords: [45.350888410401176, 28.849857169499558],
  },
  {
    id: 4,
    title: "Оператор розвідувального БПЛА",
    location: "Україна",
    salary: "за умовами підрозділу",
    unit: "10 мобільний прикордонний загін ДПСУ",
    category: "БПЛА",
    source: "https://lobbyx.army/?sector=bordercontrol",
    coords: [46.48397152646382, 30.74267694714583],
  },
  {
    id: 5,
    title: "Зовнішній пілот БПЛА",
    location: "Україна",
    salary: "за умовами підрозділу",
    unit: "10 мобільний прикордонний загін ДПСУ",
    category: "БПЛА",
    source: "https://lobbyx.army/?sector=bordercontrol",
    coords: [46.48397152646382, 30.74267694714583],
  },
  {
    id: 6,
    title: "Фахівець із радіотехнічної розвідки",
    location: "Україна",
    salary: "за умовами підрозділу",
    unit: "Державна прикордонна служба України",
    category: "Зв'язок і розвідка",
    source: "https://lobbyx.army/?sector=bordercontrol",
    coords: [46.48397152646382, 30.74267694714583],
  },
];
