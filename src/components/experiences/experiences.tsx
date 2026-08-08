import { CustomList, CustomListItem } from "@/ui/custom-list";
import Link from "next/link";

export function ExperienceList() {
  return (
    <div className="max-w-xl mx-auto my-4 px-4 home-page-content">
      <CustomList>
        <CustomListItem>
          <p className="font-bold">
            Product/ML Engineer @{" "}
            <Link href="https://coderabbit.ai" target="_blank">
              CodeRabbit
            </Link>
          </p>
        </CustomListItem>
        <CustomListItem isSubItem>
          <strong>AI evaluation:</strong> Built a framework across 100+
          repositories, cutting experiment setup time by 70%. Added
          transactional BigQuery pipelines for 3K+ experiments with validation
          and static analysis.
        </CustomListItem>
        <CustomListItem isSubItem>
          <strong>Benchmark data:</strong> Built an AI-powered platform that
          mines real bugs from merged open-source pull requests, producing
          higher-quality evaluation datasets. Analyzed thousands of AI review
          outputs to uncover failure modes and guide model and product
          improvements.
        </CustomListItem>
        <CustomListItem isSubItem>
          <strong>Sandboxed tooling:</strong> Enabled secure analysis and
          external integrations in isolated environments. Improved context with
          Valgrind, Clang, golangci-lint, and ESLint, reducing token costs by
          40%.
        </CustomListItem>
        <CustomListItem isSubItem>
          <strong>Slack integrations:</strong> Shipped 20+ integrations for
          CodeRabbit&apos;s Agent in Slack, including Jira, Salesforce, Sentry,
          PagerDuty, Datadog, Notion, HubSpot, and Intercom. Covered OAuth,
          credentials, runtime authentication, and testing.
        </CustomListItem>
        <CustomListItem isSubItem>
          <strong>Product platforms:</strong> Owned Settings V2 from foundation
          through general availability and built the frontend for agent
          learnings on a platform serving 80K+ daily users. Delivered an
          upgraded command palette, live preview, and clearer settings actions.
        </CustomListItem>

        <li aria-hidden className="h-2" />

        <CustomListItem>
          <p className="font-bold">
            Software Developer @{" "}
            <Link href="https://airfairness.com" target="_blank">
              airfairness
            </Link>
          </p>
        </CustomListItem>
        <CustomListItem isSubItem>
          <strong>Claims architecture:</strong> Redesigned claims processing to
          remove bottlenecks, doubling throughput while reducing latency.
        </CustomListItem>
        <CustomListItem isSubItem>
          <strong>Validation flows:</strong> Built frontend and backend data
          processing with enforced input schemas, reducing errors by 20%.
        </CustomListItem>
        <CustomListItem isSubItem>
          <strong>Data integrity:</strong> Added validation and integrity checks
          that prevented invalid submissions, improving valid claims by 50%.
        </CustomListItem>
        <CustomListItem isSubItem>
          <strong>UX and accessibility:</strong> Improved the end-to-end claims
          experience to meet WCAG standards, increasing completion of started
          claims flows to 75%.
        </CustomListItem>

        <li aria-hidden className="h-2" />

        <CustomListItem>
          <p className="font-bold">
            President + Advisor @{" "}
            <Link href="https://csclub.uwaterloo.ca" target="_blank">
              UW Computer Science Club
            </Link>
          </p>
        </CustomListItem>
        <CustomListItem isSubItem>
          Led 70+ students across technical events and club operations while
          securing $20K+ from sponsors for infrastructure upgrades.
        </CustomListItem>

        <li aria-hidden className="h-2" />

        <CustomListItem>
          <p className="font-bold">
            Director + Council Representative @{" "}
            <Link href="https://mathsoc.uwaterloo.ca" target="_blank">
              UW Mathematics Society
            </Link>
          </p>
        </CustomListItem>
        <CustomListItem isSubItem>
          Represented students in society governance and council.
        </CustomListItem>
      </CustomList>
      <div className="my-4" />
    </div>
  );
}
