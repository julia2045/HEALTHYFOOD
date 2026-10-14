import React from "react";
import InputForms from "./InputForms";
import Styles from './FormLayout.module.css'
import { useForm } from "../Hooks/useForm";
import { createAccount } from '../../Api';
import { useNavigate } from 'react-router-dom'
import Dish from '../../assets/Bottom/prato.png'
import Bottom2 from '../../assets/Bottom/FolhaInferiorEsquerda.png'
import Bottom from '../../assets/Bottom/folhaSuperiorEsquerda.png'

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  role: "",
};

const FormRegister = () => {
  const {
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
    setFormValues,
  } = useForm(initialValues);
  
const navigate = useNavigate();
const onSubmit = async (data) => {

  try {
    // Envia os dados da conta para o backend. A senha será hasheada no servidor.
    // Normaliza o papel da conta para o valor esperado pelo backend.
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      role: data.role === 'usuario' ? 'user' : data.role === 'restaurante' ? 'restaurant' : data.role,
    };

    const result = await createAccount(payload);
    localStorage.setItem('account_id', String(result.id));
    alert('Cadastro realizado com sucesso!');
    navigate('/login')
    console.log('Conta criada:', result);
    setFormValues(initialValues);
  } catch (error) {
    console.error('Erro ao criar conta:', error);
    alert(error.message || 'Erro ao criar conta');
  }
};
return (
  <div className={`${Styles.formContainer} ${Styles.formContainerBase}`}>
    <img className={`${Styles.pratoImage} ${Styles.decorativeImage} ${Styles.dishImage}`} src={Dish} alt="Prato" />
    <img className={`${Styles.bottomImage2} ${Styles.decorativeImage} `} src={Bottom2} alt="Folhas 2" />
    <img className={`${Styles.bottomImage} ${Styles.decorativeImage} `} src={Bottom} alt="Folhas 1" />
    <form onSubmit={handleSubmit(onSubmit)} className={Styles.registerUseForm}>
      <section className={Styles.formSection}>
        <h1 className={Styles.formSectionTitle}>
          Realize seu cadastro!
        </h1>
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
          placeholder="contato@email.com"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          error={formErrors.email}
        />
        <InputForms
          label="Celular"
          placeholder="(00) 00000-0000"
          name="phone"
          type="number"
          value={formValues.phone}
          onChange={handleChange}
          error={formErrors}
        />
        <InputForms
          label="Senha"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          error={formErrors}
        />
        {/* Mantém o valor do papel compatível com a API. */}
        <select className={Styles.select} name="role" value={formValues.role} onChange={handleChange}>
          <option value="">Selecione o tipo de conta</option>
          <option value="user">Sou usuário</option>
          <option value="restaurant">Sou restaurante</option>
        </select>
        <button className={Styles.submitButton} type="submit">
          Cadastrar
        </button>
      </section>

    </form>
  </div>
);
};

export default FormRegister;
