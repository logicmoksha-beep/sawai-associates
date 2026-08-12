import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { loanProducts } from '../data/loanData.js'
import { submitToSheet } from '../services/sheetsService.js'

const initial = {
  fullName: '', mobile: '', email: '', loanType: '',
  employment: '', income: '', amount: '', city: ''
}

export default function Eligibility() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ ok: null, message: '', loading: false })

  const set = (k, v) => setForm({ ...form, [k]: v })

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name'
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit mobile number'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.loanType) e.loanType = 'Select a loan type'
    if (!form.employment) e.employment = 'Select employment type'
    if (!form.income) e.income = 'Enter monthly income'
    if (!form.amount) e.amount = 'Enter required loan amount'
    if (!form.city.trim()) e.city = 'Please enter your city'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate() || status.loading) return
    setStatus({ ok: null, message: '', loading: true })
    const res = await submitToSheet('eligibility', form)
    setStatus({
      ok: res.ok,
      message: res.ok ? 'Thank you! Our team will review your details and get in touch soon.' : (res.message || 'Submission failed.'),
      loading: false
    })
    if (res.ok) setForm(initial)
  }

  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="card card-lg">
            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div>
                  <label>Full Name</label>
                  <input type="text" value={form.fullName} onChange={e => set('fullName', e.target.value)} />
                  {errors.fullName && <div className="error">{errors.fullName}</div>}
                </div>
                <div>
                  <label>Mobile Number</label>
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
                  <label>City</label>
                  <input type="text" value={form.city} onChange={e => set('city', e.target.value)} />
                  {errors.city && <div className="error">{errors.city}</div>}
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label>Loan Type</label>
                  <select value={form.loanType} onChange={e => set('loanType', e.target.value)}>
                    <option value="">Select Loan Type</option>
                    {loanProducts.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                  </select>
                  {errors.loanType && <div className="error">{errors.loanType}</div>}
                </div>
                <div>
                  <label>Employment Type</label>
                  <select value={form.employment} onChange={e => set('employment', e.target.value)}>
                    <option value="">Select Employment Type</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="business">Business Owner</option>
                  </select>
                  {errors.employment && <div className="error">{errors.employment}</div>}
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label>Monthly Income (₹)</label>
                  <input type="number" value={form.income} onChange={e => set('income', e.target.value)} />
                  {errors.income && <div className="error">{errors.income}</div>}
                </div>
                <div>
                  <label>Required Loan Amount (₹)</label>
                  <input type="number" value={form.amount} onChange={e => set('amount', e.target.value)} />
                  {errors.amount && <div className="error">{errors.amount}</div>}
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={status.loading}>
                {status.loading ? 'Submitting…' : <>Check Eligibility <ArrowRight size={16} /></>}
              </button>

              {status.message && (
                <div className={status.ok ? 'success' : 'error'} style={{ marginTop: 12, textAlign: 'center' }}>{status.message}</div>
              )}

              <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12, textAlign: 'center' }}>
                Your details will be reviewed by our loan assistance team. Final approval is subject to lender eligibility and applicable policies.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
