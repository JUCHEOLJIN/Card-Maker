import { getDatabase, ref, remove, set } from "firebase/database";

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  saveCard(userId, card) {
    set(ref(this.db, `/${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.db, `/${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
