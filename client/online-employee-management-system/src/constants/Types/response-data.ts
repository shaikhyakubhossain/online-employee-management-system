export type leaveData = {
  _id: string;
  firstName: string;
  lastName: string;
  employeeId: number;
  designation: string;
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
  regdNo: string;
  email: string;
  genderCode?: string;
  innovationScore?: number;
  leadershipScore?: number;
  managerRating?: number;
  overtimeScore?: number;
  performanceScore?: number;
};

export type defaultData = {
  _id: string;
  firstName: string;
  lastName: string;
  employeeId: number;
  designation: string;
  regdNo: string;
  email: string;
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