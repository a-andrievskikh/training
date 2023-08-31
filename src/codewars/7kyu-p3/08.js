function getIssuer(num) {
  num = String(num)

  return /^3[4|7]\d{13}$/.test(num) ? 'AMEX'
    : /^6011\d{12}$/.test(num) ? 'Discover'
      : /^5[1-5]\d{14}$/g.test(num) ? 'Mastercard'
        : /^4(\d{12}|\d{15})$/.test(num) ? 'VISA'
          : 'Unknown'
}