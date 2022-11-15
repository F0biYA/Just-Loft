class Api {
    constructor({ headers }) {
      this._headers = headers;
    }


  /*проверка ответа сервера*/
  _handleResponse(response) {
    if (response.ok) return response.json();
    return Promise.reject(`Ошибка: ${response.status}`);
  }

    /* отправка сообщений в чат */
    postBotMessage(name, telefon, note) {

        return fetch(`https://api.telegram.org/bot5565542591:AAEeRWAF07gLx0Qwfiv-z4w0AYIuurzbHc8/sendMessage?chat_id=-672001619&text=имя:${name} tel: ${telefon} note: ${note}`, {
          method: 'POST',
          headers: this._headers,
        //   body: JSON.stringify({ name, email, password })
         })

      }}

      export const api = new Api({
         headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
        },
      });