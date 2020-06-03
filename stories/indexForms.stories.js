import IndexForms from "../components/forms/indexForms";

export default {
  title: "IndexForms",
  component: IndexForms,
};

export const simple_indexForms = () => {
  return <IndexForms filter={()=>{}}/>;
};