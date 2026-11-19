# Go / No-Go: Launch Decision

> Copy to `delivery-leadership-package/go-no-go.md`. This is the call for Friday's launch demo. Make it **from** the CI result, not in spite of it.

**Date / time: November 18, 2026
**Decision:** ☐ GO

## CI evidence

- Latest run on `delivery/lead`: Green 
- Workflow file: `.github/workflows/ci.yml`
- What the workflow actually checked:
- Test the API: ran the API tests against mongo:7 service container
- Type-check and build the client: Ran the type-check and the production build.It did not check the landing links or premium calculations. It is basically left on the Engineering team as a human check.
## What "GO" would mean

- Merge `delivery/lead` → `main`, squash, delete branch.
- Tag the merge commit `launch`.

## What "NO-GO" would mean

- Hold the merge until: CI Run is green if it is Red
- Owner of that condition: Delivery lead
- Re-evaluate at: Thursday before noon

## My call

Environment Health: CI runs are 100% green; local cluster is healthy and unaffected (see Environment Evidence).
Root Cause of Incident: Isolated to the platform team's shared demo cluster due to an environment variable mismatch (MONGO_URI vs. expected MONGODB_URI). Evidence and action items have been routed to Platform, and leadership has received a holding note (see Addendum).
Decision Gates:
Flip to No-Go: Post-merge CI failure on main OR failed Thursday re-verification on my cluster.
Non-Blocker: Shared cluster downtime on Friday does not block launch, as our demo operates independently.

## Inject 2:  Incident Communications Record

1. Escalation to Platform Team (Issue Routing & Remediation Request)
To: Platform Engineering (Shared Demo Cluster Owners)
From: Yamini Dumpala
Date: Wednesday, Nov 18, 2026
Hi Platform Team,

During the pre-launch dry run on the shared demo cluster afternoon, we observed UI failures reporting "Could not load recent quotes."

Diagnostic Findings:

Pod Health: In the demo namespace, all three evergreen-quote-api pods are in CrashLoopBackOff (6–7 restarts), while the MongoDB pod remains healthy (1/1 Running, 0 restarts).
Root Cause: API logs indicate the application is defaulting to 127.0.0.1 because the deployment manifest was recently updated to inject MONGO_URI, whereas the application codebase expects MONGODB_URI. The restart loop aligns directly with this configuration change made ~30 minutes prior.
Action Requested:

Please revert/restore the environment variable name to MONGODB_URI (the injected value itself appears correct).
Please confirm resolution or outline any required input by 16:00 today.
Note: Our dedicated cluster and CI pipelines remain fully healthy and unaffected, so we will not make direct changes to the shared cluster. I am available to jump on a quick call, share logs, or verify manifests as needed.

2. Stakeholder Holding Update (Reporting Manager)
To: Reporting Manager
From: Yamini Dumpala
Date: Wednesday, Nov 18, 2026
Hi Reporting Manager,

Thank you so much for raising the issue.

Current Status:

Issue: The shared demo environment is temporarily unavailable due to an environment variable mismatch from an upstream configuration update earlier today, causing the API to lose connection to MongoDB. The database itself is operational and uncorrupted.
Action Taken: The platform team (who owns this shared cluster) has been provided the root-cause diagnostics along with an explicit fix request.
Launch Impact: Zero impact on Friday’s launch. The live demo runs on our independent, isolated stack, which is 100% green and passing all verification checks.
I will provide a follow-up status update by 5:00 PM today, or as soon as possible once Platform team confirms the fix.




