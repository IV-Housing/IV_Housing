import React from "react";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import { select, text } from "@storybook/addon-knobs";

export default {
  title: "Layout",
  component: Layout,
};


export const simplelayout = () => {
  const content = text("Sample Content", "This is sample content");
  return (
    <Layout children={content}>
      <Container className="py-3">{content}</Container>
    </Layout>
  );
};