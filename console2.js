function getWavelength(x, y) {
  const speedOfLight = 299792458;
  const frequency = (x * y) / speedOfLight;
  const wavelength = speedOfLight / frequency;
  return wavelength;
}
