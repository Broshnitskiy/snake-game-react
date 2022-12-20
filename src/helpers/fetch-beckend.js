import axios from 'axios';

axios.defaults.baseURL = 'https://snake-game-bro.onrender.com';

export async function getPlayers() {
  const response = await axios.get(`/api/players/`);

  return response.data.data;
}

export async function addPlayer(playerData) {
  const response = await axios.post(`/api/players/`, playerData);

  return response.data.data;
}

export async function updatePlayer(player_id, playerData) {
  const response = await axios.put(`/api/players/${player_id}`, playerData);

  return response.data.data;
}
