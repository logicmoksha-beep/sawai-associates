import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { loanProducts } from '../data/loanData.js'
import { submitToSheet } from '../services/sheetsService.js'

// Loan type that was requested via the URL (?type=home, ?type=new-car, ...).
function requestedLoanType(params) {
  const type = params.get('type')
  return type && loanProducts.some(l => l.id === type) ? type : ''
}

// Fields to (re)start the form with. Every field stays empty by default.
const EMPTY_FIELDS = {
  fullName: '', mobile: '', email: '', loanType: '',
  amount: '', employment: '', income: '', city: '', message: '', consent: false
}

export default function ApplyNow() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({ ...EMPTY_FIELDS, loanType: requestedLoanType(searchParams) })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ ok: null, message: '', loading: false })
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  // Name of the currently selected loan for display / submission clarity.
  const selectedLoan = loanProducts.find(l => l.id === form.loanType)

  const set = (k, v) => setForm({ ...form, [k]: v })

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name'
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit mobile number'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.loanType) e.loanType = 'Select a loan type'
    if (!form.amount) e.amount = 'Enter required loan amount'
    if (!form.employment) e.employment = 'Select employment type'
    if (!form.income) e.income = 'Enter monthly income'
    if (!form.city.trim()) e.city = 'Please enter your city'
    if (!form.consent) e.consent = 'Please accept to be contacted'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate() || status.loading) return
    setStatus({ ok: null, message: '', loading: true })
    const res = await submitToSheet('loan-application', form)
    setStatus({
      ok: res.ok,
      message: res.ok ? 'Thank you! Your loan enquiry has been submitted. Our team will contact you shortly.' : (res.message || 'Submission failed.'),
      loading: false
    })
    if (res.ok) {
      setShowSuccessPopup(true)
      setForm({ ...EMPTY_FIELDS, loanType: requestedLoanType(searchParams) })
    }
  }

  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="card card-lg">
            {selectedLoan && (
              <p style={{ fontSize: 14, color: 'var(--blue)', fontWeight: 600, marginBottom: 8 }}>
                You are applying for: {selectedLoan.name}
              </p>
            )}
            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div>
                  <label>Full Name *</label>
                  <input type="text" value={form.fullName} onChange={e => set('fullName', e.target.value)} />
                  {errors.fullName && <div className="error">{errors.fullName}</div>}
                </div>
                <div>
                  <label>Mobile Number *</label>
                  <input type="tel" value={form.mobile} onChange={e => set('mobile', e.target.value)} />
                  {errors.mobile && <div className="error">{errors.mobile}</div>}
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)} />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div>
                  <label>City *</label>
                  <input type="text" value={form.city} onChange={e => set('city', e.target.value)} />
                  {errors.city && <div className="error">{errors.city}</div>}
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label>Loan Type *</label>
                  <select value={form.loanType} onChange={e => set('loanType', e.target.value)}>
                    <option value="">Select Loan Type</option>
                    {loanProducts.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                  </select>
                  {errors.loanType && <div className="error">{errors.loanType}</div>}
                </div>
                <div>
                  <label>Loan Amount (₹) *</label>
                  <input type="number" value={form.amount} onChange={e => set('amount', e.target.value)} />
                  {errors.amount && <div className="error">{errors.amount}</div>}
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label>Employment Type *</label>
                  <select value={form.employment} onChange={e => set('employment', e.target.value)}>
                    <option value="">Select Employment Type</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="business">Business Owner</option>
                  </select>
                  {errors.employment && <div className="error">{errors.employment}</div>}
                </div>
                <div>
                  <label>Monthly Income (₹) *</label>
                  <input type="number" value={form.income} onChange={e => set('income', e.target.value)} />
                  {errors.income && <div className="error">{errors.income}</div>}
                </div>
              </div>

              <div className="form-group">
                <label>Message (optional)</label>
                <textarea value={form.message} onChange={e => set('message', e.target.value)} placeholder="Any additional details you'd like to share…" />
              </div>

              <label className="checkbox">
                <input type="checkbox" checked={form.consent} onChange={e => set('consent', e.target.checked)} />
                <span>I agree to be contacted regarding my loan enquiry.</span>
              </label>
              {errors.consent && <div className="error">{errors.consent}</div>}

              <button type="submit" className="btn btn-primary btn-block mt-16" disabled={status.loading}>
                {status.loading ? 'Submitting…' : <>Submit Loan Enquiry <ArrowRight size={16} /></>}
              </button>

              {status.message && (
                <div className={status.ok ? 'success' : 'error'} style={{ marginTop: 12, textAlign: 'center' }}>{status.message}</div>
              )}

              <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12, textAlign: 'center' }}>
                Loan approval is subject to lender eligibility, documentation and applicable policies.
              </p>
            </form>
          </div>
        </div>
      </section>

      {showSuccessPopup && (
        <div className="success-popup-overlay" role="dialog" aria-modal="true" aria-labelledby="application-success-title">
          <div className="success-popup">
            <button
              type="button"
              className="success-popup-close"
              onClick={() => setShowSuccessPopup(false)}
              aria-label="Close success message"
            >
              ×
            </button>

            <div className="success-popup-icon" aria-hidden="true">
              ✓
            </div>

            <h2 id="application-success-title">Application Submitted Successfully!</h2>
            <p>
              Thank you for applying. Your loan application has been submitted successfully.
              Our team will contact you shortly.
            </p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowSuccessPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  )
}
