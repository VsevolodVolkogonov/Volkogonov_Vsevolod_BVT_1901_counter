import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 44px auto 1fr;
  width: 100%;
  min-height: 100vh;

  grid-template-areas:
            "Header"
            "."
            "Navigation"
            "Content"
;
`;

const Header = styled.div`
  grid-area: Header;
`;

const Navigation = styled.div`
  grid-area: Navigation;
`;

const PageContentWrapper = styled.div`
  grid-area: Content;
`;

export const Styled = {
    Wrapper,
    Header,
    Navigation,
    PageContentWrapper,
}