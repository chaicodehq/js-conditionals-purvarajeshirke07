/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
   var matchCriteriaCount = 0;
    if (typeof password !== "string" || password.length === 0) {
        return "weak";
    }
    if (password.length >= 8) {
        matchCriteriaCount++;
    }
    if (/[A-Z]/.test(password)) {
        matchCriteriaCount++;
    }
    if (/[a-z]/.test(password)) {
        matchCriteriaCount++;
    }
    if (/\d/.test(password)) {
        matchCriteriaCount++;
    }
    if (/[!@#$%^&*()_+\-=[\]{}|;:,.<>?]/.test(password)) {
        matchCriteriaCount++;
    }
    if (matchCriteriaCount <= 1) {
        return "weak";
    } else if (matchCriteriaCount <= 3) {
        return "medium";
    } else if (matchCriteriaCount === 4) {
        return "strong";
    } else {
        return "very strong";
    }
    
}
// console.log(checkPasswordStrength("")); // "weak"
// console.log(checkPasswordStrength("password")); // "medium"
// console.log(checkPasswordStrength("Password1")); // "strong"
console.log(checkPasswordStrength("P@ssw0rd!")); // "very strong"