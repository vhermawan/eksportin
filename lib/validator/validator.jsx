export const ValidateEmail = (value) => {
  // eslint-disable-next-line no-useless-escape
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let error
  if (value) {
    if (!emailPattern.test(value)) {
      error = 'Tuliskan email dengan benar'
    }
  } else {
    error = 'Silahkan isi email anda'
  }
  return error
}

export const Required = (value) => {
  let error
  if (!value) {
    error = 'Silahkan di isi'
  }
  return error
}

export const ValidatePassword = (value) => {
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  let error
  if (value) {
    if (!passwordPattern.test(value)) {
      error =
        'Minimal delapan karakter, minimal satu huruf, satu angka dan satu karakter khusus'
    }
  } else {
    error = 'Silahkan masukkan password anda'
  }
  return error
}
