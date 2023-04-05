import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ResumeInfo{
  getFirstSkills(): string[]{
    return [
      'C#', '.NET Core', 'ADO.NET', 'MySQL', 'MSSQL', 'MongoDB', 'ASP.NET', 'REST API', 'SOAP'
    ];
  }

  getSecondSkills(): string[]{
    return [
      'Java', 'JPA', 'Hibernate', 'Spring', 'Unit Test', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'jQuery'
    ];
  }

  getExperience(): Experience[] {
    return [
      {date: '2016 - 2018', company: 'NWO Wektor Progressu', position: 'Division manager', discription: 'As a division manager, I needed to maintain complete control over my department, so I independently automated the calculations in my department in the Excel program using mathematical equations.'},
      {date: '2013 - 2016', company: 'NWO Wektor Progressu', position: 'Technological engineer', discription: 'As a plant engineer, I developed new epoxy formulations and calculated the amount of formulation for industrial  equipment.'},
      {date: '2012 - 2013', company: 'Private company "Speckontract"', position: 'Production master', discription: 'In an electric motor repair company I supervised the timely overhaul of AC and DC electric motors (winding replacement, epoxy impregnation, assembly).'},
      {date: '2000 - 2011', company: 'ArcelorMittal', position: 'Laboratory technician of chemical analysis', discription: 'At ArcelorMittal, I not only conducted chemical research, but also replaced a chemical analysis engineer.'}
    ]
  }
}

class Experience{
  date: string;
  company: string;
  position: string;
  discription: string;
  constructor(date: string, company: string, position: string, discription: string){
    this.date = date;
    this.company = company;
    this.position = position;
    this.discription = discription;
  }
}
