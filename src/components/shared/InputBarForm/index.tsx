import { Form, Formik, FormikProps } from 'formik';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IconContext } from 'react-icons/lib';

interface InputBarFormProps {
  buttonText?: string;
  placeholder: string;
  Icon: React.ComponentType;
  handleSubmit: (values: FormValues) => void;
}

interface FormValues {
  message: string;
}

export const InputBarForm: React.FC<InputBarFormProps> = ({
  buttonText,
  placeholder,
  Icon,
  handleSubmit,
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const formInitialValues: FormValues = { message: '' };

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm({ status: 'Foo' });
      }}
    >
      {(formikProps: FormikProps<any>) => (
        <Form className="flex-1">
          <div className="flex flex-1 items-center bg-gray-100 dark:bg-gray-800 rounded h-10">
            <input
              type="text"
              name="message"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              placeholder={placeholder}
              autoComplete="off"
              className={`bg-gray-100 dark:bg-gray-800 rounded-bl rounded-tl flex-1 px-4 focus:outline-none h-full ${
                isInputFocused
                  ? 'border-2 border-purple-600'
                  : 'border-2 border-gray-100 dark:border-gray-800'
              }`}
              onChange={formikProps.handleChange('message')}
            />
            <button
              className="flex items-center justify-between bg-purple-600 hover:bg-purple-500 h-full py-2 px-3 rounded-br rounded-tr text-white hover:bg-purple-500 focus:outline-none"
              type="submit"
            >
              {Icon && (
                <IconContext.Provider value={{ className: `h-full w-5` }}>
                  <Icon />
                </IconContext.Provider>
              )}
              {buttonText && (
                <p className="hidden md:block md:ml-2">{buttonText}</p>
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
