this.addEventListener('message', async function(e) {
  if (e.data.type === 'newClient') {
    const allClients = await clients.matchAll();
    const clientNumbers = Object.keys(allClients).length;
    for (let client of allClients) client.postMessage(clientNumbers);
  } else {
    const allClients = await clients.matchAll();
    const clientNumbers = Object.keys(allClients).length;
    for (let client of allClients) client.postMessage(clientNumbers);
  }
});