 const validateForm = () => {
    const errors = {}
    const { name, email, password, phone, street, number_home, neighborhood, city, state, zip_code } = formValues

    if (!name.trim()) errors.name = 'Nome é obrigatório.'
    if (!email.trim()) {
      errors.email = 'Email é obrigatório.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Digite um email válido.'
    }
    if (!password) {
      errors.password = 'Senha é obrigatória.'
    } else if (password.length < 6) {
      errors.password = 'A senha precisa ter pelo menos 6 caracteres.'
    }
    if (!phone.trim()) errors.phone = 'Telefone é obrigatório.'
    if (!street.trim()) errors.street = 'Rua é obrigatória.'
    if (!number_home.trim()) errors.number_home = 'Número da casa é obrigatório.'
    if (!neighborhood.trim()) errors.neighborhood = 'Bairro é obrigatório.'
    if (!city.trim()) errors.city = 'Cidade é obrigatória.'
    if (!state.trim()) errors.state = 'Estado é obrigatório.'
    if (!zip_code.trim()) {
      errors.zip_code = 'CEP é obrigatório.'
    } else if (!/^\d+$/.test(zip_code)) {
      errors.zip_code = 'CEP deve conter apenas números.'
    }

    return errors
  }

  export default validateForm