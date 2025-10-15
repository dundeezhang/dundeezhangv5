"use client";

import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "@/constants/icons";

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

interface WorksFilterProps {
  works: Work[];
  onFilteredWorksChange: (filteredWorks: Work[]) => void;
}

export function WorksFilter({
  works,
  onFilteredWorksChange,
}: WorksFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Extract all unique tags from works data
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    works.forEach((work) => {
      work.tech.split(", ").forEach((tag) => {
        tagSet.add(tag.trim());
      });
    });
    return Array.from(tagSet).sort();
  }, [works]);

  // filter works based on search query and selected tags
  const filteredWorks = useMemo(() => {
    // seperate the last project (More Projects) from the rest
    const lastProject = works[works.length - 1];
    const otherWorks = works.slice(0, -1);

    let filtered = otherWorks;

    // search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((work) => {
        return (
          work.title.toLowerCase().includes(query) ||
          work.description.toLowerCase().includes(query) ||
          work.tech.toLowerCase().includes(query)
        );
      });
    }

    // tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((work) => {
        const workTags = work.tech.split(", ").map((tag) => tag.trim());
        return selectedTags.some((selectedTag) =>
          workTags.includes(selectedTag),
        );
      });
    }

    // sort
    filtered.sort((a, b) => a.title.localeCompare(b.title));

    // + last project
    return [...filtered, lastProject];
  }, [works, searchQuery, selectedTags]);

  useEffect(() => {
    onFilteredWorksChange(filteredWorks);
  }, [filteredWorks, onFilteredWorksChange]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const displayedTags = showAllTags ? allTags : allTags.slice(0, 10);

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div
          className="relative rounded shadow-sm overflow-hidden backdrop-blur-sm transition-all duration-300"
          style={{
            backgroundColor: "var(--glass-bg)",
            border: `1px solid ${isSearchFocused ? "var(--pink)" : "var(--button-border)"}`,
          }}
          onMouseEnter={(e) => {
            if (!isSearchFocused) {
              e.currentTarget.style.borderColor = "var(--pink)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isSearchFocused) {
              e.currentTarget.style.borderColor = "var(--button-border)";
            }
          }}
        >
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            size={DEFAULT_ICON_SIZE}
            style={{ color: "var(--foreground)", opacity: 0.6 }}
          />
          <input
            type="text"
            placeholder="Search projects"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full py-2 pl-12 pr-4 bg-transparent outline-none text-lg"
            style={{ color: "var(--foreground)" }}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {displayedTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagToggle(tag)}
            className={`shadow-sm px-2 py-1 rounded text-sm font-medium transition-all duration-200 backdrop-blur-sm`}
            style={{
              backgroundColor: selectedTags.includes(tag)
                ? "var(--pink)"
                : "var(--glass-bg)",
              color: selectedTags.includes(tag) ? "white" : "var(--foreground)",
              border: "1px solid var(--button-border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--pink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--button-border)";
            }}
          >
            {tag}
          </button>
        ))}

        {/* Show More Button */}
        {allTags.length > 10 && (
          <button
            onClick={() => setShowAllTags(!showAllTags)}
            className="shadow-sm px-2 py-1 rounded text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            style={{
              backgroundColor: "var(--glass-bg)",
              color: "var(--foreground)",
              border: "1px solid var(--button-border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--pink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--button-border)";
            }}
          >
            {showAllTags ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
}
