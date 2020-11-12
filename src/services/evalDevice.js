/**
 * Detect window size
 * @author Luz Carrillo
 * @param {Object} $window -
 * @return {Object} -
 */
function Service($window) {
  const self = {}

  self.devices = ['mobile', 'desktop']
  self.isDevice = d => self.device == d
  self.check = () => (window.innerWidth < 601) ? self.devices[0] : self.devices[1]
  self.device = self.check()

  return self
}

const evalDevice = ['$window', Service]

export default evalDevice
