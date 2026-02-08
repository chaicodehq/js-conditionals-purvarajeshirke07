/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here
  var extraChargeCar= 3;
  var extraChargeMotorcycle = 2;
  var extraChargeBus = 7;
  var countFees= 0
  var hoursRounded = Math.ceil(hours);
  
  console.log(hoursRounded)
  if (hoursRounded <= 0) {
    return -1;
  }

  switch(vehicleType.toLowerCase()){
    case "car":
        countFees = (hoursRounded == 1) ? 5 : 5 + (hoursRounded - 1) * extraChargeCar;
        if (countFees > 30) {
        countFees = 30;
      }
      break;


    case "motorcycle":
        countFees = (hoursRounded == 1) ? 3 : 3 + (hoursRounded - 1) * extraChargeMotorcycle;
        if (countFees > 18) {
        countFees = 18;
      }
      break;


    case "bus":
      countFees = (hoursRounded == 1) ? 10 : 10 + (hoursRounded - 1) * extraChargeBus;
      if (countFees > 60) {
        countFees = 60;
      }
      break;

    default :
        countFees= -1;
        break;

  }
  return countFees;


}


console.log(calculateParkingFee(12,"Motorcycle"));