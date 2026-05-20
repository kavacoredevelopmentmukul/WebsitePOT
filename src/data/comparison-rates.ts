/** Rates for cost calculator and homepage comparison table */
export const calculatorRoles = {
  developer: { label: 'Developer', localHourly: 85, potHourly: 22 },
  designer: { label: 'Designer', localHourly: 75, potHourly: 20 },
  marketing: { label: 'Marketing', localHourly: 65, potHourly: 18 },
  va: { label: 'Virtual Assistant', localHourly: 40, potHourly: 12 },
} as const;

export type CalculatorRoleKey = keyof typeof calculatorRoles;

export const calculatorCommitment = {
  partTime: { label: 'Part-time (4hr/day)', hoursPerWeek: 20 },
  fullTime: { label: 'Full-time (8hr/day)', hoursPerWeek: 40 },
} as const;

export type CalculatorCommitmentKey = keyof typeof calculatorCommitment;

export const comparisonRows = [
  {
    factor: 'Cost',
    pot: 'Up to 70% lower than local hire — transparent monthly rates',
    local: 'Full salary, benefits, payroll taxes, equipment',
    freelancer: 'Variable; hidden revision and management costs',
  },
  {
    factor: 'Quality control',
    pot: 'Top 1% vetting, ongoing QA, dedicated account manager',
    local: 'High if you hire well — expensive to replace',
    freelancer: 'Inconsistent; depends on individual',
  },
  {
    factor: 'Reliability',
    pot: 'Full-time dedication, backup coverage, SLAs',
    local: 'Strong attendance; PTO and turnover risk',
    freelancer: 'Project-based; may juggle multiple clients',
  },
  {
    factor: 'Setup time',
    pot: 'Shortlist in 48 hours; onboard in 1–2 weeks',
    local: '3–6 months average time-to-hire',
    freelancer: 'Days to find; weeks to align on scope',
  },
  {
    factor: 'Management overhead',
    pot: 'We handle HR, IT, payroll, compliance',
    local: 'You manage HR, benefits, performance reviews',
    freelancer: 'You manage contracts, scope creep, invoicing',
  },
  {
    factor: 'Long-term continuity',
    pot: 'Dedicated team members; easy scale up/down',
    local: 'Strong retention if comp competitive',
    freelancer: 'High churn when projects end',
  },
] as const;
