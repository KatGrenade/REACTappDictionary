import React from "react";

export default function Synonyms(props) {
  if (props.synonymslist) {
    return (
      <ul className="Synonyms">
        {props.synonymslist.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
