import User3 from "../../../images/avatar/a-sm.jpg";

export const userData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "Aymane Ait El Bhiri",
    displayName: "aymane",
    dob: "10 Aug, 1980",
    role: "Customer",
    checked: false,
    email: "info@softnio.com",
    balance: "35,040.34",
    phone: "818474958",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "10 Feb 2020",
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
    name: "Ashley Lawson",
    dob: "10 Sept, 1990",
    role: "Investor",
    email: "ashley@softnio.com",
    balance: "580.00",
    checked: false,
    phone: "1243941787",
    emailStatus: "success",
    kycStatus: "pending",
    lastLogin: "07 Feb 2020",
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
