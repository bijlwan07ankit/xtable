import { useState } from "react";
import "./App.css";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export default function App() {
  const [items, setItems] = useState(data);
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button
        onClick={() =>
          setItems([
            ...items.sort((a, b) => new Date(b.date) - new Date(a.date)),
          ])
        }
      >
        Sort by Date
      </button>
      <button
        onClick={() => setItems([...items.sort((a, b) => b.views - a.views)])}
      >
        Sort by Views
      </button>
      <br />
      <table>
        <tr>
          <td className="Bold">Date</td>
          <td className="Bold">Views</td>
          <td className="Bold">Article</td>
        </tr>
        {items.map((item, idx) => {
          return (
            <tr>
              <td key={idx}>{item.date}</td>
              <td key={idx}>{item.views}</td>
              <td key={idx}>{item.article}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}