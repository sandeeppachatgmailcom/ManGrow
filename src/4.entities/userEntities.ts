export interface academic {
  course: string;
  starDate: Date;
  endDate: Date;
  mark: number;
  institute: string;
}

export interface jobHistory {
  jobId: string;
  organaisation: string;
  startYear: Date;
  endYear: Date;
  role: string;
}
export interface address {
  houseName: string;
  houseNUmber: string;
  streetName: string;
  city: string;
  pincode: string;
}

export interface userEntity {
  humanid: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  fatherName: string;
  motherName: string;
  mob: string;  
  email: string;
  web: string;
  role?: "user" | "instructor" | "admin";
  status?: "active" | "dead";
  deleted: boolean;
  verified: boolean;
  profileImage: string;
  approvedBy: string;
  approvedDate: Date;
  lastRevokeDate: Date;
  password:string,
  address?: address[];
  academics?: academic[];
  jobHistory?: jobHistory[];
}

