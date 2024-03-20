export const checkEmailIsValid = (email) => 
{
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{2,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
}

export const checkPasswordIsValid = (password) =>
{
  return /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/\\]).{6,18}$/.test(password)
}

export const checkNamaLengkapIsValid = (nama) =>
{
	return /^[a-zA-Z.'\s,]{1,}$/.test(nama)
}