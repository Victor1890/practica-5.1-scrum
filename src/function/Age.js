const AgeCal = (age) => {
  let hoy = new Date();
  let cumpleanos = new Date(age);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  let m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
};

module.exports = AgeCal;
