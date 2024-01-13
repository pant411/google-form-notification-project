function responseForm(itemResponses) {
  let message = '';
  for (let j = 0; j < itemResponses.length; j++) {
    let itemResponse = itemResponses[j];
    message += '\n'+itemResponse.getItem().getTitle()+': '+itemResponse.getResponse()
  }
  return message;
}

function submitForm(e) {
  let itemResponses = e.response.getItemResponses();
  let message = responseForm(itemResponses);
  const token = 'token of each google form';
  NotifyApp.sendNotify(token, message);
}
