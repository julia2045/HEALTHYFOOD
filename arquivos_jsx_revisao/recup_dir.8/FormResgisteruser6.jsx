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

  //   if (!name.trim()) errors.name = 'Nome é obrigatório.'
  //   if (!email.trim()) {
  //     errors.email = 'Email é obrigatório.'
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     errors.email = 'Digite um email válido.'
  //   }
  //   if (!password) {
  //     errors.password = 'Senha é obrigatória.'
  //   } else if (password.length < 6) {
  //     errors.password = 'A senha precisa ter pelo menos 6 caracteres.'
  //   }
  //   if (!phone.trim()) errors.phone = 'Telefone é obrigatório.'
  //   if (!street.trim()) errors.street = 'Rua é obrigatória.'
  //   if (!number_home.trim()) errors.number_home = 'Número da casa é obrigatório.'
  //   if (!neighborhood.trim()) errors.neighborhood = 'Bairro é obrigatório.'
  //   if (!city.trim()) errors.city = 'Cidade é obrigatória.'
  //   if (!state.trim()) errors.state = 'Estado é obrigatório.'
  //   if (!zip_code.trim()) {
  //     errors.zip_code = 'CEP é obrigatório.'
  //   } else if (!/^\d+$/.test(zip_code)) {
  //     errors.zip_code = 'CEP deve conter apenas números.'
  //   }

  //   return errors
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const errors = validateForm()
    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      console.log('Dados do usuário:', formValues)
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
        <h2 className={Styles.formSectionTitle}>Endereço</h2>
        <InputForms
          label="Rua"
          name="street"
          type="text"
          value={formValues.street}
          onChange={handleChange}
          error={formErrors.street}
        />
        <InputForms
          label="Número"
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
          name="city"
          type="text"
          value={formValues.city}
          onChange={handleChange}
          error={formErrors.city}
        />
        <InputForms
          label="Estado"
          name="state"
          type="text"
          value={formValues.state}
          onChange={handleChange}
          error={formErrors.state}
        />
        <InputForms
          label="CEP (somente números)"
          name="zip_code"
          type="text"
          value={formValues.zip_code}
          onChange={handleChange}
          error={formErrors.zip_code}
        />
      </section>

      <button className={Styles.submitButton} type="submit">
        Enviar cadastro
      </button>
    </form>
  )
}

export default FormRegisterUser
