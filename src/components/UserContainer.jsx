/* eslint-disable no-useless-escape */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import * as Yup from 'yup'
import User from './User'

function UserContainer() {
  const [userData, setUserData] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const cookies = new Cookies()
  const { token, userId } = cookies.get('TokenCookie')

  useEffect(() => {
    try {
      // Get user
      axios
        .get(`${process.env.REACT_APP_API_DOMAIN}/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData({
            ...response.data.body,
            address: response.data.body?.address ? response.data.body.address : '',
            telephone: response.data.body?.telephone ? response.data.body.telephone : '',
          })
        })
    } catch (error) {
      setErrorStatus(error.response)
    }
  }, [])

  const submitModification = (values) => {
    try {
      axios
        .post(
          `${process.env.REACT_APP_API_DOMAIN}/user/${userId}`,
          {
            userId,
            name: values.name,
            surname: values.surname,
            email: values.email,
            address: values.address,
            telephone: values.telephone,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(() => confirm('Modificado con éxito'))
        .catch((error) => {
          setErrorStatus(error.response.status)
        })
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  const ValidationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Debe tener al menos 6 caracteres')
      .max(40, 'Debe tener como mucho 40 caracteres')
      .required('Obligatorio'),
    surname: Yup.string()
      .min(3, 'Debe tener al menos 6 caracteres')
      .max(40, 'Debe tener como mucho 40 caracteres')
      .required('Obligatorio'),
    email: Yup.string().email('Dirección de mail inválida').required('Obligatorio'),
    address: Yup.string()
      .min(3, 'Debe tener al menos 6 caracteres')
      .max(40, 'Debe tener como mucho 40 caracteres'),
    telephone: Yup.string()
      .min(3, 'Debe tener al menos 6 caracteres')
      .max(40, 'Debe tener como mucho 40 caracteres'),
  })

  return (
    <div>
      {userData && (
        <User
          onSubmit={submitModification}
          error={errorStatus}
          initialValues={userData}
          validation={ValidationSchema}
        />
      )}
    </div>
  )
}

export default UserContainer
