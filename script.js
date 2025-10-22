const quotes = [
  "Actions are judged by intentions; every person will have only what they intended. — (Bukhari 1, Muslim 1907)",
  "None of you truly believes until he loves for his brother what he loves for himself. — (Bukhari 13, Muslim 45)",
  "The best among you are those who have the best manners and character. — (Bukhari 3559)",
  "Whoever believes in Allah and the Last Day, let him speak good or remain silent. — (Bukhari 6018, Muslim 47)",
  "The strong person is the one who controls himself when angry. — (Bukhari 6114, Muslim 2609)",
  "Smiling at your brother is charity. — (Tirmidhi 1956)",
  "Modesty is part of faith. — (Bukhari 9, Muslim 35)",
  "Paradise lies at the feet of mothers. — (Nasa’i 3104, Ibn Majah 2771)",
  "Whoever relieves a believer’s distress, Allah will relieve his distress on the Day of Resurrection. — (Muslim 2699)",
  "The best of you are those best to their families. — (Tirmidhi 3895)",
  "A believer to another believer is like a building whose parts support one another. — (Bukhari 6026, Muslim 2585)",
  "Help your brother, whether he is an oppressor or oppressed. — (Bukhari 2444)",
  "He who believes in Allah and the Last Day should honor his neighbor. — (Bukhari 6018, Muslim 47)",
  "The best deeds are those most consistent, even if small. — (Bukhari 6465, Muslim 783)",
  "A Muslim is one from whose tongue and hand other Muslims are safe. — (Bukhari 10, Muslim 40)",
  "When a man dies, his deeds end except three: ongoing charity, knowledge that benefits, or a righteous child who prays for him. — (Muslim 1631)",
  "The best of you are those who learn the Qur’an and teach it. — (Bukhari 5027)",
  "Whoever guides to good has a reward like the doer of it. — (Muslim 1893)",
  "Do not belittle any good deed, even meeting your brother with a cheerful face. — (Muslim 2626)",
  "Show mercy to those on earth and Allah will show mercy to you. — (Tirmidhi 1924)"
];

const button = document.querySelector(`button`);
const h2 = document.querySelector(`h2`);
button.addEventListener(`click`, () => {
  const index = Math.floor(Math.random() * quotes.length);
  h2.textContent = quotes[index];
});
