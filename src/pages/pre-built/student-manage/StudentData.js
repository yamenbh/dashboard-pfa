import User3 from "../../../images/avatar/a-sm.jpg";

export const studentData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "Saida el baz",
    displayName: "saida",
    dob: "10 Aug, 1980",
    role: "etudiante",
    checked: false,
    email: "saida@gmail.com",
    balance: "35,040.34",
    phone: "0614255767",
    emailStatus: "success",
    kycStatus: "success",
    specialite: "marketing",
    filier: "4iir",
    niveau: "3",
    groupe: "g1",
    status: "Active",
    address: "2337 Kildeer Drive",
    state: "Kentucky",
    country: "Canada",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 2,
    avatarBg: "purple",
    image: User3,
    name: "fatima ait said",
    dob: "10 Sept, 1990",
    role: "etudiant",
    email: "fatima@gmail.com",
    balance: "580.00",
    checked: false,
    phone: "06142555767",
    emailStatus: "success",
    kycStatus: "pending",
    specialite: "marketing",
    filier: "4iir",
    niveau: "3",
    groupe: "g1",
    status: "Pending",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
];

export const filterStatus = [
  { value: "Active", label: "Active" },
  { value: "Pending", label: "Pending" },
  { value: "Suspend", label: "Suspend" },
];

export const filterRole = [
  { value: "investor", label: "Investor" },
  { value: "seller", label: "Seller" },
  { value: "buyer", label: "Buyer" },
];

export const countryOptions = [
  { value: "Canada", label: "Canada" },
  { value: "USA", label: "USA" },
  { value: "India", label: "India" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "France", label: "France" },
  { value: "England", label: "England" },
];
