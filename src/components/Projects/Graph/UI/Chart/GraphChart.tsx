import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_USED_LANGUAGE,
  LanguageNode,
  LanguageNodeArray,
  UsedLanguages,
} from "../../../../../graphQL/query";

const GraphChart = () => {
  const [result, setResult] = useState<LanguageNodeArray>();
  const { loading, data, error } = useQuery<UsedLanguages>(GET_USED_LANGUAGE, {
    variables: {
      login: process.env.REACT_APP_GITHUB_USER,
    },
  });

  useEffect(() => {
    if (data && !loading) {
      setResult(data.user.repositories.nodes as unknown as LanguageNodeArray);
    }
  }, [data, loading]);

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <>Loading ...</>;
  }

  const nameList = result?.map((x: LanguageNode) => x.name);

  return <div>{nameList}</div>;
};

export default GraphChart;
