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
The prompt that I have provided is : I would like to add two more seed quotes matching the existing shape and the Mongoose schema.This file is run to seed a mongodb. Please read the file and consider the min and max restrictions. summarize to me what you plan to do, and ask any questions you may have.

I liked the plan that AI has provided: Read [](file:///home/labadmin/FInal%20Project/evergreen-quote-launch/api/src/seed.js)

Read [](file:///home/labadmin/FInal%20Project/evergreen-quote-launch/api/src/Quote.js)

### Plan
- Add `q7` and `q8` to seed.js.
- Match the Mongoose fields: `_id`, `type`, `age`, `coverageAmount`, `monthlyPremium`, and `tags`.
- Ensure `age` is from 18–100, `coverageAmount` is at least 10,000, and `type` is `auto`, `home`, or `life`.
- Update the file’s six-quote comments to describe eight quotes.
- Leave premiums as historical seed values rather than recalculating them.

### Question
Would you like me to use my own valid, representative values for `q7` and `q8`, or provide specific values, premiums, types, and tags?

I recommend using two contrasting additions, such as one life quote and one senior auto quote.

My follow up question to AI was: give me the data that you are exactly going to seed so that I can review?
AI has provided me two rows matching with the seed but when asked about the premium calculations logic that it has used, the response I have received is that AI did not derive the new premiums from the current premium formula. Instead it has proposed "These were representative historical seed values chosen to match the existing file’s style. The seed comments also explicitly state that stored premiums may not match today’s calculated premiums. Because the seed data is meant to contain historical premiums, the proposed values are reasonable choices, but they are not calculations from the current rate table.

## summarization
Copilot got the min and max conditions correctly. The schema is also correct but it did not use proper formula for calculations. I have decided to insert these rows as-is because the historical rate drift is intentional else premiums should be updated to match the active rate engine.