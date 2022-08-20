import React from "react";
import { ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";

export const Text: FC<{
  label?: string;
  separator?: boolean;
  subtitleContent?: string;
  isHeading?: boolean;
  children?: ReactNode;
}> = ({
  label,
  children,
  subtitleContent,
  isHeading = false,
  separator = false,
}) => {
  return (
    <ParagraphContent separator={separator}>
      {label && <Label htmlFor="content">{label}</Label>}
      {isHeading ? (
        <h2 style={{ margin: "2px 0" }} id="content">
          {children}
        </h2>
      ) : (
        <p style={{ margin: "2px 0" }} id="content">
          {children}
        </p>
      )}
      {subtitleContent && <Subtitle>{subtitleContent}</Subtitle>}
    </ParagraphContent>
  );
};

const Label = styled.label`
  font-weight: 600;
`;

const ParagraphContent = styled.div<{ separator: boolean }>`
  width: 100%;
  padding: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: ${({ separator }) => (separator ? "1px solid #ccc" : "none")};
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #aeaeae;
`;
