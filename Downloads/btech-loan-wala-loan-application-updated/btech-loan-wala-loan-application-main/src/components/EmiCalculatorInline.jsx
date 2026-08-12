import { useMemo, useState } from 'react'
import { Calculator } from 'lucide-react'

export default function EmiCalculatorInline() {
  const [amount, setAmount] = useState(1000000)
  const [rate, setRate] = useState(10.5)
  const [years, setYears] = useState(5)

  const { emi, totalInterest, totalAmount } = useMemo(() => {
    const P = Number(amount)
    const R = Number(rate) / 12 / 100
    const N = Number(years) * 12
    if (!P || !R || !N) return { emi: 0, totalInterest: 0, totalAmount: 0 }
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)
    const totalAmount = emi * N
    return { emi, totalInterest: totalAmount - P, totalAmount }
  }, [amount, rate, years])

  const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

  return (
    <div className="emi-wrap" style={{ padding: 28 }}>
      <div className="emi-inputs">
        <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Calculator size={22} color="var(--blue)" /> EMI Calculator
        </h3>

        <div className="input-group">
          <div className="label-row">
            <span>Loan Amount</span>
            <span className="value">{fmt(amount)}</span>
          </div>
          <input type="range" min="50000" max="10000000" step="10000" value={amount} onChange={e => setAmount(e.target.value)} />
          <div className="range-hint"><span>₹50,000</span><span>₹1,00,00,000</span></div>
        </div>

        <div className="input-group">
          <div className="label-row">
            <span>Interest Rate (p.a.)</span>
            <span className="value">{rate}%</span>
          </div>
          <input type="range" min="5" max="25" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
          <div className="range-hint"><span>5%</span><span>25%</span></div>
        </div>

        <div className="input-group">
          <div className="label-row">
            <span>Loan Tenure</span>
            <span className="value">{years} Years</span>
          </div>
          <input type="range" min="1" max="30" step="1" value={years} onChange={e => setYears(e.target.value)} />
          <div className="range-hint"><span>1 Year</span><span>30 Years</span></div>
        </div>
      </div>

      <div className="emi-result">
        <div className="label">Monthly EMI</div>
        <div className="emi-amount">{fmt(emi)}</div>
        <hr />
        <div className="row"><span>Total Interest</span><strong>{fmt(totalInterest)}</strong></div>
        <div className="row"><span>Total Amount Payable</span><strong>{fmt(totalAmount)}</strong></div>
      </div>
    </div>
  )
}
