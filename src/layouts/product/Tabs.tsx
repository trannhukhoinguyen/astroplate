"use client";

import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import LoadingDescription from "../skeleton/SkeletonDescription.tsx";

const Tabs = ({ descriptionHtml }: { descriptionHtml: string }) => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const contentArray = description.split(`--- split content ---`);

  useEffect(() => {
    setDescription(descriptionHtml);
    setLoading(false);
  }, [descriptionHtml]);

  if (loading) {
    return <LoadingDescription />;
  }

  return (
    <Tab.Group>
      <Tab.List className="border-b-2 relative border-border dark:border-light">
        <Tab
          className={({ selected }) =>
            `${
              selected
                ? "border-t-2 border-l-2 border-r-2 border-b-0 bg-body dark:bg-darkmode-body border-border dark:border-light"
                : "border-transparent"
            } cursor-pointer focus:outline-none px-6 rounded-tl-md rounded-tr-md absolute -top-[46px] left-0 h-12 py-2 border-t-2 border-l-2 border-r-2 border-b-0`
          }
        >
          Description
        </Tab>
        {contentArray[1] && (
          <Tab
            className={({ selected }) =>
              `${
                selected
                  ? "border-t-2 border-l-2 border-r-2 border-b-0 border-border dark:border-light bg-body dark:bg-darkmode-body"
                  : "border-transparent"
              } cursor-pointer focus:outline-none px-6 rounded-tl-md rounded-tr-md absolute -top-[46px] left-32 h-12 py-2 border-t-2 border-l-2 border-r-2 border-b-0`
            }
          >
            More Info
          </Tab>
        )}
      </Tab.List>
      <Tab.Panels className="border-l-2 border-r-2 border-b-2 border-border dark:border-light rounded-bl-md rounded-br-md p-6">
        <Tab.Panel>
          <div
            className="space-y-4"
            dangerouslySetInnerHTML={{ __html: contentArray[0] }}
          />
        </Tab.Panel>
        {contentArray[1] && (
          <Tab.Panel>
            <div
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: contentArray[1] }}
            />
          </Tab.Panel>
        )}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
