export const ValidateData = (
  email,
  password,
  firstName = "",
  lastName = ""
) => {
  // Email: must follow basic format (user@domain.tld)
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password: at least 8 chars, 1 upper, 1 lower, 1 number
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
    password
  );

  // Names: allow alphabets, spaces, apostrophes, and hyphens
  const isFirstNameValid = /^[A-Za-zÀ-ÿ'-]{2,}(?:\s[A-Za-zÀ-ÿ'-]+)*$/.test(
    firstName.trim()
  );
  const isLastNameValid = /^[A-Za-zÀ-ÿ'-]{2,}(?:\s[A-Za-zÀ-ÿ'-]+)*$/.test(
    lastName.trim()
  );

  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid)
    return "Password must contain at least 8 characters, one uppercase, one lowercase, and one number.";
  if (firstName && !isFirstNameValid)
    return "Enter a valid first name (letters only).";
  if (lastName && !isLastNameValid)
    return "Enter a valid last name (letters only).";

  return null;
};
