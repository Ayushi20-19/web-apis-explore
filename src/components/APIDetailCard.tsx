// APIDetailCard.tsx
import React from "react";
import { ApiData } from "../types";
import {
  APIDetailCardContainer,
  APIDetailCardHeader,
  APIDetailCardLogo,
  APIDetailCardTitle,
  APIDetailCardSection,
  APIDetailCardSectionHeader,
  APIDetailCardSectionText,
  APIDetailCardLink,
} from "../StyledComponents";

const APIDetailCard: React.FC<{ apiInfo: ApiData }> = ({ apiInfo }) => (
  <APIDetailCardContainer>
    <APIDetailCardHeader>
      {apiInfo.info["x-logo"] && (
        <APIDetailCardLogo src={apiInfo.info["x-logo"].url} alt="API Logo" />
      )}
      <APIDetailCardTitle>{apiInfo.info.title}</APIDetailCardTitle>
    </APIDetailCardHeader>
    <APIDetailCardSection>
      <APIDetailCardSectionHeader>Description</APIDetailCardSectionHeader>
      <APIDetailCardSectionText>
        {apiInfo.info.description}
      </APIDetailCardSectionText>
    </APIDetailCardSection>
    <APIDetailCardSection>
      <APIDetailCardSectionHeader>Swagger</APIDetailCardSectionHeader>
      <APIDetailCardLink href={apiInfo.swaggerUrl}>
        {apiInfo.swaggerUrl}
      </APIDetailCardLink>
    </APIDetailCardSection>
    <APIDetailCardSection>
      <APIDetailCardSectionHeader>Contact</APIDetailCardSectionHeader>
      <APIDetailCardSectionText>
        Email: {apiInfo.info.contact?.email}
      </APIDetailCardSectionText>
      <APIDetailCardSectionText>
        Name: {apiInfo.info.contact?.name}
      </APIDetailCardSectionText>
      <APIDetailCardSectionText>
        URL:{" "}
        {apiInfo.info.contact?.url && (
          <APIDetailCardLink href={apiInfo.info.contact.url}>
            {apiInfo.info.contact.url}
          </APIDetailCardLink>
        )}
      </APIDetailCardSectionText>
    </APIDetailCardSection>
  </APIDetailCardContainer>
);

export default APIDetailCard;
