export const vailidateData = (email, password) => {
  const emailvalid =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const passwordvalid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!emailvalid) return "email is not valid";
  if (!passwordvalid) return "password is not valid";
  if (email === password)
    return "Keeping email and password same it not allowed";

  return null;
};
