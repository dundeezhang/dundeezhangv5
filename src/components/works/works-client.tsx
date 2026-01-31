"use client";

import { useState } from "react";
import { WorkCard } from "@/components/works/work-card";
import { WorksFilter } from "@/components/works/works-filter";
import worksData from "@/data/works.json";

interface Work {
  title: string;
  tech: string;
  description: string;
  image: string;
  repo: string;
  repoLabel: string;
  buttonClass: string;
  link: string;
}

export function WorksClient() {
  const [filteredWorks, setFilteredWorks] = useState<Work[]>(
    [...worksData].sort((a, b) => a.title.localeCompare(b.title)),
  );

  const handleFilteredWorksChange = (works: Work[]) => {
    setFilteredWorks(works);
  };

  return (
    <div className="py-4">
      <WorksFilter
        works={worksData}
        onFilteredWorksChange={handleFilteredWorksChange}
      />

      <div className="grid grid-cols-1 gap-6">
        {filteredWorks.map((work, index) => (
          <WorkCard
            key={index}
            title={work.title}
            tech={work.tech}
            description={work.description}
            image={work.image}
            repo={work.repo}
            repoLabel={work.repoLabel}
            buttonClass={work.buttonClass}
            link={work.link}
          />
        ))}
      </div>

      {filteredWorks.length === 0 && (
        <div className="text-center py-12">
          <p
            className="text-lg"
            style={{ color: "var(--foreground)", opacity: 0.6 }}
          >
            No projects found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}
