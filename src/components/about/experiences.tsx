import { CustomList, CustomListItem } from "@/ui/custom-list";
import Link from "next/link";

export function Experiences() {
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
          Advising @{" "}
          <Link href="https://csclub.uwaterloo.ca" target="_blank">
            UW Computer Science Club
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Writing @{" "}
          <Link href="https://blog.dhz.app" target="_blank">
            blog.dhz.app
          </Link>
        </CustomListItem>

        <div className="my-4" />

        <CustomListItem>
          <p className="font-bold">Previously:</p>
        </CustomListItem>
        <CustomListItem isSubItem>
          Software Developer @{" "}
          <Link href="https://airfairness.com" target="_blank">
            airfairness
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          President @{" "}
          <Link href="https://csclub.uwaterloo.ca" target="_blank">
            UW Computer Science Club
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Director @{" "}
          <Link href="https://mathsoc.uwaterloo.ca" target="_blank">
            UW Mathematics Society
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Lifesaving Instructor @{" "}
          <Link href="https://www.newmarket.ca/" target="_blank">
            Town of Newmarket
          </Link>
        </CustomListItem>
      </CustomList>
      <div className="my-4" />
    </div>
  );
}
