"use client";

import { SortFilterItem, sorting } from "@/lib/constants.ts";
import { createUrl } from "@/lib/utils.ts";
import ProductFilters from "@/partials/ProductFilters.tsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { TbFilter, TbFilterX } from "react-icons/tb";
import DropdownMenu from "../filter/DropdownMenu.tsx";

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

const ProductLayouts = ({
  categories,
  vendors,
  tags,
  maxPriceData,
  vendorsWithCounts,
  categoriesWithCounts,
}: any) => {
  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } =
    useCollapse();

  const router = useRouter();
  const searchParams = useSearchParams();
  const [isInputEditing, setInputEditing] = useState(false);
  const isListView = searchParams.get("layout") === "list";

  useEffect(() => {
    const inputField = document.getElementById(
      "searchInput",
    ) as HTMLInputElement;
    if (isInputEditing || searchParams.get("q")) {
      inputField.focus();
    }
  }, [searchParams, isInputEditing]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".collapse-container-class") &&
        !target.closest(".filter-button-container") &&
        isExpanded
      ) {
        setExpanded(false);
      }

      // set input editing state to false when clicking outside the input
      if (
        !target.closest("#searchInput") &&
        isInputEditing &&
        document.getElementById("searchInput")
      ) {
        setInputEditing(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isExpanded, setExpanded, isInputEditing]);

  function layoutChange(isCard: string) {
    const newParams = new URLSearchParams(searchParams.toString());

    if (isCard == "list") {
      newParams.set("layout", isCard);
    } else {
      newParams.delete("layout");
    }
    router.push(createUrl("/products", newParams), { scroll: false });
  }

  return (
    <>
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-3 max-lg:hidden" />

            <div className="col-12 lg:col-9">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-x-4 items-center font-medium text-xs md:text-base">
                  <p className="max-md:hidden text-dark dark:text-darkmode-dark">
                    Views
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => layoutChange("card")}
                      className={`btn border dark:border-darkmode-border ${
                        isListView ? "btn-outline-primary" : "btn-primary"
                      } p-2 hover:scale-105 duration-300`}
                    >
                      <BsGridFill />
                    </button>
                    <button
                      onClick={() => layoutChange("list")}
                      className={`btn border dark:border-darkmode-border ${
                        isListView ? "btn-primary" : "btn-outline-primary"
                      } p-2 hover:scale-105 duration-300`}
                    >
                      <FaList />
                    </button>
                  </div>
                </div>

                <div className="flex gap-x-8">
                  {/* Filter Button Trigger */}
                  <div className="filter-button-container block lg:hidden mt-1">
                    <button {...getToggleProps()}>
                      {isExpanded ? (
                        <span className="font-medium text-base flex gap-x-1 items-center justify-center">
                          <TbFilterX /> Filter
                        </span>
                      ) : (
                        <span className="font-medium text-base flex gap-x-1 items-center justify-center">
                          <TbFilter /> Filter
                        </span>
                      )}
                    </button>
                  </div>
                  {/* Filter Button Trigger End */}

                  <div className="flex gap-x-4 items-center font-medium text-sm md:text-base relative z-20">
                    <p className="max-md:hidden text-dark dark:text-darkmode-dark">
                      Sort By
                    </p>
                    <DropdownMenu list={sorting} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 lg:col-3">
              <div className="lg:block relative">
                <div className="block lg:hidden w-full">
                  {/* <div className="filter-button-container mb-4 text-center">
                    <button {...getToggleProps()}>
                      {isExpanded ? (
                        <span className="font-medium text-base flex gap-x-1 items-center justify-center">
                          <TbFilterX /> Filter
                        </span>
                      ) : (
                        <span className="font-medium text-base flex gap-x-1 items-center justify-center">
                          <TbFilter /> Filter
                        </span>
                      )}
                    </button>
                  </div> */}
                  <section
                    className="collapse-container-class z-20 bg-body dark:bg-darkmode-body w-full px-4 rounded-md"
                    {...getCollapseProps()}
                  >
                    <div className="pb-8">
                      <ProductFilters
                        categories={categories}
                        vendors={vendors}
                        tags={tags}
                        maxPriceData={maxPriceData}
                        vendorsWithCounts={vendorsWithCounts}
                        categoriesWithCounts={categoriesWithCounts}
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductLayouts;
