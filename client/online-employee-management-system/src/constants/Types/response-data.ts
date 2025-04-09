export type leaveData = {
  _id: string;
  firstName: string;
  lastName: string;
  employeeId: number;
  designation: string;
  department: string;
  regdNo: string;
  email: string;
  leaveType: string;
  leaveReason: string;
  leaveDateFrom: string;
  leaveDateTo: string;
  leaveStatus: string;
};

export type employeeData = {
  _id: string;
  firstName: string;
  lastName: string;
  employeeId: number;
  designation: string;
  department: string;
  regdNo: string;
  email: string;
  username?: string;
  genderCode?: string;
  dateOfJoining?: string;
  workExperience?: number;
  dob?: string;
  employmentType?: string;
};

export type defaultData = {
  _id: string;
  firstName: string;
  lastName: string;
  employeeId: number;
  designation: string;
  username?: string;
  department: string;
  regdNo: string;
  email: string;
  attendanceId?: number;
  leaveType?: string;
  leaveReason?: string;
  leaveDateFrom?: string;
  leaveDateTo?: string;
  resignId?: number;
  reason?: string;
  status?: string;
  title?: string;
  message?: string;
};

export type attendanceData = {
  _id: string;
  attendanceId: number;
  employeeId: number;
  firstName: string;
  lastName: string;
  designation: string;
  regdNo: string;
};

export type notificationData = {
  _id: string;
  title: string;
  message: string;
};

export type Holiday = {
  name: string;
  date: string;
  localName: string;
}

export type resignData = {
  _id: string;
  resignId: number;
  regdNo: string;
  reason: string;
}

export type noticeData = {
  noticeId?: number;
  title: string;
  message: string;
}