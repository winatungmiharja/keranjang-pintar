import { updatePurchased, getPurchased, registerUser } from "./Fetch.js";

async function updateCart(userId, itemId, itemImg, isDecrease) {
  const updateCart = await updatePurchased(userId, itemId, itemImg, isDecrease);
  if (updateCart.isSuccess !== true) throw new Error(`Error Updating Cart`);
  const getCart = await getPurchased(userId);
  if (getCart.isSuccess !== true) throw new Error(`Error Getting Cart`);
  const currentState = await getCart.data;
  return currentState;
}

//NAMBAH BARANG
export const addItem = async (item, user) => {
  const updateDatabase = updateCart(user.id, item.id, item.gambar, 0);
  return await updateDatabase;
};

export const addPurchasedItem = async (item) => {
  const updateDatabase = updateCart(
    item.id_user,
    item.id_barang,
    item.gambar,
    0
  );
  return await updateDatabase;
};

//NGURANGIN BARANG
export const removeItem = async (item, user) => {
  const updateDatabase = updateCart(user.id, item, 1);
  return await updateDatabase;
};

export const removePurchasedItem = async (item) => {
  const updateDatabase = updateCart(
    item.id_user,
    item.id_barang,
    item.gambar,
    1
  );
  return await updateDatabase;
};

//AMBIL DATA BARANG
export const fetchItem = async (user) => {
  const database = getPurchased(user.id);
  return await database;
};

//AMBIL DATA USER
export const fetchUser = async (user) => {
  const database = registerUser(user.name, user.email);
  return await database;
};
