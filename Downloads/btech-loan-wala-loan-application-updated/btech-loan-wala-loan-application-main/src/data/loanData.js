// Loan products data - single source of truth
export const loanProducts = [
  {
    id: 'personal',
    slug: 'personal',
    icon: 'User',
    name: 'Personal Loan',
    tagline: 'Up to ₹40 Lakhs',
    description: 'Flexible personal loans for weddings, medical, travel or any personal need with minimal documentation.',
    keyBenefit: 'No end-use restriction',
    tenure: 'Up to 5 years',
    eligibility: [
      'Age: 18 – 60 years',
      'Minimum monthly income: ₹15,000',
      'Credit score 750+ preferred for better approval chances and rates'
    ],
    benefits: [
      'Loan amount up to ₹40 Lakhs, subject to lender eligibility',
      'No restriction on end use',
      'Minimal documentation',
      'Fast approval and quick disbursal',
      'Balance transfer facility',
      'Flexible repayment tenure up to 5 years',
      'Longer tenure with selected banks/NBFCs',
      'Pre-approved/instant offers for eligible customers'
    ]
  },
  {
    id: 'home',
    slug: 'home',
    icon: 'Home',
    name: 'Home Loan',
    tagline: 'Tenure up to 30 years',
    description: 'Realise your dream of owning a home with affordable EMI options and expert guidance.',
    keyBenefit: 'Affordable EMI options',
    tenure: 'Up to 30 years',
    eligibility: [
      'Age: 21 – 70 years',
      'Minimum monthly income ₹25,000 for salaried applicants',
      'Credit score 730+ preferred',
      'Stable income and repayment capacity'
    ],
    benefits: [
      'Affordable EMI options',
      'Tenure up to 30 years',
      'Competitive interest rates',
      'Minimal documentation',
      'Quick approval and disbursal',
      'Balance transfer option',
      'Expert guidance throughout'
    ]
  },
  {
    id: 'business',
    slug: 'business',
    icon: 'Briefcase',
    name: 'Business Loan',
    tagline: 'Grow your business',
    description: 'Working capital, term loans and business expansion finance for self-employed professionals.',
    keyBenefit: 'Multiple business finance solutions',
    tenure: 'Flexible',
    eligibility: [
      'Age: 21 – 60 years',
      'Self-employed',
      'Minimum 1 year business operations',
      'Credit score 730+ preferred'
    ],
    benefits: [
      'Term Loan',
      'Working Capital Loan',
      'Bill Discounting',
      'Letter of Credit',
      'Overdraft Facility',
      'Cash Flow Finance',
      'Business Expansion Finance'
    ]
  },
  {
    id: 'lap',
    slug: 'loan-against-property',
    icon: 'Building2',
    name: 'Loan Against Property',
    tagline: 'High loan value',
    description: 'Unlock the value of your residential or commercial property for personal or business funding needs.',
    keyBenefit: 'High loan amount',
    tenure: 'Up to 30 years',
    eligibility: [
      'Age: 21 – 70 years',
      'Minimum monthly income ₹25,000 for salaried applicants',
      'Credit score 730+ preferred',
      'Residential or commercial property'
    ],
    benefits: [
      'High loan amount against property value',
      'Interest rates from multiple banks/NBFCs',
      'Tenure up to 30 years',
      'Personal or business funding',
      'Minimal documentation',
      'Quick approval and disbursal'
    ]
  },
  {
    id: 'new-car',
    slug: 'new-car',
    icon: 'Car',
    name: 'New Car Loan',
    tagline: 'Interest from 9.5%*',
    description: 'Drive home your dream car with attractive interest rates and up to 100% financing*.',
    keyBenefit: 'Up to 100% financing*',
    tenure: 'Flexible',
    eligibility: [
      'Age: 21 – 60 years',
      'Self-employed applicants: minimum 1 year business',
      'Credit score 730+ preferred'
    ],
    benefits: [
      'Interest rates starting from 9.5%* where applicable',
      'Up to 100% vehicle financing* where applicable',
      'One-day approval / instant disbursal* where applicable',
      'Minimal documentation',
      'Flexible EMI options'
    ]
  },
  {
    id: 'home-bt',
    slug: 'home-loan-balance-transfer',
    icon: 'Repeat',
    name: 'Home Loan Balance Transfer',
    tagline: 'Lower your EMI',
    description: 'Transfer your existing home loan to reduce EMI and interest cost with top-up options.',
    keyBenefit: 'Lower interest possibilities',
    tenure: 'Up to 30 years',
    eligibility: [
      'Existing home loan customer',
      'Regular EMI repayment track record',
      'Credit score 730+ preferred'
    ],
    benefits: [
      'Lower interest possibilities',
      'Reduced EMI',
      'Tenure up to 30 years',
      'Top-up facility*',
      'Minimal documentation',
      'Quick approval',
      'End-to-end transfer assistance'
    ]
  },
  {
    id: 'used-car',
    slug: 'used-car',
    icon: 'CarFront',
    name: 'Used Car Loan',
    tagline: 'Buy your pre-owned car',
    description: 'Get quick and flexible loan options for pre-owned cars with minimal paperwork.',
    keyBenefit: 'Wide range of used cars',
    tenure: 'Flexible',
    eligibility: [
      'Salaried: Age 21 – 65, Minimum annual income ₹2.5 Lakhs',
      'Self-employed: Age 21 – 65, Minimum annual income ₹2.5 Lakhs',
      'Self-employed business vintage: minimum 3 years'
    ],
    benefits: [
      'Competitive interest rates',
      'Flexible EMI options',
      'Quick approval',
      'Minimal documentation',
      'Wide range of used cars covered',
      'End-to-end loan assistance'
    ]
  },
  {
    id: 'project-funding',
    slug: 'project-funding',
    icon: 'Building',
    name: 'Project Funding',
    tagline: 'Powering your construction projects',
    description: 'Get the financial support you need to start, develop, or complete your construction project.',
    keyBenefit: 'Customized funding solutions',
    tenure: 'Flexible',
    eligibility: [
      'Age: 21–70 Years',
      'Applicant: Builders, Developers & Real Estate Firms',
      'Business Vintage: Preferably 2+ Years',
      'Project: Residential, Commercial & Mixed-Use Projects',
      'Financial Profile: Strong repayment capacity and project feasibility',
      'Credit Score: 730+ preferred'
    ],
    benefits: [
      'Funding for New & Ongoing Projects',
      'Construction & Development Finance',
      'High-Value Funding Solutions',
      'Flexible Repayment Structures',
      'Competitive Interest Rates',
      'Support for Project-Related Expenses',
      'Minimal & Structured Documentation',
      'End-to-End Financial Assistance'
    ]
  }
]

export const getLoanBySlug = (slug) => loanProducts.find(l => l.slug === slug)
