import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skyeng',
  templateUrl: './skyeng.component.html',
})
export class SkyengComponent implements OnInit {

  constructor() { }

  teachers: any[] = [];

  ngOnInit(): void {

  }

  // // перевод полей
  // public translate(teachers: any) {
  //   const res = teachers;
  //   res.data.forEach((field: any) => {
  //     field.advantages = field.advantages.map((code: any) => code = JSON.stringify(code.code))
  //   });
  //   return teachers
  // }


  // // фильтрация по полю
  // public filterByField(teachers: any, field: string, value: any) {
  //   const res = teachers;
  //   res.data.forEach((field: any) => field[field] === value);
  // }


  // public sortByHappyStudents(teachers: any) {
  //   const keyWord = ['ученика', 'учеников']
  //   const res = teachers.data.filter((field: any) => {
  //     return field.advantages.some((code: any) => keyWord.some(word => code.includes(word)));
  //   }).map((field: any) => ({ ...field, advantages: field.advantages.filter((advantage: any) => keyWord.some(word => advantage.includes(word))) }))
  //     .map((field: any) => ({ name: field.name, surname: field.surname, age: field.age, countHappyStudents: field.advantages[0] }));
  //   return res;

  // }

  public parseTeachers(teachers: any) {
    const keyWord = ['ученика', 'учеников'];
    const res = teachers
    .map((field: any) => ({ ...field, advantages: field.advantages.filter((advantage: {code: string}) => keyWord.some(word => advantage.code.includes(word))) }))
      .map((field: any) => ({ ...field, advantages: Number(field.advantages[0]?.code.match(/\d+/)[0] || '0') }))
    return res;

  }

  uploadFile(event: any) {
    const selectedFile = event.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, "UTF-8");
    fileReader.onload = () => {
      this.teachers = this.teachers.concat(this.parseTeachers(JSON.parse(fileReader.result?.toString() as string).data));
    }
    console.log(this.teachers)
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

}
