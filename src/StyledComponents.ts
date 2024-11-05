import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//--providerlist
interface AccordionItemContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  expanded: boolean;
}
export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 15px 25px;
  cursor: pointer;
  background-color: #46c7ed;
  color: white;
  border: none;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ExpandIcon = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const AccordionItem = styled.div`
  margin: 10px 0;
  cursor: pointer;
`;

export const AccordionContent = styled.div`
  border-radius: 0 0 5px 5px;
  background-color: #262c33;
  max-height: 230px;
  overflow-y: scroll;
`;

export const Sidebar = styled.div`
  width: 450px;
  background-color: #2c3e50;
  padding: 20px;
  color: white;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  overflow-y: scroll;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SidebarTitle = styled.h3`
  text-align: center;
  width: 100%;
`;

export const AccordionItemHeader = styled.div<AccordionItemContainerProps>`
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  padding: 10px;
  background: ${({ expanded }) => (expanded ? "#262c33" : "#2c3e50")};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//---apidetails
export const ApiItem = styled.div`
  cursor: pointer;
  padding: 5px 20px;
  color: #ccc;
  height: 30px;
  overflow: scroll;
  background-color: #262c33;
`;
export const APIContainer = styled.div`
  background-color: #2c3e50;
  padding: 20px;
  min-height: 100vh;
`;

export const BackButton = styled(FontAwesomeIcon)`
  margin-left: 10px;
  color: #ccc;
  cursor: pointer;
`;

//---apidetailCards

export const APIDetailCardContainer = styled.div`
  background-color: #2c3e50;
  padding: 10px 40px;
  border-radius: 8px;
  color: #fff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 0 auto;
`;

export const APIDetailCardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const APIDetailCardLogo = styled.img`
  background-color: #2c3e50;
  width: 100px;
  border-radius: 8px;
  margin-right: 20px;
`;

export const APIDetailCardTitle = styled.h3`
  color: #3498db;
`;

export const APIDetailCardSection = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const APIDetailCardSectionHeader = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const APIDetailCardSectionText = styled.p`
  font-size: 16px;
`;

export const APIDetailCardLink = styled.a`
  font-size: 16px;
  color: #3498db;
`;
