import React from "react";
import { select, text } from "@storybook/addon-knobs";
import Navbar from "../components/navbar";

export default {
  title: "Navbar",
  component: Navbar,
};

export const loggedOut = () => {
  return <Navbar />;
};

export const loggedIn = () => {
  const name = text("Name", "Phill Conrad");
  const role = select("Role", ["admin", "student", "guest"], "guest");
  const picture = text(
    "Image URL",
    "https://avatars3.githubusercontent.com/u/1119017"
  );
  const user = { name, role, picture };
  return <Navbar user={user} />;
};