const simplifyMaskArray = require('./simplifyMaskArray');

module.exports = (maskSettings) => maskSettings.sort((prev, curr) => {
  if (simplifyMaskArray(prev.originalMask) === simplifyMaskArray(curr.originalMask)) {
    throw new Error('Two or more masks have the same amount of input characters. You must correct it.');
  }
  return prev.cleanedMask.length - curr.cleanedMask.length;
});
