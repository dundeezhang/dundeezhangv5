import { Intro } from "@/components/intro";
import { Footer } from "@/components/footer";
import Grid from "@/components/background";
import { CustomList, CustomListItem } from "@/components/custom-list";

export default function Home() {
  return (
    <div className="">
      <Grid />
      <main>
        <Intro />
        <div className="max-w-xl mx-auto my-4 px-4 home-page-content">
          <CustomList>
            <CustomListItem>Currently:</CustomListItem>
            <CustomListItem isSubItem>
              Studying CS @ University of Waterloo
            </CustomListItem>
            <CustomListItem isSubItem>
              Advising @ UW Computer Science Club
            </CustomListItem>

            <div className="my-4" />

            <CustomListItem>Recently:</CustomListItem>
            <CustomListItem isSubItem>
              Software Developer @ airfairness
            </CustomListItem>
            <CustomListItem isSubItem>
              President @ UW Computer Science Club
            </CustomListItem>
            <CustomListItem isSubItem>Cofounded @ NRGHacks</CustomListItem>

            <div className="my-4" />

            <CustomListItem>
              I also write and maintain a blog. Check it out here.
            </CustomListItem>
          </CustomList>
        </div>
      </main>
      <Footer />
    </div>
  );
}
