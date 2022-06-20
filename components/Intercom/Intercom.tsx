import { useUser } from "features/users/queries";
import React from "react";
import ReactIntercom from "react-intercom";

const Intercom = () => {
  const { data: user } = useUser();
  if (user) {
    const intercomUser = {
      name: [user.firstName, user.lastName].join(" "),
      email: user.email,
      user_id: user._id,
    };
    return <ReactIntercom appID="g9ybuhz1" {...intercomUser} />;
  }
  return <ReactIntercom appID="g9ybuhz1" />;
};

export default Intercom;
