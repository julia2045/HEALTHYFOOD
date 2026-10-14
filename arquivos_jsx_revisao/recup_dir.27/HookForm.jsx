import { useState } from 'react'

// Hook genérico para formulários
//aqui passo os parametros necessários para o hook funcionar, como os valores iniciais e a função de validação
export const useForm = (initialValues, validate = () => ({})) => {
    //aqui crio os estados para armazenar os valores do formulário e os erros de validação
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})


  // Atualiza os inputs
  const handleChange = (event) => {
    //aqui pego o nome e o valor do input que foi alterado
    const { name, type, value, checked } = event.target
  const fieldValue = type === "checkbox" ? checked : value

    //aqui atualizo o estado dos valores do formulário, usando o nome do input como chave e o valor como valor
    setFormValues((prev) => ({
      ...prev,
      [name]: fieldValue,
    }))

    // limpa erro do campo ao digitar novamente
    setFormErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  // Submit genérico
  //aqui crio uma função que recebe outra função, assim para cada form eu crio um submit diferente, mas a base sendo a mesma.
  const handleSubmit = (callback) => (event) => {
    //previno  envio
    event.preventDefault()

    //aqui chamo a função de validação, passando os valores do formulário, e armazeno os erros retornados
    const errors = validate(formValues)
    setFormErrors(errors)

    //aqui dou a condição pegando os erros, se não tiver nenhum erro, ou seja, o objeto de erros estiver vazio, eu chamo a função de callback, passando os valores do formulário
    if (Object.keys(errors).length === 0) {
      callback(formValues)
    }
  }

  return {
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
    setFormValues, // opcional (bom pra reset)
  }
}