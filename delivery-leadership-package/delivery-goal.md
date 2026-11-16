# Delivery Goal: Evergreen Quote

> Copy this file into `delivery-leadership-package/delivery-goal.md`. One sentence. Read it back to yourself. Then to your pair. Then to someone who wasn't in the room. If they can repeat it, it's good.

## Goal

Customers can successfully obtain accurate insurance quotes through a reliable Evergreen Quote service running in Kubernetes and accessible through both REST and GraphQL APIs.

## "Done" looks like

- The quote page loads its recent quotes from the API, and a saved quote survives a reload.
- The estimate on screen and the saved premium agree, at the launch rates.
- `npm test` (API) and `npm run type-check` + `npm run build` (client) pass; both CI jobs on the merge commit are **green**.
- The containerized API serves the wired app, and the cluster demo shows three API pods behind one Service.
- The landing page carries the launch banner and points at the app.
- A reviewed PR is merged, branch deleted.
- `delivery-leadership-package/` is complete and committed.

## Out of scope (this week)

- No changes to marketing site
- NO optional work specified in the lab guide
- No new products, rates or even new calculations are added. Only sponsored rates, premiums, products will be available
- No Production S3 deployment
