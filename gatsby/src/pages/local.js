import React from "react"
import dayjs from "dayjs"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { fruits, vegetables } from "../assets/produce"
import styled from "styled-components"
import { IoTerminalSharp } from "react-icons/io5"

const ListStyles = styled.ul`
  padding-left: 5%;
  margin: 0 auto;
  max-width: 1000px;
  width: 95%;
  --columns: 3;
  -moz-column-count: var(--columns);
  -moz-column-gap: 20px;
  -webkit-column-count: var(--columns);
  -webkit-column-gap: 20px;
  column-count: var(--columns);
  column-gap: 20px;
  @media (max-width: 800px) {
    --columns: 2;
  }
  @media (max-width: 500px) {
    --columns: 1;
  }
  li {
    margin-left: 20px;
  }
`
const InSeason = ({ produce }) => {
  const current_month = dayjs().format("MMM").toUpperCase()
  return (
    <ListStyles>
      {produce.map((item, i) => {
        if (!item.months.find(month => month == current_month)) return
        return <li key={`${item.name.split(" ")[0]}-${i}`}>{item.name}</li>
      })}
    </ListStyles>
  )
}

const LocalPage = () => (
  <Layout>
    <SEO title="Local Produce" />
    <h2>{`In Season during ${dayjs().format("MMMM")}`}</h2>
    <h3>Fruits</h3>
    <InSeason produce={fruits} />
    <h3>Veggies</h3>
    <InSeason produce={vegetables} />
    <p>
      view all fruits &amp; veg at{" "}
      <a href="https://www.ontario.ca/foodland/page/availability-guide">
        Foodland Ontario
      </a>
    </p>
  </Layout>
)

export default LocalPage
