import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Preloader } from "../Preloader/Preloader";

const PAGE_CONTENT = gql`
  query getPages {
    pages {
      edges {
        node {
          title
          content
          slug
        }
      }
    }
  }
`;
export const Page = () => {
  const pathName = window.location.pathname.split("/")[1];
  
  const { data, loading } = useQuery(PAGE_CONTENT);

  const [pages, setPages] = useState();

  useEffect(() => {
    data &&
      setPages(
        data.pages.edges
          .filter((item) => item.node.slug === pathName)
          .map((page) => page.node)[0]
      );
  }, [data]);
  
  return (
    <div>
      {loading && <Preloader />}
      {pages && 
      <>
      <h1>Page: {pages.title}</h1>
      <div dangerouslySetInnerHTML={{__html: pages.content}}></div>
      </>
      }
    </div>
  );
};
