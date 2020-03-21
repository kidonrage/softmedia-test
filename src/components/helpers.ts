export const formatAmount: (amount: number) => string = (amount: number) => {
  if (!amount) {
    return '0'
  }

  // const onlyNums = amount.replace(/^0+|[^\d]/g, '')

  let amountString = amount.toString()

  if (amountString.length <= 3) {
    return amountString
  }

  let numberParts = []

  for (let i = amountString.length; i > 0; i -= 3) {
    numberParts.unshift(amountString.substring(i - 3, i))
  }

  return numberParts.join(' ')
}

export const normalizeAmount: (amount: string) => number = (amount: string) => {
  if (!amount) {
    return 0
  }

  const onlyNums = amount.replace(/^0+|[^\d]/g, '')
  
  let normalized: number = Number(onlyNums) | 0

  return normalized
}