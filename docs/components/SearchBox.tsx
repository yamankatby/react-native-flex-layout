import React from "react";
import { DocSearch } from "@docsearch/react";

const SearchBox: React.FC = () => (
  <div className="h-10 m-4">
    <DocSearch
      appId="WD3G2Z41AL"
      apiKey="bdd5e05a9f783490522351fc0bd49d97"
      indexName="react-native-flex-layout"
    />
  </div>
)

export default SearchBox;
