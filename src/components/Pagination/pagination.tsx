import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import s from "./styles.module.scss";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface MyPaginationProps {
  totalPages: string | undefined;
}

export const MyPagination = ({ totalPages }: MyPaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pages = useMemo(() => {
    const page = searchParams.get("page");
    if (page && page !== "1") {
      if (totalPages === page) {
        return [+page - 2, +page - 1, page];
      }
      return [+page - 1, page, +page + 1];
    } else {
      return [1, 2, 3];
    }
  }, [searchParams.get("page")]);

  const changePage = (page: string) => {
    if (page === searchParams.get("page")) {
      return;
    } else {
      setSearchParams(new URLSearchParams({ page }));
    }
  };

  const nextPage = () => {
    const page = searchParams.get("page");
    if (page) {
      changePage((+page + 1).toString());
    } else {
      changePage("1");
    }
  };

  const prevPage = () => {
    const page = searchParams.get("page");
    if (page) {
      changePage((+page - 1).toString());
    } else {
      changePage("1");
    }
  };

  return (
    <Pagination className={s.pagination}>
      <PaginationContent>
        <PaginationItem onClick={prevPage}>
          <PaginationPrevious />
        </PaginationItem>
        {pages.map((el) => (
          <PaginationItem onClick={() => changePage(el.toString())}>
            <PaginationLink
              className={cn(
                "cursor-pointer",
                searchParams.get("page") === el && "border-2"
              )}
            >
              {el}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem onClick={nextPage}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
