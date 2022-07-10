import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  IGender,
  IGrade,
  ICertifChecks,
  IEnglishKnowledge,
  IWorkExp,
  IConsentLetter,
} from "../shared/models";

@Component({
  selector: "app-simple-reactive-form",
  templateUrl: "./simple-reactive-form.component.html",
  styleUrls: ["./simple-reactive-form.component.scss"],
})
export class SimpleReactiveFormComponent implements OnInit {
  //#region Vars
  isWorkExpAvailable: boolean = false;

  gender: IGender[] = [
    {
      code: 0,
      name: "انتخاب کنید",
      inactive: true,
    },
    {
      code: 1,
      name: "مرد",
    },
    {
      code: 2,
      name: "زن",
    },
  ];

  educationGrade: IGrade[] = [
    {
      code: 0,
      name: "انتخاب کنید",
      inactive: true,
    },
    { name: "زیر دیپلم", code: 1 },
    { name: "دیپلم", code: 2 },
    { name: "فوق دیپلم", code: 3 },
    { name: "کارشناسی", code: 4 },
    { name: "کارشناسی ارشد", code: 5 },
    { name: "دکتری", code: 6 },
  ];

  stockCertificatesChecks: Array<ICertifChecks> = [
    { description: "اصول بازار سرمایه", value: false },
    { description: "مدیریت نهادهای بازار سرمایه", value: false },
    { description: "کارشناسی عرضه و پذیرش", value: false },
    { description: "تحلیل گری بازار سرمایه", value: false },
    { description: "ارزشیابی اوراق بهادار ", value: false },
    { description: "مدیریت سبد اوراق بهادار", value: false },
    { description: "معامله گری بازار سرمایه", value: false },
  ];

  englishKnowledge: Array<IEnglishKnowledge> = [
    {
      code: 0,
      name: "انتخاب کنید",
      inactive: true,
    },
    { code: 1, name: "عالی" },
    { code: 2, name: "خوب" },
    { code: 3, name: "متوسط" },
    { code: 4, name: "ضعیف" },
  ];

  workExperience: Array<IWorkExp> = [
    {
      code: 0,
      name: "انتخاب کنید",
      inactive: true,
    },
    { code: 1, name: "دارم" },
    { code: 2, name: "ندارم" },
  ];

  consentLetter: Array<IConsentLetter> = [
    {
      code: 0,
      name: "انتخاب کنید",
      inactive: true,
    },
    { code: 1, name: "دارم" },
    { code: 2, name: "ندارم" },
  ];

  //#endregion

  constructor() {}

  //#region Form Group
  mainFormGroup: FormGroup = new FormGroup({
    personalInfo: new FormGroup({
      gender: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      birthDate: new FormControl("", [Validators.required]),
      placeOfBirth: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      nationalCode: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
      ]),
      marriageStatus: new FormControl("", [Validators.required]),
      lodging: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      neighborhood: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      phoneNumber: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.email,
      ]),
    }),
    educationalInfo: new FormGroup({
      lastEducationalGrade: new FormControl("", [Validators.required]),
      major: new FormControl("", [Validators.required]),
      nameOfFacility: new FormControl("", [Validators.required]),
      facilityLocation: new FormControl("", [Validators.required]),
      graduationDate: new FormControl("", [Validators.required]),
      stockCertificates: new FormControl("", [Validators.required]),
      otherCertificates: new FormControl("", [Validators.required]),
      englishKnowledge: new FormControl("", [Validators.required]),
    }),
    workExperience: new FormGroup({
      availability: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      captchaCode: new FormControl("", [Validators.required]),
      job1: new FormGroup({
        companyName: new FormControl("", [Validators.required]),
        fieldOfActivity: new FormControl("", [Validators.required]),
        jobTitle: new FormControl("", [Validators.required]),
        startDate: new FormControl("", [Validators.required]),
        endDate: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        consentLetter: new FormControl("", [Validators.required]),
      }),
      job2: new FormGroup({
        companyName: new FormControl("", [Validators.required]),
        fieldOfActivity: new FormControl("", [Validators.required]),
        jobTitle: new FormControl("", [Validators.required]),
        startDate: new FormControl("", [Validators.required]),
        endDate: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        consentLetter: new FormControl("", [Validators.required]),
      }),
    }),
  });

  //#endregion

  ngOnInit(): void {
    this.mainFormGroup.valueChanges.subscribe((res) => {
      this.checkWorkExpValue(res);
    });
  }
  //#region public Methods

  submit() {
    console.log(this.mainFormGroup.value);
    console.log(this.mainFormGroup.get("personalInfo.firstName"));

  }

  //#endregion

  private checkWorkExpValue(res: any) {
    if (res.workExperience.availability.code === 1) {
      this.isWorkExpAvailable = true;
    } else {
      this.isWorkExpAvailable = false;
    }
  }
}
