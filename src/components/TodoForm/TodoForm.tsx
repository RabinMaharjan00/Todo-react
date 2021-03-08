import React from 'react'
import { object as YupObject, string as YupString } from "yup";
import { Formik } from "formik";
import FormikValidationError from "../FormikValidationError/FormikValidationError";

import crypto from 'crypto'

interface Props {
    saveTodo: (todo: Todo | any) => void
}
const TodoForm: React.FC<Props> = (props: Props) => {
    const { saveTodo } = props
    const initialValues = {
      todo: "",
    };
    const initialValuesValidationScheme = YupObject().shape({
      todo: YupString().required("Todo list name is required"),
    });
    function capitalizeFirstLetter(string:string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    const handleSubmit = (data:any,resetForm:any) => {
      let value: Todo = {
        id: crypto.randomBytes(16).toString("hex"),
        text: capitalizeFirstLetter(data.todo),
        completed: false,
      };
      saveTodo(value);
      resetForm();
    };

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={initialValuesValidationScheme}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {({ values, handleSubmit, handleChange, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                name="todo"
                value={values.todo}
                onChange={handleChange}
              />
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-primary btn-sm">
                  <i className="fas fa-paper-plane "></i>
                </button>
              </div>
            </div>
            <FormikValidationError
              name="todo"
              errors={errors}
              touched={touched}
            />
          </form>
        )}
      </Formik>
    );
}

export default TodoForm
