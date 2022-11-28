import React from 'react'
import { Formik, Form } from 'formik'
import InputField from './InputField'

function User({
  onSubmit, error, initialValues, validation,
}) {
  return (
    <div className="flex flex-row w-full mt-0 sm:mt-12">
      <div className="py-12 flex-1">
        <div className="flex bg-gray-100 rounded-lg shadow-2xl overflow-hidden mx-auto max-w-xs md:max-w-lg lg:max-w-xl">
          <div className="w-full p-8 bg-purple-50">
            <h1 className="mb-8 text-2xl font-semibold text-gray-600 text-center">Tus Datos</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validation}
              onSubmit={(values) => onSubmit(values)}
            >
              {/* Display the form */}
              <Form>
                <InputField label="Nombre" name="name" type="text" />

                <InputField label="Apellido" name="surname" type="text" />

                <InputField label="Email" name="email" type="email" />

                <InputField label="Dirección" name="address" type="address" />

                <InputField label="Teléfono" name="telephone" type="telephone" />

                <div className="mt-8">
                  {/* Show submit button */}
                  <button
                    className="bg-indigo-500 text-white font-bold py-2 px-4 w-full rounded-lg hover:bg-indigo-400"
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
                {/* Show possible submit errors */}
                {error && <span className="text-red-500 text-sm">{error}</span>}
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
