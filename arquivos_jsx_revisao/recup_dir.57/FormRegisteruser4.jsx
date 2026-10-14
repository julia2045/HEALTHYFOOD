import React from 'react'
import InputForms from './InputForms'
import Styles from './FormLayout.module.css'
import { useForm } from '../Hooks/useForm'
import {validateForms} from '../Utils/ValidateForms'
import {createUser} from '../../Api'
import Dish from '../../assets/Bottom/prato.png'
import Bottom2 from '../../assets/Bottom/FolhaInferiorEsquerda.png'
import Bottom from '../../assets/Bottom/folhaSuperiorEsquerda.png'


const initialValues = {
  account_id: '',
  street: '',
  number_home: '',
  neighborhood: '',
  city: '',
  state: '',
  zip_code: '',
}

const FormRegisterUser = () => {
  // const [formValues, setFormValues] = useState({
  //   name: '',
  //   password: '',
  //   street: '',
  //   number_home: '',
  //   neighborhood: '',
  //   city: '',
  //   state: '',
  //   zip_code: '',
  // })

  // const [formErrors, setFormErrors] = useState({})

  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setFormValues((currentValues) => ({
  //     ...currentValues,
  //     [name]: value,
  //   }))
  //   setFormErrors((currentErrors) => ({
  //     ...currentErrors,
  //     [name]: '',
  //   }))
  // }

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

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const errors = validateForm()
  //   setFormErrors(errors)

  //   if (Object.keys(errors).length === 0) {
  //     console.log('Dados do usuário:', formValues)
  //   }
  // }

  const { formValues, formErrors, handleChange, handleSubmit,setFormValues } =
    useForm(initialValues, validateForms)

  const onSubmit = async (data) => {
    try {
      const storedAccountId = Number(data.account_id || localStorage.getItem('account_id'))

      if (!storedAccountId) {
        alert('Nenhuma conta cadastrada foi encontrada. Faça primeiro o cadastro da conta.')
        return
      }

      const payload = {
        account_id: storedAccountId,
        street: data.street,
        number_home: data.number_home,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code,
      }

      const result = await createUser(payload)

      console.log('Usuário criado:', result)
      alert('Cadastro realizado com sucesso!')
      setFormValues({ ...initialValues, account_id: storedAccountId })
    } catch (error) {
      console.error(error)
      alert(error.message || 'Erro ao criar usuário')
    }
  }


  return (
    <div className={ `${Styles.formContainerUser } ${Styles.formContainerBase}` }>
      <img className={`${Styles.pratoImage} ${Styles.decorativeImage} `} src={Dish} alt="Prato" />
      <img className={`${Styles.bottomImage2} ${Styles.decorativeImage} `} src={Bottom2} alt="Folhas 2" />
      <img className={`${Styles.bottomImage} ${Styles.decorativeImage} `} src={Bottom} alt="Folhas 1" />
      <form onSubmit={handleSubmit(onSubmit)} className={Styles.registerDataForm}>
  
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
    </div>
  )
}

export default FormRegisterUser
