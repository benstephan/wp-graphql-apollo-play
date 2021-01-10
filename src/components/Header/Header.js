import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "./Header.scss";
const PAGES = gql`
  query getPages {
    menu(id: "dGVybToxMQ==") {
      menuItems {
        edges {
          node {
            id
            url
            path
          }
        }
      }
    }
  }
`;
export const Header = () => {
  const { data } = useQuery(PAGES);

  const [menu, setMenu] = useState();

  useEffect(() => {
    data && setMenu(data.menu.menuItems.edges.map((items) => items.node));
  }, [data]);

  let history = useHistory();

  return (
    <header className="main-header">
      <div className="main-header__logo">Ben Stephan</div>
      <div className="main-header__menu">
        <nav>
          {menu &&
            menu.map((menuItem, i) => (
              <a key={i} href={`/${menuItem.path.split("/")[2]}`} onClick={() => history.push(`/${menuItem.path.split("/")[2]}`)}>
                {menuItem.path.split("/")[2]}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
};
