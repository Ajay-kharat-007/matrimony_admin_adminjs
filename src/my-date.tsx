import React from "react";
import { ShowPropertyProps } from "adminjs";

const MyDateComponent: React.FC<ShowPropertyProps> = (props) => {
  const { property, record } = props;
  const refId = record.params[property.path];
  const populated = record.populated[property.path];
  const value = (populated && populated.title) || refId;

  return <input />;
};

export default MyDateComponent;
