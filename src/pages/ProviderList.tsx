import React, { useState } from "react";
import { getProviders, getAPIsByProvider } from "../services/api";
import {
  Container,
  Button,
  CloseButton,
  AccordionItem,
  AccordionContent,
  Sidebar,
  Overlay,
  SidebarHeader,
  SidebarTitle,
  AccordionItemHeader,
  ApiItem,
} from "../StyledComponents";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const ProviderList: React.FC = () => {
  const [providers, setProviders] = useState<string[]>([]);
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);
  const [apis, setApis] = useState<{ [key: string]: string[] }>({});
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getApisData = async () => {
    const res = await getProviders();
    setProviders(res?.data);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    if (!isSidebarOpen) {
      getApisData();
    }
  };

  const toggleProvider = async (provider: string) => {
    if (expandedProvider === provider) {
      setExpandedProvider(null);
    } else {
      setExpandedProvider(provider);
      if (!apis[provider]) {
        const details = await getAPIsByProvider(provider);
        setApis((prevApis) => ({
          ...prevApis,
          [provider]: Object.keys(details.apis),
        }));
      }
    }
  };
  const openApiProviderPage = (provider: string) => {
    navigate(`/${provider}/`);
  };

  return (
    <Container>
      <Button onClick={toggleSidebar}>Explore Web API</Button>
      {isSidebarOpen && (
        <Overlay>
          <Sidebar>
            <SidebarHeader>
              <SidebarTitle>Select Provider</SidebarTitle>
              <CloseButton onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
            </SidebarHeader>
            {providers.map((provider, index) => (
              <AccordionItem key={provider}>
                <AccordionItemHeader
                  onClick={() => toggleProvider(provider)}
                  expanded={expandedProvider === provider}
                >
                  {provider}
                  <FontAwesomeIcon
                    icon={
                      expandedProvider === provider
                        ? faChevronUp
                        : faChevronDown
                    }
                    style={{ marginLeft: "10px", color: "#ccc" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleProvider(provider);
                    }}
                  />
                </AccordionItemHeader>
                {expandedProvider === provider && (
                  <AccordionContent>
                    {apis[provider] ? (
                      apis[provider].map((api) => (
                        <ApiItem
                          key={api}
                          onClick={() => openApiProviderPage(provider)}
                        >
                          {api}
                        </ApiItem>
                      ))
                    ) : (
                      <div
                        style={{
                          padding: "5px 20px",
                          color: "#ccc",
                          backgroundColor: "#262c33",
                        }}
                      >
                        Loading...
                      </div>
                    )}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Sidebar>
        </Overlay>
      )}
    </Container>
  );
};

export default ProviderList;
