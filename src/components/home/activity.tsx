import { CustomList, CustomListItem } from "@/ui/custom-list";
import Link from "next/link";

export function Activity() {
  return (
    <div className="max-w-xl mx-auto my-4 px-4 home-page-content">
      <CustomList>
        <CustomListItem>
          <p className="font-bold">Currently:</p>
        </CustomListItem>
        <CustomListItem isSubItem>
          Studying CS @{" "}
          <Link href="https://uwaterloo.ca" target="_blank">
            University of Waterloo
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Engineer @{" "}
          <Link href="https://coderabbit.ai" target="_blank">
            CodeRabbit
          </Link>
        </CustomListItem>

        <div className="my-4" />

        <CustomListItem>
          <p className="font-bold">Recently:</p>
        </CustomListItem>
        <CustomListItem isSubItem>
          Software Developer @{" "}
          <Link href="https://airfairness.com" target="_blank">
            airfairness
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          President + Advisor @{" "}
          <Link href="https://csclub.uwaterloo.ca" target="_blank">
            UW Computer Science Club
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Cofounded @{" "}
          <Link href="https://nrghacks.ca" target="_blank">
            NRGHacks
          </Link>
        </CustomListItem>

        <div className="my-4" />

        <CustomListItem>
          I write articles. Check it out <Link href="/articles">here</Link>.
        </CustomListItem>

        <div className="my-4" />

        <CustomListItem>
          My resume is available{" "}
          <Link href="/resume.pdf" prefetch={false}>
            here
          </Link>
          .
        </CustomListItem>
      </CustomList>
      <div className="my-4" />
    </div>
  );
}
