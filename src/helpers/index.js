import { createAccountRoutes, modulesRoutes } from "routes/routes-list";

/* Return a string based on error response received from the server */
export const parseError = error => {
  let err = "";

  try {
    if (error.response && error.response.data) {
      if (error.response.data.message && typeof error.response.data.message === "string") {
        err = error.response.data.message;
      } else {
        Object.keys(error.response.data.message).map(
          key => (err += `${key.split("_")} ${error.response.data.message[key]} `)
        );
      }
    }
    return "Failure: " + typeof error === "string" ? error : err ? err : error.message || "Please check your Network";
  } catch (error) {
    return error.message;
  }
};

/* Check if all keys in an object are given a truthy value
Throw an error if any key is falsy */
export const validateObject = obj => {
  let err = "";
  for (let item in obj) {
    if (!!obj[item].trim() === false) {
      err += item + " is required\n";
    }
  }

  if (!!err) throw Error(err);
};

export const generateString = () => {
  const str = Math.random().toString(36).substring(7);

  return str;
};

export const maybePluralize = (count, noun, suffix = "s") => `${count} ${noun}${count !== 1 ? suffix : ""}`;

export const timeDifference = (date1, date2) => {
  let difference = date1.getTime() - date2.getTime();

  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  return daysDifference;
};

export const checkUserRole = (user, path, history) => {
  const acc_type = {
    CITIZEN: "citizen",
    MINISTRY: "mda",
    CONTRACTOR: "contractors"
  };

  try {
    if (user.is_authenticated) {
      const account_type = `/${acc_type[user.user.account_type]}`;

      if (
        window.location.pathname === `${account_type}/create-account/${createAccountRoutes.screen2}` ||
        account_type !== path
      )
        history.push(`${account_type}/${modulesRoutes.screen2}`);
    }
  } catch (error) {
    console.log(error);
  }
};
