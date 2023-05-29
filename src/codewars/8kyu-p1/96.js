const cannonsReady = (gunners) => {
  return Object.values(gunners).every(g => g === 'aye') ? `Fire!` : `Shiver me timbers!`
}