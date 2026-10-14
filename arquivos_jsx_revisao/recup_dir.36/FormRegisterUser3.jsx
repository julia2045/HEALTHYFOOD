import React, { useState } from 'react'
import InputForms from './InputForms'
import Styles from './FormLayout.module.css'

const FormRegisterUser = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    street: '',
    number_home: '',
    neighborhood: '',
    city: '',
    state: '',
    zip_code: '',
  })

  const [formErrors, setFormErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
    setFormErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }))
  }

  // const validateForm = () => {
  //   const errors = {}
  //   const { name, email, password, phone, street, number_home, neighborhood, city, state, zip_code } = formValues

  //   if (!name.trim()) errors.name = 'Nome √© obrigat√≥rio.'
  //   if (!email.trim()) {
  //     errors.email = 'Email √© obrigat√≥rio.'
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     errors.email = 'Digite um email v√°lido.'
  //   }
  //   if (!password) {
  //     errors.password = 'Senha √© obrigat√≥ria.'
  //   } else if (password.length < 6) {
  //     errors.password = 'A senha precisa ter pelo menos 6 caracteres.'
  //   }
  //   if (!phone.trim()) errors.phone = 'Telefone √© obrigat√≥rio.'
  //   if (!street.trim()) errors.street = 'Rua √© obrigat√≥ria.'
  //   if (!number_home.trim()) errors.number_home = 'N√∫mero da casa √© obrigat√≥rio.'
  //   if (!neighborhood.trim()) errors.neighborhood = 'Bairro √© obrigat√≥rio.'
  //   if (!city.trim()) errors.city = 'Cidade √© obrigat√≥ria.'
  //   if (!state.trim()) errors.state = 'Estado √© obrigat√≥rio.'
  //   if (!zip_code.trim()) {
  //     errors.zip_code = 'CEP √© obrigat√≥rio.'
  //   } else if (!/^\d+$/.test(zip_code)) {
  //     errors.zip_code = 'CEP deve conter apenas n√∫meros.'
  //   }

  //   return errors
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const errors = validateForm()
    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      console.log('Dados do usu√°rio:', formValues)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={Styles.registerUserForm}>
      <section className={Styles.formSection}>
        <h2 className={Styles.formSectionTitle}>Dados pessoais</h2>
        <InputForms
          label="Nome"
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          error={formErrors.name}
        />
        <InputForms
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          error={formErrors.email}
        />
        <InputForms
          label="Senha"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          error={formErrors.password}
        />
        <InputForms
          label="Telefone"
          name="phone"
          type="tel"
          value={formValues.phone}
          onChange={handleChange}
          error={formErrors.phone}
        />
      </section>

      <section className={Styles.formSection}>
        <h2 className={Styles.formSectionTitle}>Endere√ßo</h2>
        <InputForms
          label="Rua"
          name="street"
          type="text"
          value={formValues.street}
          onChange={handleChange}
          error={formErrors.street}
        />
        <InputForms
          label="N√∫mero"
          name="number_home"
          type="text"
          value={formValues.number_home}
          onChange={handleChange}
          error={formErrors.number_home}
        />
        <InputForms
          label="Bairro"
          name="neighborhood"
          type="text"
          value={formValues.neighborhood}
          onChange={handleChange}
          error={formErrors.neighborhood}
        />
        <InputForms
          label="Cidade"
          naÃÃÃÃÃÃÃÃÃÃÃÃÃÃÃÃHçâX