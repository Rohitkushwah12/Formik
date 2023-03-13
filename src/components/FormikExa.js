import { Formik } from "formik";
import React from "react";

const FormikExa = () => {
  return (
    <div>
      <h1>Formik Component Example</h1>
      <Formik
        initialValues={{ name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 100);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
            <button onClick={props.handleReset}>Reset</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikExa;
