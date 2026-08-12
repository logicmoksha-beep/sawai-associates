import { useState } from 'react'
import { ClipboardCheck, ArrowRight } from 'lucide-react'
import { loanProducts } from '../data/loanData.js'
import { submitToSheet } from '../services/sheetsService.js'

const initial = {
  fullName: '', mobile: '', email: '', loanType: '',
  employment: '', income: '', amount: '', city: ''
}

export default function EligibilityInline() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ ok: null, message: '', loading: false })

  const set = (k, v) => setForm({ ...form, [k]: v })

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Required'
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit number'
    if (!form.loanType) e.loanType = 'Required'
    if (!form.employment) e.employment = 'Required'
    if (!form.income) e.income = 'Required'
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
      message: res.ok ? 'Thank you! Our team will review your details and get in touch.' : (res.message || 'Submission failed. Please try again.'),
      loading: false
    })
    if (res.ok) setForm(initial)
  }

  return (
    <div className="card card-lg">
      <h3 style={{ marginBottom: 4, display: 'flex', alignItems: 'center', gap: 10 }}>
        <ClipboardCheck size={22} color="var(--blue)" /> Check Loan Eligibility
      </h3>
      <p style={{ color: 'var(--text-2)', fontSize: 14, marginBottom: 20 }}>Get personalized loan options based on your profile.</p>

      <form onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <div>
            <select value={form.loanType} onChange={e => set('loanType', e.target.value)}>
              <option value="">Select Loan Type</option>
              {loanProducts.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
            </select>
            {errors.loanType && <div className="error">{errors.loanType}</div>}
          </div>
          <div>
            <select value={form.employment} onChange={e => set('employment', e.target.value)}>
              <option value="">Employment Type</option>
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-Employed</option>
              <option value="business">Business Owner</option>
            </select>
            {errors.employment && <div className="error">{errors.employment}</div>}
          </div>
        </div>
        <div className="form-row">
          <div>
            <input type="number" placeholder="Monthly Income" value={form.income} onChange={e => set('income', e.target.value)} />
            {errors.income && <div className="error">{errors.income}</div>}
          </div>
          <div>
            <input type="number" placeholder="Loan Amount Required" value={form.amount} onChange={e => set('amount', e.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <div>
            <input type="text" placeholder="Full Name" value={form.fullName} onChange={e => set('fullName', e.target.value)} />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
          </div>
          <div>
            <input type="tel" placeholder="Mobile Number" value={form.mobile} onChange={e => set('mobile', e.target.value)} />
            {errors.mobile && <div className="error">{errors.mobile}</div>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block" disabled={status.loading}>
          {status.loading ? 'Submitting…' : <>Check Eligibility <ArrowRight size={16} /></>}
        </button>
        {status.message && (
          <div className={status.ok ? 'success' : 'error'} style={{ marginTop: 10, textAlign: 'center' }}>{status.message}</div>
        )}
        <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12 }}>
          Your details will be reviewed by our loan assistance team. Final approval is subject to lender eligibility and applicable policies.
        </p>
      </form>
    </div>
  )
}
