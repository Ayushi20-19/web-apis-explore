import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAPIsByProvider } from "../services/api";
import APIDetailCard from "../components/APIDetailCard";
import { APIContainer, BackButton } from "../StyledComponents";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const APIDetails: React.FC = () => {
  const { providerName } = useParams<{ providerName: string }>();
  const [apiDetails, setApiDetails] = useState<any | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (providerName) {
      getAPIsByProvider(providerName).then(setApiDetails);
    }
  }, [providerName]);

  if (!apiDetails) return <div>Loading...</div>;

  return (
    <APIContainer>
      <BackButton
        icon={faChevronLeft}
        onClick={(e) => {
          e.stopPropagation();
          navigate("/");
        }}
      />
      {Object.keys(apiDetails.apis).map((apiKey) => (
        <APIDetailCard key={apiKey} apiInfo={apiDetails.apis[apiKey]} />
      ))}
    </APIContainer>
  );
};

export default APIDetails;
