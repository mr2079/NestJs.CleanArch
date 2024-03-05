export class UserDto {
  constructor(
    userName: string,
    firstName: string | null,
    lastName: string | null,
    phoneNumber: string | null,
    email: string | null,
  ) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  id: string | null;
  createDate: Date | null;
  updateDate: Date | null;
  
  userName: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  email: string | null;
}
