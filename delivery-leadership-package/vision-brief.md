# Evergreen Quote: Vision Brief

> Copy this file into `delivery-leadership-package/vision-brief.md` in your repo and fill it in. Target length: 1 page (~300 words). Write for a Liberty Mutual VP who has 90 seconds.

## Product
**Name:** Evergreen Insurance Quote (the launch: full-stack delivery)
**Delivery week:** Final
**Delivery Lead:** Yamini Dumpala
**Engineering team (represented by): https://github.com/asc1-student16/evergreen-quote-launch.git
**GitHub Project board:** https://github.com/users/asc1-student16/projects/7/views/1

## Who is the customer?
Evergreen Quote serves the Evergreen website team, partner integration teams, and operations teams. The website team needs a centralized service to create and retrieve insurance quotes. Integration partners need a consistent API to access quote data without duplicating business logic. Operations teams need a tested, containerized application that can be deployed and managed reliably on Kubernetes. Currently, quote information is generated but not managed as a reusable service, making it difficult to share, retrieve, and support across channels. Another group is Evergreen website visitors who wants a quick quote for various products like home, auto, & life with various age group adults.
## What pain does Evergreen Quote remove? 
Each quote will be saved as well as retrieved. The price will be the same every time if the input criteria is the same. This is a reliable service for both parners and the users. Partners get the same prices through GraphQL and website users get the same output through REST.

## What does "good" look like at end of the week?
- The API returns quote data successfully through both REST and GraphQL endpoints, and users can create and retrieve quotes without errors.

- The full automated test suite passes, and the GitHub Actions CI pipeline completes successfully on the main branch.

- The application runs from a Docker container and is successfully deployed to Kubernetes with all application and MongoDB pods in Running status.

- Premium calculations match the sponsor's published pricing rules, and invalid requests return appropriate HTTP error codes with clear validation messages.

- Quote data is persisted in MongoDB and remains available after application restarts and pod redeployments.

- The deployment process is documented, repeatable, and can be executed by another team member without additional guidance.

- Monitoring and health checks confirm the service is operational, and the team can demonstrate an end-to-end quote creation and retrieval workflow during the go/no-go review.

- All deliverables are completed, merged, and verified, with no critical defects blocking the final demonstration.

## What are we explicitly NOT doing this week?
_3–5 bullets. This is where you protect your team from scope creep._

- No changes to marketing site
- NO optional work specified in the lab guide
- No new products, rates or even new calculations are added. Only sponsored rates, premiums, products will be available
- No Production S3 deployment


## How will we know if it worked?
_2–3 measures. Numeric if possible._

- All the tests are passed 
- Main is green
- Website displays all the rates, products and premiums correctly in line with sponsor's rate table
