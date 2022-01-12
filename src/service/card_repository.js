import { getDatabase, ref, onValue, remove, set } from "firebase/database";

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  syncCards(userId, onUpdate) {
    onValue(ref(this.db, `/${userId}/cards`), (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCard(userId, card) {
    set(ref(this.db, `/${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.db, `/${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
