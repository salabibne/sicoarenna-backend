export class CreateFormDto {
  sportsAndPerson: {
    sportsCategory: string;
    person: string;
  };
  dateAndtime: {
    date: string;
    time: string;
    place: string;
  };
  personalInformation: {
    name: string;
    email: string;
    pn: string;
  };
}
