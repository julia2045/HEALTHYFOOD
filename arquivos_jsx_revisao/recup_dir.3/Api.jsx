//Api para enviar os dados do form de cadastro de usuarios para o backend
export const createUser = async (data) => {
  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao criar usuário");
  }

  return result;
};

// API para criar conta (accounts)
export const createAccount = async (data) => {
  const response = await fetch("http://localhost:3001/accounts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao criar conta");
  }

  return result;
};

//Api para enviar os dados do form de cadastro de pratos para o backend
export const createDish = async (data) => {
  const response = await fetch("http://localhost:3001/dishes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao criar prato");
  }

  return result;
};
//Api para enviar os dados do form de cadastro de alergias para o backend
export const createDishAllergen = async (data) => {
  const response = await fetch("http://localhost:3001/dish_allergens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao cadastrar alergia");
  }

  return result;
};

//api para enviar os dados de login do usuario para o backend

export const loginUser = async (email, password) => {
  const response = await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao fazer login");
  }

  return result;
};

//API PARA ENVIAR OS DADOS DE LOGIN DO RESTAURANTE PARA O BACKEND

export const loginRestaurant = async (email, password) => {
  // Envia as credenciais do restaurante para a autenticação do backend.
  const response = await fetch("http://localhost:3001/auth/login-restaurant", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  // Converte a resposta do servidor para JSON com fallback para objeto vazio.
  const result = await response.json().catch(() => ({}));

  // Se a autenticação falhar, mostra a mensagem detalhada retornada pela API.
  if (!response.ok) {
    throw new Error(result.error || result.message || "Erro ao fazer login do restaurante");
  }

  return result;
};

//api para enviar dados do usuario do google para o backend
export const loginSocial = async (user) => {
  const response = await fetch("http://localhost:3001/register-social", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: user.displayName,
      email: user.email,
      provider: "google",
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao fazer login social");
  }

  return result;
};
// ===== GOALS / PREFERENCES =====

// Criar novas metas/preferências
export const createGoals = async (userId, data) => {
  const response = await fetch("http://localhost:3001/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: userId,
      daily_calories: data.caloriasDiarias,
      daily_protein: data.proteinas,
      daily_meals: data.quantidadeRefeicoes,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao criar metas");
  }

  return result;
};

// Buscar metas/preferências do usuário
export const getGoals = async (userId) => {
  const response = await fetch(`http://localhost:3001/goals/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao buscar metas");
  }

  return result;
};

// Atualizar metas/preferências do usuário
export const updateGoals = async (userId, data) => {
  const response = await fetch(`http://localhost:3001/goals/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      daily_calories: data.caloriasDiarias,
      daily_protein: data.proteinas,
      daily_meals: data.quantidadeRefeicoes,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Erro ao atualizar metas");
  }

  return result;
};
