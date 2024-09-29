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
  leaveStatus?: string;
};
