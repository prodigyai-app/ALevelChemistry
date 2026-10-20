/* Ideal dilute, monoprotic acid equilibrium at 25 degrees C.
   Solve mass balance and electroneutrality, including water, across exhaustion. */
(function (root) {
  "use strict";
  function acidPH(totalAcid, spectatorCharge, Ka, Kw = 1e-14) {
    if (![totalAcid, spectatorCharge, Ka, Kw].every(Number.isFinite) || totalAcid < 0 || Ka <= 0 || Kw <= 0) return NaN;
    // h + spectatorCharge = [A-] + [OH-]. Residual is strictly increasing in h.
    const residual = logH => { const h = 10 ** logH; return h + spectatorCharge - totalAcid * Ka / (Ka + h) - Kw / h; };
    let low = -18, high = 2;
    if (residual(low) > 0 || residual(high) < 0) return NaN;
    for (let i = 0; i < 100; i++) { const mid = (low + high) / 2; if (residual(mid) > 0) high = mid; else low = mid; }
    return -(low + high) / 2;
  }
  function bufferPH(nHA, nA, addedCm3, Ka = 1.74e-5) {
    if (![nHA, nA, addedCm3].every(Number.isFinite) || nHA < 0 || nA < 0) return NaN;
    const added = addedCm3 / 1000, volume = .100 + Math.abs(added);
    return acidPH((nHA + nA) / volume, (nA + added) / volume, Ka);
  }
  const api = {acidPH, bufferPH};
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.ChemistryEquilibrium = api;
})(typeof window !== "undefined" ? window : globalThis);
