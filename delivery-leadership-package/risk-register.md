# Risk Register

> Copy to `delivery-leadership-package/risk-register.md`. At least 5 rows. **No boilerplate**; your peers will grade you on whether these are real.

| # | Risk | Owner | Likelihood (L/M/H) | Impact (L/M/H) | Mitigation | Trigger to escalate |
|---|---|---|---|---|---|---|
| R1 | Rates are available in multiple places| Technical lead & PO| M | H | Keep API's rates as source of truth| The estimated rate and saved rates differ
| R2 | Frontend is not integrated with backend API |  Technical Lead| M |M  |Connect the UI TO THE rest/GraphQL API, remove the bundled sample data, and validate the persistence through end-to-end testing | UI and API data do not match |
| R3 | AI Generated changes | Delivery lead/Engineering team | M | M | Review all AI Generated content and validate through tests and schema checks |Engineering team relies on AI and implements with out validation  |
| R4 |  Application becomes dependent on database availability after integration|  Platform services team|  M|  M|  Monitor database connectivity and have health checks in place| No health checks are available|
| R5 | Environmental issues or dependency delays | Delivery Lead | M | H | Keep the environment health checks as well as track dependencies regularly|  Blocker remains unresolved for longer times and delivery goals are impacted|

## How I'll use this register

I will review and update the register on a daily basis based on the progress of the project. The entire team and stakeholders has access to this register so that the status of each risk is transparent and whether the unresolved or un mitigated risks pose any concern to the timeline of the deliverables.
