export const convertDateFormat = (dob) => {
  const [day, month, year] = dob.split("/");
  return `${year}-${month}-${day}`;
};

export const calculateAge = (dob) => {
  if (!dob) return "N/A";

  const formattedDob = convertDateFormat(dob);
  const birthDate = new Date(formattedDob);
  if (isNaN(birthDate.getTime())) return "Invalid Date";

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
