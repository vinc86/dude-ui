import React, { FC /* , useContext */, ReactNode } from "react";
import styled from "styled-components";
import { styles } from "../Styles";
// import { FormContext, FormValues } from "./CustomFormProvider";

type FormProps = {
  children?: ReactNode;
  props?: React.FormHTMLAttributes<HTMLFormElement>;
  /* controller: (
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    formValues?: FormValues | null
  ) => JSX.Element; */
};
export const Form: FC<FormProps> = ({ children, props }) => {
  /* const { formValues, setFormValues } = useContext(FormContext);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {

    setFormValues({
      ...formValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(formValues);
  };
  const initialValue: FormValues = {};
  controller(onChange).props.children.map((el: any) => {
    if (el.type.name === "Button") {
      return;
    }
    initialValue[el.props.name] = "";
  }); */

  /* const defaultData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    phone: "",
  }; */
  // const [formValues, setFormValues] = useState({});

  // const onValueChange = (e: React.FormEvent<HTMLInputElement>) => {};

  /* const checkEmptyFields = (userObj: RegisterInput) => {
    AddUserSchema.parse(userObj);
  }; */
  /* const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }; */
  return (
    <FormComponent {...props}>
      <Content>{/* controller(onChange, formValues) */ children}</Content>
    </FormComponent>
  );
};

const FormComponent = styled.form`
  margin: 10px auto;
  border: 1px solid ${styles.colors.silver};
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  padding: 30px 10px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  margin: auto;
`;
