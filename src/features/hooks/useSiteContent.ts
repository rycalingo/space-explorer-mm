// /hooks/useSiteContent

import { useContext } from "react";

import { SiteContent } from "@/features/utility/ContentProvider";
import { Page } from "@/models/pages";

interface Data {
  data?: Page
}

export default () => {
  const content: Data = useContext(SiteContent);

  return content;
};