import Noty from "noty";

export const notifications = (text, action) => {
  let type = "";
  switch (action) {
    case "create":
      type = "success";
      break;
    case "update":
      type = "info";
      break;
    case "delete":
      type = "information";
      break;
    default:
      break;
  }

  return new Noty({ theme: "sunset", text, type, timeout: 3000 });
};
