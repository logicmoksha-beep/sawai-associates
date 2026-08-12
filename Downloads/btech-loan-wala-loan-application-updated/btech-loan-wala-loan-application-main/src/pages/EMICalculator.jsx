import EmiCalculatorInline from '../components/EmiCalculatorInline.jsx'

export default function EMICalculator() {
  return (
    <>
      <section className="section">
        <div className="container">
          <EmiCalculatorInline />
          <p style={{ textAlign: 'center', marginTop: 24, color: 'var(--muted)', fontSize: 13, maxWidth: 720, marginInline: 'auto' }}>
            The EMI is indicative and calculated on a reducing-balance basis. Actual EMI, interest rate and tenure are subject to lender approval and applicable policies.
          </p>
        </div>
      </section>
    </>
  )
}
