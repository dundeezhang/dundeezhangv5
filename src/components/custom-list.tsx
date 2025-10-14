import { ArrowBigRight, ArrowBigRightDash } from "lucide-react";
import { ReactNode } from "react";

interface CustomListProps {
  children: ReactNode;
  className?: string;
}

interface CustomListItemProps {
  children: ReactNode;
  isSubItem?: boolean;
}

export function CustomList({ children, className = "" }: CustomListProps) {
  return <ul className={`space-y-2 ${className}`}>{children}</ul>;
}

export function CustomListItem({
  children,
  isSubItem = false,
}: CustomListItemProps) {
  return (
    <li className={`flex items-start gap-2 ${isSubItem ? "ml-6" : ""}`}>
      {isSubItem ? (
        <ArrowBigRightDash
          size={16}
          className="text-gray-500 mt-1 flex-shrink-0"
        />
      ) : (
        <ArrowBigRight size={16} className="text-gray-600 mt-1 flex-shrink-0" />
      )}
      <span className="flex-1">{children}</span>
    </li>
  );
}
