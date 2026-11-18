# Decision Memo: _short title here_

> Copy to `delivery-leadership-package/decision-memo.md`. Target length: ~250 words. Write for a non-technical reader. Name the options you **rejected**, not just the one you picked.

**Date: November 17, 2026
**Author: Yamini DUmpala
**Decision area:Day 2 design tradeoff

## Context

PRemium is calculated at two places. One is through the website when the customer enters all the data and the estimated premium displays. Second is quote service where it is saved. Currently the rates in these two places are aligned based on the sponsor's input. THe calculations are getting done in two places and they will mismatch.

## Options considered

1. **Option A: Matching rates in the app: FOr the customer the rates are available immediately as soon they enter the data. This is really helpful. The basic consideration is that the rates need to be considered and updated at two places and should be in sync.
2. **Option B: Estimate the calculations on the server. This will be good as the numbers/calculations won't differ. When the service is down there is a high risk of getting blank values.
3. **Option C: Share one rate file between the app & the server. This will resolve the netweork delay and one single source of truth. We will differ this for this week as this is a lot of effort.
## Recommendation
Option 1 looks promising. Keep the instant rates and server rates are source of truth. Update the rates in both places.
## Why

This is good for customer experience as they want very fast response and want to see the estimates. 
## What would change my mind
If the rates change more often and there is a mismatch between the premiums that customer see and that is saved then I will consider rate engine option._

## AI Oversight
