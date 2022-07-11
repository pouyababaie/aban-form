import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  IGender,
  IGrade,
  ICertifChecks,
  IEnglishKnowledge,
  IWorkExp,
  IConsentLetter,
  IMiliteryStatus,
} from "../shared/models";

@Component({
  selector: "app-simple-reactive-form",
  templateUrl: "./simple-reactive-form.component.html",
  styleUrls: ["./simple-reactive-form.component.scss"],
})
export class SimpleReactiveFormComponent implements OnInit {
  public get personalInfoFG(): AbstractControl | null {
    return this.mainFormGroup.get("personalInfo");
  }

  public get educationalInfoFG(): AbstractControl | null {
    return this.mainFormGroup.get("educationalInfo");
  }

  public get job1FG(): AbstractControl | null {
    return this.mainFormGroup.get("workExperience.job1");
  }

  public get job2FG(): AbstractControl | null {
    return this.mainFormGroup.get("workExperience.job2");
  }
  //#region Vars
  isWorkExpAvailable: boolean = false;

  isBirthDateValid: boolean = false;

  isWorkExpDateValid: boolean = false;

  currentDate: Date = new Date();

  isPhoneNumberValid: boolean = false;

  isNationalCodeValid: boolean = false;

  captchaValue = 122354;

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

  militaryServiceStatus: Array<IMiliteryStatus> = [
    {
      code: 0,
      name: "انتخاب کنید",
      inactive: true,
    },
    { name: "پایان خدمت", code: 1 },
    { name: "معافیت دائم", code: 2 },
    { name: "معافیت موقت", code: 3 },
    { name: "انجام نداده", code: 4 },
    { name: "شامل نمیشوم", code: 5 },
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
        Validators.maxLength(10),
      ]),
      marriageStatus: new FormControl("", [Validators.required]),
      militeryStatus: new FormControl("", [Validators.required]),
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
        Validators.maxLength(10),
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
      stockCertificates: new FormControl(""),
      otherCertificates: new FormControl(""),
      englishKnowledge: new FormControl("", [Validators.required]),
    }),
    workExperience: new FormGroup({
      availability: new FormControl("", [Validators.required]),
      job1: new FormGroup({
        companyName: new FormControl("", [Validators.required]),
        fieldOfActivity: new FormControl("", [Validators.required]),
        jobTitle: new FormControl("", [Validators.required]),
        startDate: new FormControl("", [Validators.required]),
        endDate: new FormControl("", [Validators.required]),
        description: new FormControl(""),
        consentLetter: new FormControl(""),
      }),
      job2: new FormGroup({
        companyName: new FormControl("", [Validators.required]),
        fieldOfActivity: new FormControl("", [Validators.required]),
        jobTitle: new FormControl("", [Validators.required]),
        startDate: new FormControl("", [Validators.required]),
        endDate: new FormControl("", [Validators.required]),
        description: new FormControl(""),
        consentLetter: new FormControl(""),
      }),
    }),
    description: new FormControl(""),
    captchaCode: new FormControl("", [Validators.required]),
  });

  //#endregion

  ngOnInit(): void {
    this.mainFormGroup.valueChanges.subscribe((res: any) => {
      if (res.personalInfo.nationalCode) {
        this.checkNationalCodeValue(res.personalInfo.nationalCode.toString());
      }
      if (res.personalInfo.phoneNumber) {
        this.checkPhoneNumberLength(res.personalInfo.phoneNumber.toString());
      }
      this.checkWorkExpValue(res);
      this.checkBirthDateValue(res);
      this.checkWorkExpDatesValue(
        res.workExperience.job1,
        res.workExperience.job2
      );
    });
  }
  //#region public Methods

  submit() {
    console.log(this.mainFormGroup);
  }

  //#endregion

  private checkPhoneNumberLength(val: string) {
    if (val.length === 10) {
      this.isPhoneNumberValid = true;
    } else {
      this.isPhoneNumberValid=false;
    }
  }

  private checkNationalCodeValue(res: string) {
    if (res.length === 10) {
      this.isNationalCodeValid = true;
    } else {
      this.isNationalCodeValid = false;
    }
  }

  private checkWorkExpValue(res: any) {
    if (res.workExperience.availability.code === 1) {
      this.isWorkExpAvailable = true;
    } else {
      this.isWorkExpAvailable = false;
    }
  }

  private checkBirthDateValue(res: any) {
    if (res.personalInfo.birthDate) {
      let resDate: Date = new Date(res.personalInfo.birthDate);
      if (this.currentDate.getTime() < resDate.getTime()) {
        this.isBirthDateValid = false;
      } else {
        this.isBirthDateValid = true;
      }
    } else return;
  }

  private checkWorkExpDatesValue(job1: any, job2: any) {
    if (
      (job1.startDate =
        "" &&
        (job1.endDate = "") &&
        (job2.startDate = "") &&
        (job2.endDate = ""))
    ) {
      return;
    } else {
      let job1StartDate: Date = new Date(job1.startDate);
      let job1EndDate: Date = new Date(job1.endDate);
      let job2StartDate: Date = new Date(job1.startDate);
      let job2EndDate: Date = new Date(job1.endDate);

      if (
        job1StartDate > job1EndDate ||
        job1StartDate === job1EndDate ||
        job1StartDate > this.currentDate ||
        job1EndDate > this.currentDate
      ) {
        this.isWorkExpDateValid = false;
      }
      if (
        job2StartDate > job2EndDate ||
        job2StartDate === job2EndDate ||
        job2StartDate > this.currentDate ||
        job2EndDate > this.currentDate
      ) {
        this.isWorkExpDateValid = false;
      } else {
        this.isWorkExpDateValid = true;
      }
    }
  }
}
