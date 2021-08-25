//FUNCTION THAT MAKE API CALL AND REQUEST

//pass to backend and add item
export const updatePurchased = async (userId, itemId, itemImg, isDecrease) => {
  const data = new FormData();
  data.append("id_user", userId);
  data.append("id_barang", itemId);
  data.append("kurang", isDecrease);
  data.append("gambar", itemImg);

  let response = await fetch(
    "https://keranjang-pintar.herokuapp.com/insertPurchased.php",
    {
      method: "post",
      body: data,
    }
  );
  if (!response.ok) {
    throw new Error(`Error Update Purchased`);
  }
  return await response.json();
};

//get updated purchased table
export const getPurchased = async (userId) => {
  const data = new FormData();
  data.append("id_user", userId);
  let response = await fetch(
    "https://keranjang-pintar.herokuapp.com/getPurchased.php",
    {
      method: "post",
      body: data,
    }
  );
  if (!response.ok) {
    throw new Error(`Error Get Purchased`);
  }
  return await response.json();
};

//register an user
export const registerUser = async (userName, userEmail) => {
  const sendData = new FormData();
  sendData.append("name", userName);
  sendData.append("email", userEmail);

  let response = await fetch(
    "https://keranjang-pintar.herokuapp.com/register.php",
    {
      method: "post",
      body: sendData,
    }
  );
  if (!response.ok) {
    throw new Error(`Error Get Purchased`);
  }
  return await response.json();
};
