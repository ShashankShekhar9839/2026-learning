import { useState } from "react";
import "./style.css";
function TwoStepLogin() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    if (!email) {
      setError("Email Required");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    await new Promise((res) => setTimeout(res, 1000));
    setError("");
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setError("Password is required");
      return;
    }
    setError("");
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    console.log({ email, password });
    setLoading(false);
  };

  return (
    <div>
      <form className="login-container" onSubmit={handleSubmit}>
        <h4>Two Step Login</h4>

        {step === 1 && (
          <div className="field">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <button type="button" onClick={handleNext}>
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="field">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <div className="actions">
              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={loading}
              >
                Back
              </button>

              <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default TwoStepLogin;
