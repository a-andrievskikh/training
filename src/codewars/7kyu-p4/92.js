const whosOnline = (friends) => {

  const statusesList = {
    online: [],
    offline: [],
    away: []
  }

  for (let user of friends) {
    if (user.status === 'online' && user.lastActivity <= 10) statusesList.online.push(user.username)
    if (user.status === 'online' && user.lastActivity > 10) statusesList.away.push(user.username)
    if (user.status === 'offline') statusesList.offline.push(user.username)
  }

  for (let status in statusesList) {
    if (!statusesList[status].length) delete statusesList[status]
  }

  return statusesList
}