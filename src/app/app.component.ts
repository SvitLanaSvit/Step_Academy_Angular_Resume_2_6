import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullname: string = 'Svitlana Kizilpinar';
  title: string = 'Software developer';
  aboutMySelf: string = 'You can only see me as a purposeful, reliable, responsible and hardworking person. I like to work in a team, as I had experience in developing a project in a team, as well as experience working in a team with subordinates from a regular job. She also worked on projects independently. I am a stress-resistant person and I have a clear understanding of meeting deadlines, as I also had deadlines at work in my previous job. My goal is to develop as a developer as best as possible, and to make a great contribution to the work. There is no final point of development in this area and this is exactly what I need, namely to move forward and towards improvements.';
  fotoUrl: string = '../assets/MyFoto.jpg';
  titleContact: string[] = ['Contact', 'Education', 'Skills', 'Language'];
  contact: Contact[] = [
    {name: 'Phone', discription: '015214393603'},
    {name: 'Email', discription: 'svitlana.kizilpinar@gmail.com'},
    {name: 'Address', discription: 'Am Brodhagen, 108B, Bielefeld, 33613'}
  ];
  education: Education[] = [
    {discription: 'Backend', name: 'Tel-Ran.de GmbH - Berlin', date: 'September 2022 to present'},
    {discription: 'Software-Entwicklung', name: 'IT Academy Step of Ukraine', date: 'March 2021 to present'},
    {discription: 'Chemieingenieurwesen', name: 'NMetAU', date: 'September 1998 to July 2004'}
  ];
  skillsFirst: string[] = [
    'C#', '.NET Core', 'ADO.NET', 'MySQL', 'MSSQL', 'MongoDB', 'ASP.NET', 'REST API', 'SOAP'
  ];
  skillsSecond: string[] = [
    'Java', 'JPA', 'Hibernate', 'Spring', 'Unit Test', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'jQuery'
  ]
  languages: string[] = [
    'Germany - B1', 'English - A2', 'Russian - C1', 'Ukrainian - C2'
  ]
  rigthTitles: string[] = ['Experience', 'Reference'];
  experiences: Experience[] =[
    {date: '2016 - 2018', company: 'NWO Wektor Progressu', position: 'Division manager', discription: 'As a division manager, I needed to maintain complete control over my department, so I independently automated the calculations in my department in the Excel program using mathematical equations.'},
    {date: '2013 - 2016', company: 'NWO Wektor Progressu', position: 'Technological engineer', discription: 'As a plant engineer, I developed new epoxy formulations and calculated the amount of formulation for industrial  equipment.'},
    {date: '2012 - 2013', company: 'Private company "Speckontract"', position: 'Production master', discription: 'In an electric motor repair company I supervised the timely overhaul of AC and DC electric motors (winding replacement, epoxy impregnation, assembly).'},
    {date: '2000 - 2011', company: 'ArcelorMittal', position: 'Laboratory technician of chemical analysis', discription: 'At ArcelorMittal, I not only conducted chemical research, but also replaced a chemical analysis engineer.'}
  ];
  reference: Reference = {title: 'My GitHub page', ref: 'https://github.com/SvitLanaSvit', qr: '../assets/GitHubPage.png'};
}

class Contact{
  name: string;
  discription: string;
  constructor(name: string, discription: string){
    this.name = name;
    this.discription = discription;
  }
}

class Education{
  name: string;
  discription: string;
  date: string;
  constructor(discription: string, name: string,  date: string){
    this.name = name;
    this.discription = discription;
    this.date = date;
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

class Reference{
  title: string;
  ref: string;
  qr: string;
  constructor(title: string, ref: string, qr: string){
    this.title = title;
    this.ref = ref;
    this.qr = qr;
  }
}
