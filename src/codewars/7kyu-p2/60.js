function outed(meet, boss) {

  return (Object.values(meet).reduce((a, b) => a + b, 0) + (meet[boss] || 0)) / Object.values(meet).length <= 5
    ? 'Get Out Now!'
    : 'Nice Work Champ!'

}